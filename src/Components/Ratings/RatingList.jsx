import React, { useState } from "react";
import RatingModal from "../Modal/RatingModal";
import { Link } from "react-router-dom";

export const RatingList = () => {
  const [showRatingModal, setShowRatingModal] = useState(false);

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-xl-3 col-md-4">
            <Link to="#">
              <figure className="image-hover image-hover-overlay rounded">
                <img
                  src="https://rathincom.b-cdn.net//app-assets/media/products/product_image_Pearls-Kingdom-Waterpark.webp"
                  alt=""
                  className="img-fluid"
                  loading="lazy"
                />
                <i className="hicon hicon-plus-thin image-hover-icon"></i>
              </figure>
            </Link>
          </div>
          <div className="col-12 col-xl-9 col-md-8">
            <div className="d-md-flex pt-4 pt-md-0">
              <div className="pe-4 flex-grow-1">
                <h2 className="h5 mb-2">
                  <Link to="" className="link-dark link-hover">
                    Explore ancient castles
                  </Link>
                </h2>
                <div className="mb-2">
                  <small className="me-2">
                    <i className="hicon hicon-flights-pin"></i> Dubai
                  </small>
                </div>
                <div className="d-flex flex-column">
                  <small className="mb-2">
                    Completed on: <strong>Mar 05, 2023</strong>
                  </small>
                  <small className="mb-2">
                    Guests: <strong>4 Adults - 3 Children</strong>
                  </small>
                </div>
              </div>
              <div className="text-md-end">
                <div className="d-flex flex-md-column align-items-end mb-2">
                  <strong className="fs-4 fw-semibold">
                    <sup>$</sup>158.80
                  </strong>
                  <small className="text-secondary">
                    <sup>$</sup>
                    <del className="">169.00</del>
                  </small>
                </div>
                <button
                  type="button"
                  className="btn btn-link link-primary p-0"
                  style={{ textDecoration: "none" }}
                  onClick={() => setShowRatingModal(true)}
                  aria-label="Show ratings"
                >
                  <i className="hicon hicon-edit pe-2"></i>
                  <span>Rate & Review</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RatingModal
        showRatingModal={showRatingModal}
        closeRatingModal={() => setShowRatingModal(false)}
      />
    </div>
  );
};
