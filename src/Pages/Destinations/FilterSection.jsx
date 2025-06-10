import React from "react";
import { CategoryFilter } from "../../Components/Filters/CategoryFilter";
import { SortingFilter } from "../../Components/Filters/SortingFilter";
import { OtherFilter } from "../../Components/Filters/OtherFilter";
import { PriceRangeFilter } from "../../Components/Filters/PriceRange";
// import { DateFilter } from "../../Components/Filters/DateFilter";
import tourData from "../../JsonData/tourData";

export const FilterSection = ({
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
  const handleClearFilters = () => {
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

  return (
    <aside className="mb-4 ps-xl-2 sticky-top sticky-top-120" data-aos="fade">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h2 className="h3 mb-4">Filter by</h2>
          <div className="accordion accordion-filter" id="filterAccordion">
            {showAllFilters && (
              <CategoryFilter
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                accordionId="filterAccordion"
              />
            )}
            {showAllFilters && (
              <PriceRangeFilter
                selectedPriceRange={selectedPriceRange}
                setSelectedPriceRange={setSelectedPriceRange}
                destinationData={destinationData}
                accordionId="filterAccordion"
              />
            )}
            {/* {showAllFilters && (
              <DateFilter
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                accordionId="filterAccordion"
              />
            )} */}
            <SortingFilter
              sortOption={sortOption}
              setSortOption={setSortOption}
              accordionId="filterAccordion"
            />
            <OtherFilter
              selectedOthers={selectedOthers}
              setSelectedOthers={setSelectedOthers}
              accordionId="filterAccordion"
            />
          </div>
          <div className="border-top pt-4">
            <div className="row">
              <div className="col-12">
                <button
                  type="reset"
                  className="theme btn btn-primary btn-uppercase w-100"
                  onClick={handleClearFilters}
                  aria-label="Clear filters"
                >
                  <i className="hicon hicon-bold hicon-close-popup pe-2"></i>
                  <span>Clear</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
