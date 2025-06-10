import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import Splide CSS

const TicketCard = ({ onSelect, selectedType }) => {
  const tickets = [
    {
      type: "2_park_ticket",
      title: "2 Park Ticket",
      inclusions: [
        "Discounted prices for each park ticket",
        "Access to two parks in a single day",
      ],
      exclusions: ["Food and beverages not included"],
      price: 475,
      specialOffer: true,
    },
    {
      type: "single_park_pass",
      title: "Single Park Pass",
      inclusions: ["Access to one park for the entire day"],
      exclusions: [],
      price: 250,
      specialOffer: false,
    },
    {
      type: "vip_experience",
      title: "VIP Experience",
      inclusions: [],
      exclusions: [
        "Priority access not available for all rides",
        "Guided tour limited to specific areas",
        "Exclusive perks do not include merchandise discounts",
      ],
      price: 750,
      specialOffer: true,
    },
    {
      type: "family_package",
      title: "Family Package",
      inclusions: [
        "Entry for 2 adults and 2 children",
        "Free meal voucher for kids",
        "Access to family-friendly zones",
        "Priority entry to select attractions",
      ],
      exclusions: [
        "Additional meals not included",
        "Not valid for special events",
      ],
      price: 900,
      specialOffer: false,
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (type) => {
    onSelect(type === selectedType ? null : type);
  };

  const renderTicket = (ticket) => (
    <div className="card border-0 shadow-sm position-relative rounded overflow-hidden h-100">
      {ticket.specialOffer && (
        <div className="position-absolute top-0 start-0 bg-warning text-dark fw-bold px-3 py-1 small rounded-end z-2">
          Special Offer
        </div>
      )}
      <div className="row g-0 h-100">
        <div className="col-12 col-md-8 p-4 d-flex flex-column justify-content-between">
          <div>
            <h5
              className={`fw-bold text-dark mb-3 ${
                ticket.specialOffer ? "mt-2 pt-2" : ""
              }`}
            >
              {ticket.title}
            </h5>

            {ticket.inclusions.length > 0 && (
              <>
                <p className="mb-1 fw-semibold">Inclusions:</p>
                <ul className="small text-muted mb-3">
                  {ticket.inclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {ticket.exclusions.length > 0 && (
              <>
                <p className="mb-1 fw-semibold">Exclusions:</p>
                <ul className="small text-muted">
                  {ticket.exclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="col-12 col-md-4 d-flex flex-column justify-content-between align-items-center p-4 ticket-card-aside">
          <div className="text-center mb-3">
            <div className="text-muted small">From</div>
            <div className="fw-bold">
              <h4>AED {ticket.price}</h4>
            </div>
          </div>
          <button
            className={`theme btn mnw-150 fw-semibold ${
              selectedType === ticket.type
                ? "btn-primary text-white"
                : "btn-outline-primary"
            }`}
            onClick={() => handleClick(ticket.type)}
            aria-label="Ticket types"
          >
            {selectedType === ticket.type ? "Selected" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isMobile ? (
        <Splide
          options={{
            type: "loop", // Loop back to the first slide after the last one
            perPage: 1, // Show 1 item per slide
            perMove: 1, // Move 1 item at a time
            gap: "1rem", // Gap between slides (matches Bootstrap's g-4)
            pagination: true, // Show pagination dots
            arrows: false, // Show navigation arrows
            padding: "0", // No extra padding
            drag: true, // Enable touch swipe
            speed: 400, // Transition speed in ms
            easing: "ease", // Smooth transition
          }}
          aria-label="Ticket Options Slider"
        >
          {tickets.map((ticket) => (
            <SplideSlide key={ticket.type}>{renderTicket(ticket)}</SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="row g-4">
          {tickets.map((ticket) => (
            <div key={ticket.type} className="col-md-12">
              {renderTicket(ticket)}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TicketCard;
