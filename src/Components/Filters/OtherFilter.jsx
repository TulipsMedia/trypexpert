import React from "react";

export const OtherFilter = ({
  selectedOthers,
  setSelectedOthers,
  accordionId = "filterAccordion", // Default accordion ID for backward compatibility
}) => {
  const otherOptions = [
    { id: 1, name: "Mobile Tickets" },
    { id: 2, name: "Official Reseller" },
    { id: 3, name: "Summer Offer" },
  ];

  const handleChange = (e, id) => {
    if (e.target.checked) {
      setSelectedOthers([...selectedOthers, id]);
    } else {
      setSelectedOthers(selectedOthers.filter((otherId) => otherId !== id));
    }
  };

  return (
    <div className="accordion-item">
      <h3 className="accordion-header" id={`othersFilter-${accordionId}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#othersCollapse-${accordionId}`}
          aria-expanded="false"
          aria-controls={`othersCollapse-${accordionId}`}
          aria-label="Other filters"
        >
          Others
        </button>
      </h3>
      <div
        id={`othersCollapse-${accordionId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`othersFilter-${accordionId}`}
        data-bs-parent={`#${accordionId}`}
      >
        <div className="accordion-body">
          <div className="row g-2">
            {otherOptions.map((option) => (
              <div className="col-12" key={option.id}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={option.id}
                    id={`other-${option.id}-${accordionId}`}
                    checked={selectedOthers.includes(option.id)}
                    onChange={(e) => handleChange(e, option.id)}
                  />
                  <label
                    htmlFor={`other-${option.id}-${accordionId}`}
                    className="form-check-label"
                  >
                    {option.name}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
