import React from "react";
import { Link } from "react-router-dom";
import Baseurl from "../../Baseurl";
import { WishlistButton } from "../Buttons/WishlistButton";

export const TourList = ({tourListData}) => {
  const Weburl = Baseurl.WebUrl;

  const getRateClass = (rating) => {
    if (tourListData.rating === 5) return "rate-50";
    if (tourListData.rating >= 4.1 && tourListData.rating <= 4.9)
      return "rate-45";
    if (tourListData.rating === 4) return "rate-40";
    if (tourListData.rating >= 3.1 && tourListData.rating <= 3.9)
      return "rate-35";
    if (tourListData.rating === 3) return "rate-30";
    if (tourListData.rating >= 2.1 && tourListData.rating <= 2.9)
      return "rate-25";
    if (tourListData.rating === 2) return "rate-20";
    if (tourListData.rating >= 1.1 && tourListData.rating <= 1.9)
      return "rate-15";
    if (tourListData.rating === 1) return "rate-10";
    return "";
  };

  return (
    <div className="tour-item rounded shadow-sm hover-effect position-relative">
      <Link to={`${Weburl}/activities/${tourListData.slug}`}>
        {tourListData.offer > 0 && (
          <div className="corner-ribbon">
            <span className="cr-inner">
              <span className="cr-text">
                Save <strong>{tourListData.offer}% off</strong>
              </span>
            </span>
          </div>
        )}
        <div className="tour-img">
          <figure className="image-hover image-hover-overlay">
            <img
              src={tourListData.image}
              alt={tourListData.title}
              className="img-fluid"
              decoding="async"
              fetchPriority="high"
            />
            <i className="hicon hicon-plus-thin image-hover-icon"></i>
          </figure>
          <WishlistButton prodId={tourListData.id} />
        </div>
        <div className="tour-content">
          <h3 className="tour-title">
            <span className="link-dark link-hover">{tourListData.title}</span>
          </h3>
          <div className="tour-itinerary">
            <span>
              <i className="hicon hicon-stack-of-square-papers pe-2"></i>
              {tourListData.prodTags[0]}
            </span>
          </div>
          <div className="inline-review">
            <span className="review-score">{tourListData.rating}</span>
            <span className={`star-rate-view star-rate-size-sm me-2`}>
              <span
                className={`star-value ${getRateClass(tourListData.rating)}`}
              ></span>
            </span>
            <small className="review-total">
              <span>({tourListData.ratCount} reviews)</span>
            </small>
          </div>
          <div className="tour-booking">
            <div className="tour-price">
              <strong>
                <sup>$</sup>
                {tourListData.salePrice}.00
              </strong>
              <span>
                <sup>$</sup>
                <del>{tourListData.marPrice}.00</del>
              </span>
            </div>
            <p className="circle-icon circle-icon-link">
              <i className="hicon hicon-flights-one-ways"></i>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
