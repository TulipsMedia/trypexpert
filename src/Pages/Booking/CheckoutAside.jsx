import React from "react";
import { useNavigate } from "react-router-dom";
import { Tags } from "../../Components/IconBox/Tags";
import Baseurl from "../../Baseurl";

export const CheckoutAside = ({
  selectedDate,
  ticketType,
  adults,
  children,
  timeslot,
  total,
}) => {
  const Weburl = Baseurl.WebUrl;
  const navigate = useNavigate();

  // Map ticket types to their titles
  const ticketTitles = {
    "2_park_ticket": "2 Park Ticket",
    single_park_pass: "Single Park Pass",
    vip_experience: "VIP Experience",
    family_package: "Family Package",
  };

  // Define ticket prices (same as in TicketAside for consistency)
  const ticketPrices = {
    "2_park_ticket": { adult: 475, child: 375 },
    single_park_pass: { adult: 250, child: 200 },
    vip_experience: { adult: 250, child: 200 },
    family_package: { adult: 900, child: 0 },
  };

  // Format the date correctly, handling YYYY-MM-DD strings
  const formatDate = (date) => {
    if (!date) return "Date not selected";

    // If date is a string in YYYY-MM-DD format, parse it manually to avoid timezone issues
    if (typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
      const [year, month, day] = date.split("-").map(Number);
      // Create a new Date object with local timezone, using the parsed year, month (0-based), day
      const parsedDate = new Date(year, month - 1, day);
      return parsedDate.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }

    // Fallback for Date objects
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get the ticket price details
  const { adult: adultPrice, child: childPrice } = ticketPrices[ticketType] || {
    adult: 0,
    child: 0,
  };

  const handleEdit = () => {
    navigate(`${Weburl}/activities/booking-info`, {
      state: {
        selectedDate,
        ticketType,
        adults,
        children,
        timeslot,
      },
    });
  };

  return (
    <div className="card border-0 shadow-sm mb-4" data-aos="fade">
      <div className="card-body">
        <div className="border-bottom pb-2 mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="h5 mb-2">Ferrari World, Abu Dhabi</h3>
            <button
              className="btn btn-link p-0"
              onClick={handleEdit}
              aria-label="Edit booking"
            >
              <i className="text-black hicon-bold hicon hicon-edit"></i>
            </button>
          </div>
          <div className="mb-2">
            <small className="me-2">
              {ticketTitles[ticketType] || "Ticket"}
            </small>
          </div>
          <Tags />
        </div>
        <div className="border-bottom pb-4 mb-4">
          {(ticketType === "2_park_ticket" ||
            ticketType === "vip_experience") && (
            <div className="d-flex justify-content-between">
              <span className="mb-2">Tour date</span>
              <span>
                <strong>{formatDate(selectedDate)}</strong>
              </span>
            </div>
          )}
          {ticketType === "vip_experience" && timeslot && (
            <div className="d-flex justify-content-between">
              <span className="mb-2">Timeslot</span>
              <span>
                <strong>{timeslot}</strong>
              </span>
            </div>
          )}
          {ticketType !== "family_package" && adults > 0 && (
            <div className="d-flex justify-content-between">
              <span className="mb-2">Adult (13+)</span>
              <span>
                {adults} x AED {adultPrice.toFixed(2)}
              </span>
            </div>
          )}
          {ticketType !== "family_package" && children > 0 && (
            <div className="d-flex justify-content-between">
              <span className="mb-2">Child (3-12 Years)</span>
              <span>
                {children} x AED {childPrice.toFixed(2)}
              </span>
            </div>
          )}
          {ticketType === "family_package" && (
            <div className="d-flex justify-content-between">
              <span className="mb-2">Family Package</span>
              <span>1 x AED {adultPrice.toFixed(2)}</span>
            </div>
          )}
        </div>
        <div className="mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <strong className="fs-5">
              Total <sub className="fw-normal">Inclusive of taxes</sub>
            </strong>
            <span className="h4 text-body-emphasis">
              AED {total?.toFixed(2) || "0.00"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
