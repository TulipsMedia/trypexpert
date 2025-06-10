import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Baseurl from "../../Baseurl";
import destinationData from "../../JsonData/destinationData";

const LocationModal = ({ showModal, closeModal }) => {
  const Weburl = Baseurl.WebUrl;
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCities(destinationData);
    } else {
      const results = destinationData.filter((item) =>
        `${item.city} ${item.country}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setFilteredCities(results);
    }
  }, [searchTerm]);

  const handleClick = (slug) => {
    navigate(`${Weburl}/destinations/${slug}`);
    closeModal();
  };
  

  if (!showModal) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        transition: "0.3s ease",
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Choose your city</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
              aria-label="Close modal"
            ></button>
          </div>
          <div className="modal-body">
            <div className="location_search_input">
              <form className="form-inline position-relative">
                <input
                  className="form-control rounded-5"
                  type="search"
                  placeholder="Search by city or country"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="button" aria-label="Search location">
                  <i className="hicon hicon-search-icon fs-5"></i>
                </button>
              </form>
            </div>

            <div className="location_select_result mt-3 ms-3">
              <h6 className="mb-1">
                {searchTerm ? "Search Results" : "Search by cities"}
              </h6>
              <ul className="ps-0">
                {filteredCities.length > 0 ? (
                  filteredCities.map((item, index) => (
                    <li key={index}>
                      <Link
                        type="button"
                        className="btn btn-link text-start p-0"
                        onClick={() => handleClick(item.slug)}
                      >
                        <i className="hicon hicon-flights-pin me-1 fs-5"></i>
                        {item.city},{" "}
                        <span className="text-muted small">{item.country}</span>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-muted">No results found</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
