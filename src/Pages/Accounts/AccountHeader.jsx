import React from "react";
import { Link } from "react-router-dom";
import Baseurl from "../../Baseurl";

export const AccountHeader = ({ currentSection, bookingId }) => {
  const Weburl = Baseurl.WebUrl;
  const getTitle = () => {
    switch (currentSection) {
      case "dashboard":
        return "Dashboard";
      case "wishlist":
        return "Wishlist";
      case "profile":
        return "Profile";
      case "settings":
        return "Settings";
      case "bookings":
        return "Bookings";
      case "review":
        return "Reviews";
      case "logout":
        return "Logout";
      case "booking-details":
        return `Booking Details${bookingId ? ` (#${bookingId})` : ""}`;
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="d-lg-flex align-items-lg-end pb-4">
      <div className="block-title me-auto">
        <small className="sub-title">My Account</small>
        <h1 className="display-5 title">{getTitle()}</h1>
      </div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mt-3">
          <li className="breadcrumb-item">
            <Link to={`${Weburl}`}>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            My Account
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {getTitle()}
          </li>
        </ol>
      </nav>
    </div>
  );
};
