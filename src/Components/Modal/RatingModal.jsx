import React, { useState } from "react";
import Rating from "react-rating-stars-component";

const RatingModal = ({ showRatingModal, closeRatingModal }) => {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ratingError, setRatingError] = useState(""); // State for rating error message

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    setRatingError(""); // Clear error when a rating is selected
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      setRatingError("Please select a rating."); // Show error if no rating is selected
      return;
    }
    closeRatingModal(); // Close modal after successful submission
  };

  if (!showRatingModal) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Rate this product</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeRatingModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">
                  Your Rating <span className="text-danger">*</span>
                </label>
                <div>
                  <Rating
                    count={5}
                    size={24}
                    value={rating}
                    onChange={handleRatingChange}
                    activeColor="#eeb461"
                    isHalf={false}
                    edit={true}
                    emptyIcon={
                      <i className="hicon hicon-ratings" style={{ color: "#eeb461" }} />
                    }
                    filledIcon={<i className="hicon hicon-star-1" />}
                  />
                </div>
                {ratingError && (
                  <div
                    className="text-danger mt-1"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {ratingError}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="reviewTitle" className="form-label">
                  Review Title <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control shadow-sm"
                  id="reviewTitle"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="reviewDescription" className="form-label">
                  Description <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control shadow-sm"
                  id="reviewDescription"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="border-top pt-4 mt-4">
                <button
                  type="submit"
                  className="theme btn btn-primary"
                  aria-label="Submit rating"
                >
                  <i className="hicon hicon-check-valid-state pe-2"></i>Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
