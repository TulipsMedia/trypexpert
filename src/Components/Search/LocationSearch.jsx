import React from "react";

const LocationSearch = () => {
  return (
    <>
      <div className="location_search_input">
        <form className="form-inline position-relative">
          <input
            className="form-control rounded-5"
            type="search"
            placeholder="Search by city"
            aria-label="Search"
            id="search_city"
            name="search_city"
          />
          <button type="button" aria-label="Search location">
            <i className="hicon hicon-search-icon fs-5"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default LocationSearch;
