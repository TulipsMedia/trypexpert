import React, { useState, useEffect } from "react";
import { Range } from "react-range";
import tourData from "../../JsonData/tourData";
import "./PriceRangeFilter.css";

export const PriceRangeFilter = ({
  selectedPriceRange,
  setSelectedPriceRange,
  destinationData,
  accordionId = "filterAccordion",
}) => {
  const tours = destinationData?.city
    ? tourData.filter((tour) => tour.city === destinationData.city)
    : tourData;
  let minPrice =
    tours.length > 0 ? Math.min(...tours.map((tour) => tour.salePrice)) : 0;
  let maxPrice =
    tours.length > 0 ? Math.max(...tours.map((tour) => tour.salePrice)) : 0;

  if (minPrice === maxPrice && tours.length > 0) {
    maxPrice = minPrice + 1;
  }

  const [values, setValues] = useState([
    selectedPriceRange.min || minPrice,
    selectedPriceRange.max || maxPrice,
  ]);

  useEffect(() => {
    setValues([
      selectedPriceRange.min || minPrice,
      selectedPriceRange.max || maxPrice,
    ]);
  }, [selectedPriceRange, minPrice, maxPrice]);

  const handleChange = (newValues) => {
    setValues(newValues);
    setSelectedPriceRange({ min: newValues[0], max: newValues[1] });
  };

  return (
    <div className="accordion-item">
      <h3 className="accordion-header" id={`priceFilter-${accordionId}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#priceCollapse-${accordionId}`}
          aria-expanded="false"
          aria-controls={`priceCollapse-${accordionId}`}
          aria-label="Price range filter"
        >
          Price Range
        </button>
      </h3>
      <div
        id={`priceCollapse-${accordionId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`priceFilter-${accordionId}`}
        data-bs-parent={`#${accordionId}`}
      >
        <div className="accordion-body">
          <div className="row g-2">
            <div className="col-12">
              {tours.length === 0 ? (
                <div className="text-muted">No tours available</div>
              ) : minPrice === maxPrice - 1 ? (
                <div className="text-muted">
                  All tours are priced at ${minPrice}
                </div>
              ) : (
                <>
                  <label className="form-label">
                    Price Range: ${values[0]} - ${values[1]}
                  </label>
                  <div className="price-range-slider">
                    <Range
                      step={1}
                      min={minPrice}
                      max={maxPrice}
                      values={values}
                      onChange={handleChange}
                      renderTrack={({ props, children }) => {
                        const { key, ...trackProps } = props;
                        return (
                          <div
                            key={key}
                            {...trackProps}
                            className="range-track"
                            style={{
                              ...trackProps.style,
                              height: "6px",
                              width: "100%",
                              background: `linear-gradient(
                                to right,
                                #dadada ${
                                  ((values[0] - minPrice) /
                                    (maxPrice - minPrice)) *
                                  100
                                }%,
                                #000 ${
                                  ((values[0] - minPrice) /
                                    (maxPrice - minPrice)) *
                                  100
                                }%,
                                #000 ${
                                  ((values[1] - minPrice) /
                                    (maxPrice - minPrice)) *
                                  100
                                }%,
                                #dadada ${
                                  ((values[1] - minPrice) /
                                    (maxPrice - minPrice)) *
                                  100
                                }%
                              )`,
                            }}
                          >
                            {children}
                          </div>
                        );
                      }}
                      renderThumb={({ props, index }) => {
                        const { key, ...thumbProps } = props;
                        return (
                          <div
                            key={key}
                            {...thumbProps}
                            className="range-thumb"
                            style={{
                              ...thumbProps.style,
                              height: "16px",
                              width: "16px",
                              backgroundColor: "#17a2b8",
                              borderRadius: "50%",
                              outline: "none",
                            }}
                            aria-label={
                              index === 0 ? "Minimum price" : "Maximum price"
                            }
                            aria-valuenow={values[index]}
                            aria-valuemin={minPrice}
                            aria-valuemax={maxPrice}
                          />
                        );
                      }}
                    />
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <small>${minPrice}</small>
                    <small>${maxPrice}</small>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
