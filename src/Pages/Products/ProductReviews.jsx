import React, { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import userImg from "../../Images/destination/a3.webp";
import { ProductReviewModal } from "./ProductReviewModal";

export const ProductReviews = () => {
  const [showModal, setShowModal] = useState(false);
  const splideRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "John Doe",
      type: "Solo",
      avatar: userImg,
      rating: "4",
      comment:
        "The 5-day tour of Noriva was fantastic! Stunning landscapes, well-organized activities, and friendly guides made the trip unforgettable. Highly recommend!",
      date: "February 9, 2023",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      type: "Family",
      avatar: userImg,
      rating: "4",
      comment:
        "Amazing experience with my family! The guides were knowledgeable and the accommodations were excellent. Kids loved every moment of the trip.",
      date: "January 15, 2023",
    },
    {
      id: 3,
      name: "Mike Wilson",
      type: "Couple",
      avatar: userImg,
      rating: "5",
      comment:
        "Great value for money. The itinerary was well-planned and we got to see all the major attractions. Would definitely book again!",
      date: "December 20, 2022",
    },
    {
      id: 4,
      name: "Emma Davis",
      type: "Group",
      avatar: userImg,
      rating: "4",
      comment:
        "Exceptional service and breathtaking views! Our group had an incredible time. The local cuisine was also a highlight.",
      date: "November 8, 2022",
    },
    {
      id: 5,
      name: "David Brown",
      type: "Solo",
      avatar: userImg,
      rating: "3",
      comment:
        "Solo travel made easy! Felt safe throughout the journey and made new friends. The adventure activities were thrilling.",
      date: "October 12, 2022",
    },
  ];

  const handleViewAll = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePrev = () => splideRef.current?.splide?.go("<");
  const handleNext = () => splideRef.current?.splide?.go(">");

  const ReviewItem = ({ review }) => (
    <div className="review-item mb-4">
      <div className="review-client d-flex align-items-center mb-2">
        <figure className="review-avatar me-3 mb-0">
          <img
            src={review.avatar}
            alt={review.name}
            className="rounded-circle"
            width="48"
            height="48"
            loading="lazy"
          />
        </figure>
        <div className="review-name">
          <strong>
            {review.name} <small>({review.type})</small>
          </strong>
          <div className="star-rate-view star-rate-size-sm">
            <span
              className={`star-value rate-${parseInt(review.rating) * 10}`}
            ></span>
          </div>
        </div>
      </div>
      <p>"{review.comment}"</p>
      <div className="review-date">
        <small>{review.date}</small>
      </div>
    </div>
  );

  // Calculate rating distribution (Star Ratings)
  const calculateRatingDistribution = () => {
    const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

    reviews.forEach((review) => {
      const ratingValue = parseInt(review.rating);
      if (ratingCounts[ratingValue] !== undefined) {
        ratingCounts[ratingValue]++;
      }
    });

    const totalReviews = reviews.length;
    return [5, 4, 3, 2, 1].map((stars) => ({
      stars,
      count: ratingCounts[stars],
      percentage:
        totalReviews > 0 ? (ratingCounts[stars] / totalReviews) * 100 : 0,
    }));
  };

  // Calculate overall rating
  const calculateOverallRating = () => {
    if (reviews.length === 0) return { average: 0, total: 0 };

    const total = reviews.reduce((sum, review) => {
      return sum + parseInt(review.rating);
    }, 0);

    return {
      average: (total / reviews.length).toFixed(1),
      total: reviews.length,
    };
  };

  const ratingDistribution = calculateRatingDistribution();
  const overallRating = calculateOverallRating();

  const splideOptions = {
    perPage: 2,
    pagination: false,
    gap: "1.5rem",
    speed: 1000,
    focus: 0,
    type: "loop",
    arrows: false,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    breakpoints: {
      1400: { perPage: 2 },
      1200: { perPage: 2 },
      992: { perPage: 2 },
      576: { perPage: 1, gap: "0.75rem" },
    },
  };

  return (
    <>
      <div className="card border-0 shadow-sm p-xl-2" data-aos="fade">
        <div className="card-body">
          <div className="border-bottom mb-4 pb-4">
            <h4 className="text-body-emphasis mb-0">Ratings & Reviews</h4>
          </div>
          <div className="accordion accordion-flush" id="reviewsAccordion">
            {/* Customer Ratings Accordion */}
            <div className="accordion-item theme">
              <h2 className="accordion-header" id="headingRatings">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseRatings"
                  aria-expanded="true"
                  aria-controls="collapseRatings"
                  aria-label="Customer rating"
                >
                  Customer Ratings
                </button>
              </h2>
              <div
                id="collapseRatings"
                className="accordion-collapse collapse show"
                aria-labelledby="headingRatings"
                data-bs-parent="#reviewsAccordion"
              >
                <div className="accordion-body">
                  <div className="row gy-3">
                    <div className="col-12 col-md-5 align-items-center">
                      <div
                        className="horizontal-review rounded border h-100 aos-init aos-animate"
                        data-aos="fade"
                      >
                        <div className="review-content h-100">
                          <h3 className="review-score mb-2">
                            {overallRating.average}
                          </h3>
                          <div className="review-total">
                            <span className="star-rate-view">
                              <span
                                className={`star-value rate-${Math.round(
                                  overallRating.average * 10
                                )}`}
                              ></span>
                            </span>
                            <div className="mt-2">
                              <strong className="text-body">
                                {overallRating.total}
                              </strong>{" "}
                              reviews
                            </div>
                          </div>
                          <div className="review-label">
                            <small>
                              {overallRating.average >= 4.5
                                ? "Excellent"
                                : overallRating.average >= 4.0
                                ? "Very Good"
                                : overallRating.average >= 3.5
                                ? "Good"
                                : overallRating.average >= 3.0
                                ? "Average"
                                : "Below Average"}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-7">
                      <div className="rating-distribution rounded border p-3">
                        <h6 className="mb-3">Rating Distribution</h6>
                        {ratingDistribution.map((rating) => (
                          <div
                            key={rating.stars}
                            className="d-flex align-items-center mb-2"
                          >
                            <div
                              className="rating-stars me-2"
                              style={{ minWidth: "80px" }}
                            >
                              <span className="star-rate-view star-rate-size-sm me-1">
                                <span
                                  className={`star-value rate-${
                                    rating.stars * 10
                                  }`}
                                ></span>
                              </span>
                              <small>{rating.stars}/5</small>
                            </div>
                            <div className="flex-grow-1 me-2">
                              <div
                                className="progress"
                                style={{ height: "8px" }}
                              >
                                <div
                                  className={`progress-bar ${
                                    rating.stars >= 4
                                      ? "bg-success"
                                      : rating.stars >= 3
                                      ? "bg-warning"
                                      : "bg-danger"
                                  }`}
                                  role="progressbar"
                                  style={{ width: `${rating.percentage}%` }}
                                  aria-valuenow={rating.percentage}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="rating-count"
                              style={{ minWidth: "40px", textAlign: "right" }}
                            >
                              <small>{rating.count}</small>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Customer Reviews Accordion */}
            <div className="accordion-item theme">
              <h2 className="accordion-header" id="headingReviews">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseReviews"
                  aria-expanded="false"
                  aria-controls="collapseReviews"
                  aria-label="Customer reviews"
                >
                  Customer Reviews
                </button>
              </h2>
              <div
                id="collapseReviews"
                className="accordion-collapse collapse"
                aria-labelledby="headingReviews"
                data-bs-parent="#reviewsAccordion"
              >
                <div className="accordion-body">
                  <div className="border-bottom d-flex align-items-center pb-4 mb-4">
                    <p className="mb-0">
                      <i className="hicon hicon-verified-checkmark fs-5"></i>{" "}
                      Reviews by customers who tried Rathin's activities
                    </p>
                  </div>
                  <div className="review-list">
                    <Splide
                      options={splideOptions}
                      ref={splideRef}
                      className="testimonials-slider-1"
                    >
                      {reviews.map((review) => (
                        <SplideSlide key={review.id}>
                          <ReviewItem review={review} />
                        </SplideSlide>
                      ))}
                    </Splide>
                    {reviews.length > 4 && (
                      <p className="fw-normal text-secondary text-md-end mb-0">
                        <button
                          className="btn btn-link p-0 text-decoration-none fw-medium"
                          onClick={handleViewAll}
                          aria-label="View all"
                        >
                          <span>View All</span>
                          <i className="hicon hicon-flights-one-ways ps-1"></i>
                        </button>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for viewing all reviews */}
      <ProductReviewModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        reviews={reviews}
        ReviewItem={ReviewItem}
      />
    </>
  );
};
