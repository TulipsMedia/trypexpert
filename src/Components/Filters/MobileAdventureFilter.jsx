import React from "react";
import adventureData from "../../JsonData/adventureData";

export const MobileAdventureFilter = ({
  selectedAdventureIds,
  setSelectedAdventureIds,
  accordionId = "filterAccordion",
}) => {
  const handleChange = (e, id) => {
    if (e.target.checked) {
      setSelectedAdventureIds([...selectedAdventureIds, id]);
    } else {
      setSelectedAdventureIds(selectedAdventureIds.filter((aid) => aid !== id));
    }
  };

  return (
    <div className="accordion-item">
      <h3 className="accordion-header" id={`adventureFilter-${accordionId}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#adventureCollapse-${accordionId}`}
          aria-expanded="false"
          aria-controls={`adventureCollapse-${accordionId}`}
          aria-label="Mobile filter"
        >
          Adventure Types
        </button>
      </h3>
      <div
        id={`adventureCollapse-${accordionId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`adventureFilter-${accordionId}`}
        data-bs-parent={`#${accordionId}`}
      >
        <div className="accordion-body">
          <div className="row g-2">
            {adventureData.map((option) => (
              <div className="col-12" key={option.id}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={option.id}
                    id={`adventure-${option.id}-${accordionId}`}
                    checked={selectedAdventureIds.includes(option.id)}
                    onChange={(e) => handleChange(e, option.id)}
                  />
                  <label
                    htmlFor={`adventure-${option.id}-${accordionId}`}
                    className="form-check-label"
                  >
                    {option.title}
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
