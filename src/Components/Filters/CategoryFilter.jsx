import React from "react";

export const CategoryFilter = ({
  selectedCategories,
  setSelectedCategories,
  accordionId = "filterAccordion", // Default accordion ID for backward compatibility
}) => {
  const categories = [
    { id: 1, name: "Travel" },
    { id: 2, name: "Tour" },
    // Add more categories if needed
  ];

  const handleChange = (e, id) => {
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, id]);
    } else {
      setSelectedCategories(selectedCategories.filter((catId) => catId !== id));
    }
  };

  return (
    <div className="accordion-item">
      <h3 className="accordion-header" id={`categoryFilter-${accordionId}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#categoryCollapse-${accordionId}`}
          aria-expanded="false"
          aria-controls={`categoryCollapse-${accordionId}`}
          aria-label="Category filter"
        >
          Categories
        </button>
      </h3>
      <div
        id={`categoryCollapse-${accordionId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`categoryFilter-${accordionId}`}
        data-bs-parent={`#${accordionId}`}
      >
        <div className="accordion-body">
          <div className="row g-2">
            {categories.map((category) => (
              <div className="col-12" key={category.id}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={category.name}
                    id={`category-${category.id}-${accordionId}`}
                    checked={selectedCategories.includes(category.id)}
                    onChange={(e) => handleChange(e, category.id)}
                  />
                  <label
                    htmlFor={`category-${category.id}-${accordionId}`}
                    className="form-check-label"
                  >
                    {category.name}
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
