import React, { useState } from "react";
import testImg from "../../Images/destination/a3.webp";

// Sample testimonial data (replace with actual API or prop if needed)
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    location: "Venice, Italy",
    image: testImg,
    review:
      "Our trip to Trypexpert LLC was amazing! Trypexpert LLC Travel Agency organized everything perfectly, from the hotels to the sightseeing spots. I was very impressed and will definitely return!",
    rating: "rate-45",
    date: "Jun 25 24",
  },
  // 👇 Add more testimonials (dummy or dynamic)
  {
    id: 2,
    name: "Alice Smith",
    location: "Paris, France",
    image: testImg,
    review:
      "It was a seamless experience. The attention to detail was top-notch!",
    rating: "rate-50",
    date: "Jul 01 24",
  },
  {
    id: 3,
    name: "Michael Brown",
    location: "New York, USA",
    image: testImg,
    review: "Loved every moment of our Dubai adventure!",
    rating: "rate-40",
    date: "Jul 04 24",
  },
  // ➕ Add as many as needed...
];

export const TestimonialList = () => {
  const [visibleCount, setVisibleCount] = useState(1);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 1);
  };

  const visibleTestimonials = testimonials.slice(0, visibleCount);

  return (
    <>
      <div className="row">
        {visibleTestimonials.map((item) => (
          <div className="col-lg-6 mb-4" key={item.id}>
            <div className="testimonial-box shadow-sm rounded-3 hover-effect h-100">
              <span className="testimonial-icon">
                <i className="hicon hicon-message-right"></i>
              </span>
              <div className="testimonial-client">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid"
                  loading="lazy"
                />
                <div className="name">
                  <h3 className="h5 mb-0">{item.name}</h3>
                  <span>{item.location}</span>
                </div>
              </div>
              <div className="testimonial-content">
                <blockquote className="testimonial-review">
                  {item.review}
                </blockquote>
                <div className="testimonial-star">
                  <span className="star-rate-view star-rate-size-sm">
                    <span className={`star-value ${item.rating}`}></span>
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
      {visibleCount < testimonials.length && (
        <div className="text-center pt-3">
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
  );
};
