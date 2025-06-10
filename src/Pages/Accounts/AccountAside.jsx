import React from "react";
import { Link, useNavigate } from "react-router-dom";
import userPhoto from "../../Images/destination/a3.webp";
import Baseurl from "../../Baseurl";

export const AccountAside = ({ currentSection }) => {
  const Weburl = Baseurl.WebUrl;
  const navigate = useNavigate();

  const menuItems = [
    { path: "dashboard", label: "Dashboard", icon: "hicon-ycs-dashboard" },
    { path: "bookings", label: "Bookings", icon: "hicon-installment-payment" },
    { path: "wishlist", label: "Wishlist", icon: "hicon-menu-favorite" },
    { path: "profile", label: "Profile", icon: "hicon-mmb-account" },
    { path: "settings", label: "Settings", icon: "hicon-aps-lock" },
    { path: "review", label: "Reviews", icon: "hicon-ratings" },
    { path: "logout", label: "Logout", icon: "hicon-link-out" },
  ];

  const handleLinkClick = (section) => {
    navigate(`${Weburl}/my-account?section=${section}`);
  };

  return (
    <div className="card border-0 shadow-sm sticky-top sticky-top-120 d-none d-lg-block z-0">
      <div className="card-body">
        <div className="account-user border-bottom pb-4 mb-4">
          <img
            src={userPhoto}
            alt="User Name"
            className="show-avatar rounded-circle"
            loading="lazy"
          />
          <div className="username ps-3">
            <span>Hi!</span>
            <strong>John Doe</strong>
          </div>
        </div>
        <ul className="account-menu fw-medium mb-0">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={`menu-item ${
                currentSection === item.path ||
                (item.path === "bookings" &&
                  currentSection === "booking-details")
                  ? "active"
                  : ""
              }`}
            >
              <Link
                to="#"
                className="d-block"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.path);
                }}
              >
                <i className={`hicon hicon-bold ${item.icon} pe-2`}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
