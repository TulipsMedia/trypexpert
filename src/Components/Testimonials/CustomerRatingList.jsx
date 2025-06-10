import React, { useState } from "react";
import { Link } from "react-router-dom";
import ratingImg from "../../Images/rating.svg";
import Baseurl from "../../Baseurl";

// Sample testimonial data (replace with actual API or prop if needed)
const customerRatings = [
  {
    id: 1,
    name: "John Doe",
    location: "Venice, Italy",
    review:
      "Our trip to Trypexpert LLC was amazing! Trypexpert LLC Travel Agency organized everything perfectly, from the hotels to the sightseeing spots. I was very impressed and will definitely return!",
    rating: "rate-45",
    date: "Jun 25, 2025",
  },
  {
    id: 2,
    name: "Alice Smith",
    location: "Paris, France",
    review:
      "It was a seamless experience. The attention to detail was top-notch!",
    rating: "rate-50",
    date: "Jul 01, 2025",
  },
  {
    id: 3,
    name: "Michael Brown",
    location: "New York, USA",
    review: "Loved every moment of our Dubai adventure!",
    rating: "rate-40",
    date: "Jul 04, 2025",
  },
];

export const CustomerRatingList = () => {
  const Weburl = Baseurl.WebUrl;
  const [visibleCount, setVisibleCount] = useState(1);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 1);
  };

  const visibleCustomerRatings = customerRatings.slice(0, visibleCount);

  return (
    <>
      {customerRatings.length === 0 ? (
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <div className="text-center py-5">
              <img
                src={ratingImg}
                alt="Booking Img"
                width="65px"
                className="img-fluid"
                loading="lazy"
              />
              <h5 className="pt-3">No reviews yet</h5>
              <p className="mb-3">
                Get started by booking some activities on our platform. <br />
                Once you’ve completed the activity, you can leave your feedback
                here.
              </p>
              <Link
                to={`${Weburl}/activities`}
                className="theme btn btn-primary mnw-180"
              >
                <i className="hicon hicon-search-icon pe-2"></i>
                Explore Tours
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="row">
            {visibleCustomerRatings.map((item) => (
              <div className="col-lg-6 mb-4" key={item.id}>
                <div className="testimonial-box shadow-sm rounded-3 hover-effect h-100">
                  <span className="testimonial-icon">
                    <i className="hicon hicon-message-right"></i>
                  </span>
                  <Link to="">
                    <div className="testimonial-client">
                      <img
                        src="https://rathincom.b-cdn.net//app-assets/media/products/product_image_Pearls-Kingdom-Waterpark.webp"
                        alt={item.name}
                        className="rounded"
                        loading="lazy"
                      />
                      <div className="name">
                        <h3 className="h5 mb-0">Explore ancient castles</h3>
                        <small>
                          <i className="hicon hicon-flights-pin"></i>{" "}
                          {item.location}
                        </small>
                      </div>
                    </div>
                  </Link>
                  <div className="testimonial-content">
                    <blockquote className="testimonial-review">
                      {item.review}
                    </blockquote>
                    <div className="testimonial-star">
                      <span>
                        <p className="mb-0 fw-medium">{item.name}</p>
                        <span className="star-rate-view star-rate-size-sm">
                          <span className={`star-value ${item.rating}`}></span>
                        </span>
                      </span>
                      <span className="testimonial-date rounded-1">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < customerRatings.length && (
            <div className="text-center pt-2">
              <hr />
              <button
                className="theme btn btn-primary px-4"
                onClick={handleLoadMore}
                aria-label="Load more"
              >
                <i className="hicon hicon-refresh pe-2"></i> Load More
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};
