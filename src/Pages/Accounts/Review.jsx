import React from "react";
import { RatingList } from "../../Components/Ratings/RatingList";
import { CustomerRatingList } from "../../Components/Testimonials/CustomerRatingList";

export const Review = () => {
  return (
    <div className="pe-lg-4 me-lg-2">
      <ul
        className="nav tab-menu tour-nav shadow-sm mb-4"
        id="tour-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pending-tab"
            data-bs-toggle="pill"
            data-bs-target="#pending"
            type="button"
            role="tab"
            aria-controls="pending"
            aria-selected="true"
            aria-label="Pending reviews"
          >
            Pending Reviews
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="my-review-tab"
            data-bs-toggle="pill"
            data-bs-target="#my-review"
            type="button"
            role="tab"
            aria-controls="my-review"
            aria-selected="false"
            aria-label="My reviews"
          >
            My Reviews
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pending"
          role="tabpanel"
          aria-labelledby="pending-tab"
          tabIndex="0"
        >
          <RatingList />
        </div>
        <div
          className="tab-pane fade"
          id="my-review"
          role="tabpanel"
          aria-labelledby="my-review-tab"
          tabIndex="0"
        >
          <CustomerRatingList />
        </div>
      </div>
    </div>
  );
};
