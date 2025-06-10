import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Baseurl from "../../Baseurl";
import tourData from "../../JsonData/tourData";

const MobileSearchModal = ({ showSearchModal, closeSearchModal }) => {
  const Weburl = Baseurl.WebUrl;
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredResults = searchTerm.trim()
    ? tourData.filter(
        (dest) =>
          (dest.title &&
            dest.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (dest.city &&
            dest.city.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (dest.country &&
            dest.country.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : tourData;

  const handleResultClick = (slug) => {
    navigate(`${Weburl}/activities/${slug}`);
    closeSearchModal();
  };

  return (
    <>
      {showSearchModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            transition: "0.9s ease",
          }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Choose your activities</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeSearchModal}
                  aria-label="Close modal"
                ></button>
              </div>
              <div className="modal-body">
                <div className="location_search_input">
                  <form
                    className="form-inline position-relative"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      className="form-control rounded-5"
                      type="search"
                      placeholder="Search for destinations or activities"
                      aria-label="Search"
                      id="search_adventure_location"
                      name="search_adventure_location"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="button" aria-label="Search location">
                      <i className="hicon hicon-search-icon fs-5"></i>
                    </button>
                  </form>
                </div>

                <div className="search_result" style={{ maxHeight: "100vh" }}>
                  <ul className="mt-3 px-0" style={{ listStyle: "none" }}>
                    {filteredResults.length > 0 ? (
                      filteredResults.map((item) => (
                        <li
                          key={item.id}
                          className="d-flex align-items-center justify-content-between p-2"
                          onClick={() => handleResultClick(item.slug)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="d-flex align-items-center">
                            <div className="result_list_img">
                              <img
                                src={item.image}
                                className="img-fluid rounded"
                                alt={item.title}
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div className="result_list_desc ms-3">
                              <p className="mb-0" title={item.title}>
                                {item.title}
                              </p>
                              <p className="text-muted mb-0 small">
                                <i className="hicon hicon-flights-pin me-1"></i>
                                {item.city},{item.country}
                              </p>
                            </div>
                          </div>
                          <i className="hicon hicon-edge-arrow-right"></i>
                        </li>
                      ))
                    ) : (
                      <li className="text-center py-4 text-muted">
                        No result found
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSearchModal;
