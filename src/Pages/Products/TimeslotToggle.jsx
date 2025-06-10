import React, { useState, useEffect } from "react";

export const TimeslotToggle = ({
  timeslot,
  onTimeslotChange,
  selectedDate,
}) => {
  const basePrice = 250;
  const allTimeslots = [
    { time: "5:00am", price: basePrice, closes: "11:30pm" },
    { time: "5:30am", price: basePrice + 50, closes: "11:30pm" },
    { time: "6:00am", price: basePrice + 100, closes: "11:30pm" },
    { time: "6:30am", price: basePrice + 150, closes: "11:30pm" },
    { time: "7:00am", price: basePrice + 200, closes: "11:30pm" },
    { time: "7:30am", price: basePrice + 250, closes: "11:30pm" },
    { time: "8:00am", price: basePrice + 300, closes: "11:30pm" },
    { time: "8:30am", price: basePrice + 350, closes: "11:30pm" },
    { time: "9:00am", price: basePrice + 400, closes: "11:30pm" },
    { time: "9:30am", price: basePrice + 450, closes: "11:30pm" },
  ];

  const [filteredTimeslots, setFilteredTimeslots] = useState(allTimeslots);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (!selectedDate) {
      setFilteredTimeslots(allTimeslots);
      return;
    }

    const currentTime = new Date();
    const selectedDateTime = new Date(selectedDate);
    selectedDateTime.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const isToday = selectedDateTime.getTime() === today.getTime();

    let filtered;

    if (isToday) {
      filtered = allTimeslots.filter((slot) => {
        const [time, period] = slot.time.split(/(am|pm)/);
        let [hours, minutes] = time.split(":").map(Number);
        if (period === "pm" && hours !== 12) hours += 12;
        if (period === "am" && hours === 12) hours = 0;

        const slotDateTime = new Date(selectedDateTime);
        slotDateTime.setHours(hours, minutes, 0, 0);

        return slotDateTime > currentTime;
      });
    } else {
      filtered = allTimeslots;
    }

    setFilteredTimeslots(filtered);

    if (timeslot && !filtered.some((slot) => slot.time === timeslot)) {
      if (filtered.length > 0) {
        onTimeslotChange(filtered[0].time);
      } else {
        onTimeslotChange("");
      }
    }
  }, [selectedDate, timeslot, onTimeslotChange]);

  const handleSelect = (slot) => {
    onTimeslotChange(slot.time);
    setDropdownOpen(false);
  };

  return (
    <div className="border rounded p-3 shadow-sm bg-white position-relative">
      <div
        className="d-flex align-items-center justify-content-between"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        style={{ cursor: "pointer" }}
      >
        <div className="fw-semibold">
          {timeslot ? `Selected: ${timeslot}` : "Select a time slot"}
        </div>
        <i
          className={`bi ${dropdownOpen ? "bi-chevron-up" : "bi-chevron-down"}`}
        ></i>
      </div>

      {dropdownOpen && (
        <div
          className="timeslot-dropdown mt-2"
          style={{ height: "400px", overflowY: "scroll", overflowX: "hidden" }}
        >
          {filteredTimeslots.length === 0 ? (
            <div className="p-3 text-center text-muted">
              No slots available at the moment.
            </div>
          ) : (
            filteredTimeslots.map((slot, i) => {
              const isActive = slot.time === timeslot;
              return (
                <div
                  key={i}
                  className={`d-flex justify-content-between align-items-center p-3 border-bottom ${
                    isActive ? "bg-black text-white" : "bg-white"
                  }`}
                  style={{ cursor: "pointer", height: "60px" }}
                  onClick={() => handleSelect(slot)}
                >
                  <div>
                    <div className="fw-semibold">{slot.time}</div>
                    <div className="small">Closes at: ${slot.closes}</div>
                  </div>
                  <div className="fw-semibold">
                    ₹${slot.price.toLocaleString()}
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
