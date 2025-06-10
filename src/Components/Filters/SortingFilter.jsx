import React from "react";

export const SortingFilter = ({
  sortOption,
  setSortOption,
  accordionId = "filterAccordion", // Default accordion ID for backward compatibility
}) => {
  const sortingOptions = [
    { id: 1, name: "Recommended" },
    { id: 2, name: "Price: Low to high" },
    { id: 3, name: "Price: High to low" },
  ];

  return (
    <div className="accordion-item">
      <h3 className="accordion-header" id={`sortByFilter-${accordionId}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#sortingCollapse-${accordionId}`}
          aria-expanded="false"
          aria-controls={`sortingCollapse-${accordionId}`}
          aria-label="Sorting filter"
        >
          Sorting
        </button>
      </h3>
      <div
        id={`sortingCollapse-${accordionId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`sortByFilter-${accordionId}`}
        data-bs-parent={`#${accordionId}`}
      >
        <div className="accordion-body">
          <div className="row g-2">
            {sortingOptions.map((option) => (
              <div className="col-12" key={option.id}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`sort-by-${accordionId}`}
                    value={option.id}
                    id={`sort-${option.id}-${accordionId}`}
                    checked={sortOption === option.id}
                    onChange={() => setSortOption(option.id)}
                  />
                  <label
                    htmlFor={`sort-${option.id}-${accordionId}`}
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
