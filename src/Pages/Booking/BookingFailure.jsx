import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Baseurl from "../../Baseurl";
import { Link } from "react-router-dom";
import failedImg from "../../Images/payment-failed.svg"

export const BookingFailure = () => {
  const Weburl = Baseurl.WebUrl;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Booking Failed – Please Try Again | Trypexpert</title>
          <meta
            name="description"
            content="Unfortunately, your booking could not be completed. Please check your details and try again or contact support for assistance. We're here to help you rebook smoothly."
          />
        </Helmet>
      </HelmetProvider>
      <div className="p-top-60 p-bottom-60 bg-gray-gradient" data-aos="fade">
        <section className="container">
          <div className="card border-0 shadow-sm" data-aos="fade">
            <div className="card-body">
              <div className="border-bottom pb-4 mb-4">
                <h2 className="h3 ff-primary mb-0 text-body-emphasis">
                  Payment Unsuccessful
                </h2>
              </div>
              <img
                src={failedImg}
                alt="Payment failed"
                className="img-fluid py-3"
                width="100px"
                loading="lazy"
              />
              <p>
                We apologize, but it appears that your payment could not be
                processed at this time.
              </p>
              <div className="mt-4">
                <h6 className="font-weight-bold">
                  {" "}
                  To ensure a smooth booking process, please review the
                  following :
                </h6>
                <ul>
                  <li>
                    Double-check the payment information provided and try again
                  </li>
                  <li>
                    Ensure that your payment method has sufficient funds
                    available
                  </li>
                  <li>
                    Check your internet connection and try the payment process
                    again.
                  </li>
                </ul>
                <p>
                  If the issue persists or if you need any assistance, please
                  contact our support team at{" "}
                  <Link
                    to="mailto:info@trypexpert.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    info@trypexpert.com
                  </Link>{" "}
                  or call us at{" "}
                  <Link to="tel:+971 50 863 9421">+971 50 863 9421</Link>. Our
                  team will be happy to assist you in completing your booking.
                </p>
                <p>
                  We apologize for any inconvenience caused and thank you for
                  your patience and understanding.
                </p>
              </div>
              <Link
                to={`${Weburl}`}
                className="theme btn btn-primary mnw-180 fw-medium my-3"
              >
                <span>Back to Home</span>
                <i className="hicon hicon-thin-circle-arrow-left ps-2"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
