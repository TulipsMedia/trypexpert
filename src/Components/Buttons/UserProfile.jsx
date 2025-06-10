import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Baseurl from "../../Baseurl";

export const UserProfile = () => {
  const Weburl = Baseurl.WebUrl;
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);
  const [currentSection, setCurrentSection] = useState("dashboard");

  // Parse current section from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section") || "dashboard";
    setCurrentSection(section);
  }, [location.search]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsActive((prev) => !prev);
  };

  const handleLinkClick = (section) => {
    setIsActive(false);
    navigate(`${Weburl}/my-account?section=${section}`);
  };

  return (
    <div
      className={`dropdown user-menu ms-xl-auto ${isActive ? "active" : ""}`}
      ref={dropdownRef}
    >
      <button
        className={`btn border-0 bg-transparent d-flex align-items-center ${
          isActive ? "active" : ""
        }`}
        onClick={toggleDropdown}
        aria-label="User Profile"
      >
        <i className="hicon hicon-mmb-account fs-5"></i>
      </button>
      <ul
        className={`dropdown-menu dropdown-menu-end animate slideIn ${
          isActive ? "d-block" : "d-none"
        }`}
      >
        <li>
          <Link
            className={`dropdown-item ${
              currentSection === "dashboard" ? "active" : ""
            }`}
            to="#"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("dashboard");
            }}
          >
            <i className="hicon hicon-ycs-dashboard me-2"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            className={`dropdown-item ${
              currentSection === "profile" ? "active" : ""
            }`}
            to="#"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("profile");
            }}
          >
            <i className="hicon hicon-profiles me-2"></i>
            <span>My Profile</span>
          </Link>
        </li>
        <li>
          <Link
            className={`dropdown-item ${
              currentSection === "bookings" ||
              currentSection === "booking-details"
                ? "active"
                : ""
            }`}
            to="#"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("bookings");
            }}
          >
            <i className="hicon hicon-installment-payment me-2"></i>
            <span>Bookings</span>
          </Link>
        </li>
        <li>
          <Link
            className={`dropdown-item ${
              currentSection === "wishlist" ? "active" : ""
            }`}
            to="#"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("wishlist");
            }}
          >
            <i className="hicon hicon-menu-favorite me-2"></i>
            <span>Wishlist</span>
          </Link>
        </li>
        <li>
          <Link
            className={`dropdown-item ${
              currentSection === "settings" ? "active" : ""
            }`}
            to="#"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("settings");
            }}
          >
            <i className="hicon hicon-aps-lock me-2"></i>
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link
            className={`dropdown-item ${
              currentSection === "review" ? "active" : ""
            }`}
            to="#"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("review");
            }}
          >
            <i className="hicon hicon-ratings me-2"></i>
            <span>Reviews</span>
          </Link>
        </li>
        <li>
          <Link
            className={`dropdown-item ${
              currentSection === "logout" ? "active" : ""
            }`}
            to="#"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("logout");
            }}
          >
            <i className="hicon hicon-link-out me-2"></i>
            <span>Logout</span>
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={`${Weburl}/register`}>
            <i className="hicon hicon-edit me-2"></i>
            <span>Register</span>
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={`${Weburl}/login`}>
            <i className="hicon hicon-aps-lock me-2"></i>
            <span>Login</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
