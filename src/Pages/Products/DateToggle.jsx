import React, { useState, useEffect } from "react";

export const DateToggle = ({
  date,
  onDateChange,
  showModal,
  onOpenCalendar,
  onCloseCalendar,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1023);
  const [currentMonth, setCurrentMonth] = useState(date || new Date());
  const [isModalMobile, setIsModalMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const checkDevice = () => setIsModalMobile(window.innerWidth < 1023);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (date) {
      const normalizedDate = new Date(date);
      normalizedDate.setHours(0, 0, 0, 0);
      setCurrentMonth(normalizedDate);
    }
  }, [date]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calculate visible dates based on selected date
  const getVisibleDates = () => {
    const totalVisible = isMobile ? 4 : 7; // Total buttons (excluding "More dates")
    const daysBefore = isMobile ? 1 : 2;
    const daysAfter = isMobile ? 2 : 4;

    if (!date) {
      // If no date is selected, show dates starting from today
      const dates = Array.from({ length: totalVisible }, (_, i) => {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        return d;
      });
      return isMobile ? dates.slice(0, 4) : dates;
    }

    const selected = new Date(date);
    selected.setHours(0, 0, 0, 0);
    const dates = [];

    // Add dates before the selected date
    let actualDaysBefore = 0;
    for (let i = daysBefore; i > 0; i--) {
      const d = new Date(selected);
      d.setDate(selected.getDate() - i);
      if (d >= today) {
        dates.push(d);
        actualDaysBefore++;
      }
    }

    // Add the selected date
    dates.push(selected);

    // Add dates after the selected date
    const additionalDaysAfter = daysAfter + (daysBefore - actualDaysBefore); // Compensate for missing "before" dates
    for (let i = 1; i <= additionalDaysAfter; i++) {
      const d = new Date(selected);
      d.setDate(selected.getDate() + i);
      dates.push(d);
    }

    // Ensure the total number of dates matches the desired count
    return dates.slice(0, totalVisible);
  };

  const visibleDates = getVisibleDates();

  const formatDate = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d.toISOString().split("T")[0];
  };

  const formatDisplayDate = (d) =>
    d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const isSameDate = (a, b) => {
    if (!a || !b) return false;
    const dateA = new Date(a);
    const dateB = new Date(b);
    dateA.setHours(0, 0, 0, 0);
    dateB.setHours(0, 0, 0, 0);
    return (
      dateA.getDate() === dateB.getDate() &&
      dateA.getMonth() === dateB.getMonth() &&
      dateA.getFullYear() === dateB.getFullYear()
    );
  };

  const pricingData = {
    "2025-06-07": "₹4.1K",
    "2025-06-08": "₹3.7K",
    "2025-06-09": "₹3.7K",
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDate = firstDay.getDay();
    const days = Array(startDate).fill(null);
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    return days;
  };

  const isDateDisabled = (date) => {
    if (!date) return true;
    const dateOnly = new Date(date);
    dateOnly.setHours(0, 0, 0, 0);
    return dateOnly < today;
  };

  const getDatePrice = (date) => {
    if (!date) return null;
    return pricingData[formatDate(date)] || "₹3.7K";
  };

  const handleDateSelect = (date) => {
    if (isDateDisabled(date)) return;
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);
    onDateChange(normalizedDate);
    onCloseCalendar();
  };

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(newMonth.getMonth() + direction);
      return newMonth;
    });
  };

  const renderCalendar = (monthOffset = 0) => {
    const displayMonth = new Date(currentMonth);
    displayMonth.setMonth(displayMonth.getMonth() + monthOffset);
    const days = getDaysInMonth(displayMonth);
    const monthName = displayMonth.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

    return (
      <div className="calendar-month">
        <h6 className="text-center mb-3">{monthName}</h6>
        <div className="calendar-grid">
          <div className="calendar-header">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="calendar-day-header">
                {day}
              </div>
            ))}
          </div>
          <div className="calendar-body">
            {days.map((day, index) => (
              <div
                key={index}
                className={`calendar-day ${
                  day
                    ? isDateDisabled(day)
                      ? "disabled"
                      : "available"
                    : "empty"
                } ${day && isSameDate(day, date) ? "selected" : ""}`}
                onClick={() =>
                  day && !isDateDisabled(day) && handleDateSelect(day)
                }
              >
                {day && (
                  <>
                    <div className="day-number">{day.getDate()}</div>
                    {!isDateDisabled(day) && (
                      <div className="day-price">{getDatePrice(day)}</div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="border rounded p-3 shadow-sm bg-white mb-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center gap-2">
            <span>
              <i className="text-black hicon-bold hicon hicon-calendar-onmap"></i>
            </span>
            <strong>{date ? formatDisplayDate(date) : "Select a date"}</strong>
          </div>
          <button
            className="btn btn-link p-0"
            onClick={onOpenCalendar}
            aria-label="Open calendar"
          >
            <i className="text-black hicon-bold hicon hicon-edit"></i>
          </button>
        </div>

        <div className="d-flex gap-1 gap-md-2 mb-2 flex-wrap">
          {visibleDates.map((d, i) =>
            d ? (
              <button
                key={i}
                onClick={() => {
                  const normalizedDate = new Date(d);
                  normalizedDate.setHours(0, 0, 0, 0);
                  if (!isSameDate(date, normalizedDate)) {
                    onDateChange(normalizedDate);
                  }
                }}
                className={`date-btn btn rounded border flex-fill ${
                  date && isSameDate(date, d)
                    ? "btn-dark text-white"
                    : "btn-outline-dark"
                }`}
                aria-label="Date button"
              >
                <div className="small">
                  {d.toLocaleDateString("en-US", { weekday: "short" })}
                </div>
                <div className="fw-bold">
                  {d.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <div className="small">{getDatePrice(d)}</div>
              </button>
            ) : (
              <div key={i} style={{ flexGrow: 1 }}></div>
            )
          )}
          <button
            className="date-btn btn btn-outline-dark border d-flex flex-column align-items-center justify-content-center"
            onClick={onOpenCalendar}
            aria-label="More dates"
          >
            <div>
              <i className="hicon-bold hicon hicon-calendar-onmap"></i>
            </div>
            <small>More dates</small>
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div
            className={`modal-dialog ${
              isModalMobile
                ? "modal-dialog-centered"
                : "modal-lg modal-dialog-centered"
            }`}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Select Date</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onCloseCalendar}
                  aria-label="Close modal"
                ></button>
              </div>
              <div className="modal-body">
                <div className="calendar-container mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <button
                      className="splide__arrow splide__arrow--prev"
                      onClick={() => navigateMonth(-1)}
                      aria-label="Prev month"
                    >
                      <i className="hicon hicon-edge-arrow-left"></i>
                    </button>
                    <button
                      className="splide__arrow splide__arrow--next"
                      onClick={() => navigateMonth(1)}
                      aria-label="Next month"
                    >
                      <i className="hicon hicon-edge-arrow-right"></i>
                    </button>
                  </div>
                  <div
                    className={`calendar-wrapper ${
                      isModalMobile ? "single-month" : "dual-month"
                    }`}
                  >
                    {renderCalendar(0)}
                    {!isModalMobile && renderCalendar(1)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
