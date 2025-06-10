import React, { useState, useEffect } from "react";

export const DateCalendarModal = ({
  showModal,
  onClose,
  onDateSelect,
  selectedDate,
  pricingData,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 992);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const normalizedDate = new Date(selectedDate);
      normalizedDate.setHours(0, 0, 0, 0);
      setCurrentMonth(normalizedDate);
    }
  }, [selectedDate]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formatDate = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d.toISOString().split("T")[0];
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
    onDateSelect(normalizedDate);
    onClose();
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
            {days.map((date, index) => {
              const normalizedDate = date ? new Date(date) : null;
              if (normalizedDate) normalizedDate.setHours(0, 0, 0, 0);
              const normalizedSelectedDate = selectedDate
                ? new Date(selectedDate)
                : null;
              if (normalizedSelectedDate)
                normalizedSelectedDate.setHours(0, 0, 0, 0);

              return (
                <div
                  key={index}
                  className={`calendar-day ${
                    date
                      ? isDateDisabled(date)
                        ? "disabled"
                        : "available"
                      : "empty"
                  } ${
                    normalizedDate &&
                    normalizedSelectedDate &&
                    formatDate(normalizedDate) ===
                      formatDate(normalizedSelectedDate)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    date && !isDateDisabled(date) && handleDateSelect(date)
                  }
                >
                  {date && (
                    <>
                      <div className="day-number">{date.getDate()}</div>
                      {!isDateDisabled(date) && (
                        <div className="day-price">{getDatePrice(date)}</div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  if (!showModal) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div
        className={`modal-dialog ${
          isMobile ? "modal-dialog-centered" : "modal-lg modal-dialog-centered"
        }`}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Select Date</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close Calendar"
            ></button>
          </div>
          <div className="modal-body">
            <div className="calendar-container mb-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <button
                  className="splide__arrow splide__arrow--prev"
                  onClick={() => navigateMonth(-1)}
                  aria-label="Previous month"
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
                  isMobile ? "single-month" : "dual-month"
                }`}
              >
                {renderCalendar(0)}
                {!isMobile && renderCalendar(1)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
