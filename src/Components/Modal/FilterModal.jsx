import React from "react";
import { CategoryFilter } from "../Filters/CategoryFilter";
import { SortingFilter } from "../Filters/SortingFilter";
import { OtherFilter } from "../Filters/OtherFilter";
import { MobileAdventureFilter } from "../Filters/MobileAdventureFilter";
import { PriceRangeFilter } from "../Filters/PriceRange";
import { DateFilter } from "../Filters/DateFilter";
import tourData from "../../JsonData/tourData";

const FilterModal = ({
  showFilterModal,
  closeFilterModal,
  selectedCategories,
  setSelectedCategories,
  selectedOthers,
  setSelectedOthers,
  sortOption,
  setSortOption,
  selectedAdventureIds,
  setSelectedAdventureIds,
  selectedPriceRange,
  setSelectedPriceRange,
  // selectedDate,
  // setSelectedDate,
  destinationData,
  showAllFilters = false,
}) => {
  const tours = destinationData?.city
    ? tourData.filter((tour) => tour.city === destinationData.city)
    : tourData;
  const handleClear = () => {
    setSelectedOthers([]);
    setSortOption(1);
    setSelectedAdventureIds([]);
    if (showAllFilters) {
      setSelectedCategories([]);
      setSelectedPriceRange({
        min:
          tours.length > 0
            ? Math.min(...tours.map((tour) => tour.salePrice))
            : 0,
        max:
          tours.length > 0
            ? Math.max(...tours.map((tour) => tour.salePrice))
            : 0,
      });
      setSelectedDate(null);
    }
  };

  const handleApply = () => {
    closeFilterModal();
  };

  return (
    showFilterModal && (
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Filters & Sort</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeFilterModal}
                aria-label="Close modal"
              ></button>
            </div>
            <div className="modal-body">
              <div
                className="accordion accordion-filter"
                id="filterAccordionModal"
              >
                <MobileAdventureFilter
                  selectedAdventureIds={selectedAdventureIds}
                  setSelectedAdventureIds={setSelectedAdventureIds}
                  accordionId="filterAccordionModal"
                />
                {showAllFilters && (
                  <CategoryFilter
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                    accordionId="filterAccordionModal"
                  />
                )}
                {showAllFilters && (
                  <PriceRangeFilter
                    selectedPriceRange={selectedPriceRange}
                    setSelectedPriceRange={setSelectedPriceRange}
                    destinationData={destinationData}
                    accordionId="filterAccordionModal"
                  />
                )}
                {/* {showAllFilters && (
                  <DateFilter
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    accordionId="filterAccordionModal"
                  />
                )} */}
                <SortingFilter
                  sortOption={sortOption}
                  setSortOption={setSortOption}
                  accordionId="filterAccordionModal"
                />
                <OtherFilter
                  selectedOthers={selectedOthers}
                  setSelectedOthers={setSelectedOthers}
                  accordionId="filterAccordionModal"
                />
              </div>
              <div className="border-top pt-4">
                <div className="row g-3">
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-primary btn-uppercase w-100"
                      onClick={handleApply}
                      aria-label="Apply Filters"
                    >
                      <i className="hicon hicon-bold hicon-check-circle-o"></i>
                      <span>Apply</span>
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-secondary btn-uppercase w-100"
                      onClick={handleClear}
                      aria-label="Clear filters"
                    >
                      <i className="hicon hicon-bold hicon-close-popup"></i>
                      <span>Clear</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default FilterModal;
