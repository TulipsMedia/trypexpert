import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom"; // Import useLocation to get passed state
import { CheckoutAside } from "./CheckoutAside";
import CheckoutForm from "./CheckoutForm";

export const CheckOut = () => {
  const location = useLocation();
  const { selectedDate, ticketType, adults, children, timeslot, total } =
    location.state || {};

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Secure Checkout | Complete Your Booking</title>
          <meta
            name="description"
            content="Review your order details and make a secure payment through our trusted checkout powered by Stripe. Fast, easy, and safe!"
          />
        </Helmet>
      </HelmetProvider>
      <div className="p-top-60 p-bottom-60 bg-gray-gradient" data-aos="fade">
        <section className="container">
          <div className="row g-0">
            <div className="col-12 col-xl-5">
              <div className="pe-xl-4 me-xl-2 sticky-top sticky-top-120 z-0">
                <CheckoutAside
                  selectedDate={selectedDate}
                  ticketType={ticketType}
                  adults={adults}
                  children={children}
                  timeslot={timeslot}
                  total={total}
                />
              </div>
            </div>
            <div className="col-12 col-xl-7">
             <CheckoutForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
