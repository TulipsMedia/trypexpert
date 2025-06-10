import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AccountHeader } from "./AccountHeader";
import { AccountAside } from "./AccountAside";
import { Dashboard } from "./Dashboard";
import { Wishlist } from "./Wishlist";
import { Profile } from "./Profile";
import { Settings } from "./Settings";
import { Booking } from "./Booking";
import { Review } from "./Review";
import { Logout } from "./Logout";
import { BookingDetails } from "./BookingDetails";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Accounts = () => {
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState("dashboard");
  const [bookingId, setBookingId] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");
    const bookingIdParam = params.get("bookingId");

    if (
      section &&
      [
        "dashboard",
        "wishlist",
        "profile",
        "settings",
        "bookings",
        "review",
        "logout",
      ].includes(section)
    ) {
      setCurrentSection(section);
      setBookingId(null);
    } else if (section === "booking-details" && bookingIdParam) {
      setCurrentSection("booking-details");
      setBookingId(bookingIdParam);
    } else {
      // Default to dashboard if no valid section
      setCurrentSection("dashboard");
      setBookingId(null);
    }
  }, [location.search]);

  const renderSection = () => {
    switch (currentSection) {
      case "dashboard":
        return <Dashboard />;
      case "wishlist":
        return <Wishlist />;
      case "profile":
        return <Profile />;
      case "settings":
        return <Settings />;
      case "bookings":
        return <Booking />;
      case "review":
        return <Review />;
      case "logout":
        return <Logout />;
      case "booking-details":
        return <BookingDetails bookingId={bookingId} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            My Profile – Manage Your Profile, Bookings, Wishlist & Reviews
            Trypexpert
          </title>
          <meta
            name="description"
            content="Access your personalized dashboard to manage bookings, update your profile, view your wishlist, and read or write reviews. All your travel and activity details in one place."
          />
        </Helmet>
      </HelmetProvider>
      <div className="p-top-60 p-bottom-60 bg-gray-gradient">
        <div className="container">
          <AccountHeader
            currentSection={currentSection}
            bookingId={bookingId}
          />
          <section>
            <div className="row g-0 g-xl-8">
              <div className="col-12 col-lg-9">{renderSection()}</div>
              <div className="col-12 col-lg-3">
                <AccountAside currentSection={currentSection} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
