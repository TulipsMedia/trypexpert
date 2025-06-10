import React, { useState, useEffect } from "react";

export const DateFilter = ({
  selectedDate,
  setSelectedDate,
  accordionId = "filterAccordion",
}) => {
  // Initialize local state to sync with selectedDate
  const [date, setDate] = useState(selectedDate || null);

  // Sync local state with prop changes (e.g., when cleared)
  useEffect(() => {
    setDate(selectedDate || null);
  }, [selectedDate]);

  // Handle date change
  const handleDateChange = (event) => {
    const newDate = event.target.value ? new Date(event.target.value) : null;
    setDate(newDate);
    setSelectedDate(newDate);
  };

  // Format date for input (YYYY-MM-DD)
  const formatDateForInput = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  // Get today's date for min attribute (YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="accordion-item">
      <h3 className="accordion-header" id={`dateFilter-${accordionId}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#dateCollapse-${accordionId}`}
          aria-expanded="false"
          aria-controls={`dateCollapse-${accordionId}`}
          aria-label="Open date picker"
        >
          Date
        </button>
      </h3>
      <div
        id={`dateCollapse-${accordionId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`dateFilter-${accordionId}`}
        data-bs-parent={`#${accordionId}`}
      >
        <div className="accordion-body">
          <div className="row g-2">
            <div className="col-12">
              <input
                type="date"
                value={formatDateForInput(date)}
                onChange={handleDateChange}
                min={today}
                className="form-control"
                placeholder="Select a date"
                aria-label="Select a date"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};