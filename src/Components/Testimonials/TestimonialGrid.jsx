import React from "react";

export const TestimonialGrid = ({ testiData }) => {
  return (
    <div className="testimonial-box shadow-sm rounded mb-1 hover-effect h-100">
      <span className="testimonial-icon">
        <i className="hicon hicon-message-right"></i>
      </span>
      <div className="testimonial-client">
        <img
          src={testiData.image}
          alt={testiData.name}
          className="img-fluid"
          loading="lazy"
        />
        <div className="name">
          <h3 className="h5 mb-0">{testiData.name}</h3>
          <span>{testiData.location}</span>
        </div>
      </div>
      <div className="testimonial-content">
        <blockquote className="testimonial-review">
          {testiData.review}
        </blockquote>
        <div className="testimonial-star">
          <span className="star-rate-view star-rate-size-sm">
            <span className={`star-value ${testiData.rating}`}></span>
          </span>
          <span className="testimonial-date rounded-1">{testiData.date}</span>
        </div>
      </div>
    </div>
  );
};
