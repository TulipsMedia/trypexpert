import React from "react";

export const ProductReviewModal = ({
  showModal,
  handleCloseModal,
  reviews,
  ReviewItem,
}) => {
  if (!showModal) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">All Customer Reviews</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
              aria-label="Close modal"
            ></button>
          </div>
          <div className="modal-body">
            <div className="review-list">
              {reviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
