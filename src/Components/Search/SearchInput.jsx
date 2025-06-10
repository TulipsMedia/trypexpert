import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Baseurl from "../../Baseurl";
import "./Search.css";
import tourData from "../../JsonData/tourData";

const SearchInput = ({ city }) => {
  const Weburl = Baseurl.WebUrl;
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleFocus = () => {
    setShowDropdown(true); // Show dropdown on focus/click
  };

  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 200); // Delay to allow click on dropdown
  };

  const handleResultClick = (slug) => {
    navigate(`${Weburl}/activities/${slug}`);
  };

  const filteredResults = tourData
    .filter((dest) => {
      // Filter by city if provided
      if (city && dest.city !== city) return false;
      return true;
    })
    .filter((dest) => {
      // Filter by search query
      if (!query.trim()) return true;
      const lowerQuery = query.toLowerCase();
      return (
        (dest.title && dest.title.toLowerCase().includes(lowerQuery)) ||
        (dest.city && dest.city.toLowerCase().includes(lowerQuery)) ||
        (dest.country && dest.country.toLowerCase().includes(lowerQuery))
      );
    });

  return (
    <div className="search_input w-100 position-relative">
      <form className="form-inline">
        <input
          className="form-control rounded-5"
          type="search"
          placeholder="Search for destinations or activities"
          aria-label="Search"
          name="search_result"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button type="button" aria-label="Search activities">
          <i className="hicon hicon-search-icon"></i>
        </button>

        {showDropdown && (
          <div
            className="search_result bg-white position-absolute w-100 mt-2 rounded-3"
            style={{ boxShadow: "0 0 .75rem #00000012", zIndex: 1 }}
          >
            <ul className="mt-3 px-3" style={{ listStyle: "none" }}>
              {filteredResults.length > 0 ? (
                filteredResults.map((result, index) => (
                  <li
                    key={index}
                    className="d-flex align-items-center justify-content-between p-2"
                    onClick={() => handleResultClick(result.slug)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="result_list_img flex-shrink-0">
                        <img
                          src={`${result.image}?w=63&h=63&crop=faces&auto=compress,format&fit=min`}
                          className="img-fluid rounded"
                          width="48"
                          height="48"
                          style={{ objectFit: "cover" }}
                          alt={result.name}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="result_list_desc ms-3">
                        <p className="mb-0" title={result.title}>
                          {result.title}
                        </p>
                        <p className="text-muted mb-0 small">
                          <i className="hicon hicon-flights-pin me-1"></i>
                          {result.city},{result.country}
                        </p>
                      </div>
                    </div>
                    <i className="hicon hicon-edge-arrow-right text-black"></i>
                  </li>
                ))
              ) : (
                <li className="p-2 text-muted text-center">No results found</li>
              )}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchInput;
