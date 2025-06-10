import React, { useState, useEffect } from "react";
import { TourList } from "../../Components/TourList/TourList";
import { FilterSection } from "../Destinations/FilterSection";
import { DestinationCategory } from "../Destinations/DestinationCategory";
import tourData from "../../JsonData/tourData";
import FilterModal from "../../Components/Modal/FilterModal";

export const ProductsList = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedOthers, setSelectedOthers] = useState([]);
  const [sortOption, setSortOption] = useState(1);
  const [selectedAdventureIds, setSelectedAdventureIds] = useState([]);
  const [displayCount, setDisplayCount] = useState(9);
  const [selectedPriceRange, setSelectedPriceRange] = useState({
    min:
      tourData.length > 0
        ? Math.min(...tourData.map((tour) => tour.salePrice))
        : 0,
    max:
      tourData.length > 0
        ? Math.max(...tourData.map((tour) => tour.salePrice))
        : 0,
  });
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleAdventure = (id) => {
    setSelectedAdventureIds((prev) =>
      prev.includes(id) ? prev.filter((aid) => aid !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    setDisplayCount(9);
  }, [
    selectedCategories,
    selectedOthers,
    sortOption,
    selectedAdventureIds,
    selectedPriceRange,
    selectedDate,
  ]);

  const allTours = tourData;

  const filteredTours = allTours.filter((tour) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(tour.prodCategory.catId);
    const othersMatch =
      selectedOthers.length === 0 ||
      selectedOthers.some((oid) => tour.others.some((o) => o.otherId === oid));
    const adventureMatch =
      selectedAdventureIds.length === 0 ||
      selectedAdventureIds.some((aid) =>
        tour.adventure.adventureId.includes(aid)
      );
    const priceMatch =
      tour.salePrice >= selectedPriceRange.min &&
      tour.salePrice <= selectedPriceRange.max;
    const dateMatch =
      !selectedDate ||
      tour.availDate.includes(
        selectedDate
          .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .split("/")
          .join("-")
      );
    return (
      categoryMatch && othersMatch && adventureMatch && priceMatch && dateMatch
    );
  });

  const sortedTours = [...filteredTours].sort((a, b) => {
    if (sortOption === 2) return a.salePrice - b.salePrice;
    if (sortOption === 3) return b.salePrice - a.salePrice;
    return a.sortBy - b.sortBy;
  });

  const displayedTours = sortedTours.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 9);
  };

  return (
    <section className="p-top-60 p-bottom-60 bg-gray-gradient">
      <div className="container">
        <div className="d-flex align-items-center pb-4" data-aos="fade">
          <div className="block-title me-auto">
            <small className="sub-title">Explore All Tours</small>
            <h2 className="h1 title">All Adventures</h2>
          </div>
          <div className="tour-like z-2 d-block d-lg-none">
            <button
              type="button"
              className="circle-icon like-icon liked"
              onClick={() => setShowFilterModal(true)}
              aria-label="Show"
            >
              <i className="hicon hicon-filter-icon"></i>
            </button>
          </div>
        </div>
        <div className="row mb-4 d-none d-lg-block">
          <DestinationCategory
            selectedAdventureIds={selectedAdventureIds}
            toggleAdventure={toggleAdventure}
          />
        </div>
        <div className="row">
          <div className="col-12 col-lg-9">
            <div className="tour-grid mb-5 mb-xl-0">
              {allTours.length === 0 ? (
                <div
                  className="alert alert-warning text-center w-100"
                  data-aos="fade"
                >
                  <strong>No tours available</strong>
                  <br />
                  We're currently not offering any tours.
                </div>
              ) : filteredTours.length === 0 ? (
                <div
                  className="alert alert-warning text-center w-100"
                  data-aos="fade"
                >
                  <strong>No tours found</strong>
                  <br />
                  Try changing your filters or check back later.
                </div>
              ) : (
                <div className="row gy-4">
                  {displayedTours.map((data) => (
                    <div
                      className="col-12 col-xxl-4 col-xl-4 col-md-6"
                      data-aos="fade"
                      key={data.id}
                    >
                      <TourList tourListData={data} />
                    </div>
                  ))}
                </div>
              )}
              {filteredTours.length > displayCount && (
                <div className="text-center pt-3">
                  <hr />
                  <button
                    className="theme btn btn-primary"
                    onClick={handleLoadMore}
                    aria-label="Load more"
                  >
                    <i className="hicon hicon-refresh pe-2"></i> Load More
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-3 d-none d-lg-block">
            <FilterSection
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedOthers={selectedOthers}
              setSelectedOthers={setSelectedOthers}
              sortOption={sortOption}
              setSortOption={setSortOption}
              selectedAdventureIds={selectedAdventureIds}
              setSelectedAdventureIds={setSelectedAdventureIds}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              destinationData={{}}
              showAllFilters={true}
            />
          </div>
        </div>
      </div>
      <FilterModal
        showFilterModal={showFilterModal}
        closeFilterModal={() => setShowFilterModal(false)}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedOthers={selectedOthers}
        setSelectedOthers={setSelectedOthers}
        sortOption={sortOption}
        setSortOption={setSortOption}
        selectedAdventureIds={selectedAdventureIds}
        setSelectedAdventureIds={setSelectedAdventureIds}
        selectedPriceRange={selectedPriceRange}
        setSelectedPriceRange={setSelectedPriceRange}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        destinationData={{}}
        showAllFilters={true}
      />
    </section>
  );
};
