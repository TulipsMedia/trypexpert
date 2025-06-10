import React, { useState, useEffect } from "react";
import { TourList } from "../../Components/TourList/TourList";
import { FilterSection } from "./FilterSection";
import { DestinationCategory } from "./DestinationCategory";
import tourData from "../../JsonData/tourData";
import FilterModal from "../../Components/Modal/FilterModal";

export const DestinationProducts = ({ destinationData }) => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedOthers, setSelectedOthers] = useState([]);
  const [sortOption, setSortOption] = useState(1);
  const [selectedAdventureIds, setSelectedAdventureIds] = useState([]);
  const [displayCount, setDisplayCount] = useState(9);

  const cityTours = tourData.filter(
    (tour) => tour.city === destinationData.city
  );

  const toggleAdventure = (id) => {
    setSelectedAdventureIds((prev) =>
      prev.includes(id) ? prev.filter((aid) => aid !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    setDisplayCount(9);
  }, [selectedOthers, sortOption, selectedAdventureIds]);

  const filteredTours = cityTours.filter((tour) => {
    const othersMatch =
      selectedOthers.length === 0 ||
      selectedOthers.some((oid) => tour.others.some((o) => o.otherId === oid));

    const adventureMatch =
      selectedAdventureIds.length === 0 ||
      selectedAdventureIds.some((aid) =>
        tour.adventure.adventureId.includes(aid)
      );

    return othersMatch && adventureMatch;
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
            <small className="sub-title">Explore {destinationData.city}</small>
            <h2 className="h1 title">Adventures in {destinationData.city}</h2>
          </div>
          <div className="tour-like z-2 d-block d-lg-none">
            <button
              type="button"
              className="circle-icon like-icon liked"
              onClick={() => setShowFilterModal(true)}
              aria-label="Show filters"
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
              {cityTours.length === 0 ? (
                <div
                  className="alert alert-warning text-center w-100"
                  data-aos="fade"
                >
                  <strong>No tours available in {destinationData.city}</strong>
                  <br />
                  We're currently not offering tours for this destination.
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
              selectedOthers={selectedOthers}
              setSelectedOthers={selectedOthers}
              sortOption={sortOption}
              setSortOption={setSortOption}
              selectedAdventureIds={selectedAdventureIds}
              setSelectedAdventureIds={setSelectedAdventureIds}
              destinationData={destinationData}
              showAllFilters={false} // Hide Category, Price, Date filters
            />
          </div>
        </div>
      </div>

      <FilterModal
        showFilterModal={showFilterModal}
        closeFilterModal={() => setShowFilterModal(false)}
        selectedOthers={selectedOthers}
        setSelectedOthers={setSelectedOthers}
        sortOption={sortOption}
        setSortOption={setSortOption}
        selectedAdventureIds={selectedAdventureIds}
        setSelectedAdventureIds={setSelectedAdventureIds}
        destinationData={destinationData}
        showAllFilters={false} // Hide Category, Price, Date filters
      />
    </section>
  );
};
