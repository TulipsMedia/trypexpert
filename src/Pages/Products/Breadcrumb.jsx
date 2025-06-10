import React, { useState } from "react";
import { Link } from "react-router-dom";
import Baseurl from "../../Baseurl";
import { Tags } from "../../Components/IconBox/Tags";
import { ProductReviewModal } from "./ProductReviewModal";
import userImg from "../../Images/destination/a3.webp";

export const Breadcrumb = ({
  title = "Ferrari World, Abu Dhabi",
  rating = 4.4,
  totalReviews = 5,
  reviews = [],
}) => {
  const [showModal, setShowModal] = useState(false);
  const Weburl = Baseurl.WebUrl;

  // Default reviews data if not provided
  const defaultReviews = [
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

  const reviewsData = reviews.length > 0 ? reviews : defaultReviews;

  const handleReviewClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-end pb-4">
              {/* Navigation first on mobile */}
              <nav
                aria-label="breadcrumb"
                className="order-1 order-lg-2 mb-lg-0"
              >
                <ol className="breadcrumb mt-0 mt-lg-3">
                  <li className="breadcrumb-item">
                    <Link to={`${Weburl}`}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={`${Weburl}/activities`}>Activities</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {title}
                  </li>
                </ol>
              </nav>

              {/* Title section second on mobile, first on desktop */}
              <div className="block-title me-auto order-2 order-lg-1">
                <h2 className="title mb-2">{title}</h2>
                <span className="d-inline-block mb-2">
                  <big className="sub-title">
                    <i
                      className="hicon hicon-star-1"
                      style={{ color: "#eeb461" }}
                    ></i>
                    {rating}
                  </big>
                  (
                  <button
                    className="btn btn-link p-0 text-decoration-underline"
                    style={{
                      fontSize: "inherit",
                      lineHeight: "inherit",
                      verticalAlign: "baseline",
                      border: "none",
                      background: "none",
                      color: "inherit",
                    }}
                    onClick={handleReviewClick}
                    aria-label="View all"
                  >
                    {totalReviews} Review{totalReviews !== 1 ? "s" : ""}
                  </button>
                  )
                </span>
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for viewing all reviews */}
      <ProductReviewModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        reviews={reviewsData}
        ReviewItem={ReviewItem}
      />
    </>
  );
};
