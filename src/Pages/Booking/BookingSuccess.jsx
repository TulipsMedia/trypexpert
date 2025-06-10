import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Baseurl from "../../Baseurl";
import { Link } from "react-router-dom";
import SuccessImg from "../../Images/payment-success.svg";

export const BookingSuccess = () => {
  const Weburl = Baseurl.WebUrl;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Booking Confirmed – Thank You for Booking with Us | Trypexpert
          </title>
          <meta
            name="description"
            content="Your booking was successful! A confirmation has been sent to your email. View your booking details, manage your reservations, or explore more experiences in your dashboard."
          />
        </Helmet>
      </HelmetProvider>
      <div className="p-top-60 p-bottom-60 bg-gray-gradient" data-aos="fade">
        <section className="container">
          <div className="card border-0 shadow-sm" data-aos="fade">
            <div className="card-body">
              <div className="border-bottom pb-4 mb-4">
                <h2 className="h3 ff-primary mb-0 text-body-emphasis">
                  Payment Successful!
                </h2>
              </div>
              <img
                src={SuccessImg}
                alt="Payment Success"
                className="img-fluid py-3"
                width="100px"
                loading="lazy"
              />
              <p>
                Congratulations, your payment has been successfully processed.
                Thank you for booking with us!
              </p>
              <div className="mt-4">
                <h6 className="font-weight-bold">
                  Here's the summary of your booking
                </h6>
                <div className="table-responsive">
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <th>Order ID</th>
                        <td>#001</td>
                      </tr>
                      <tr>
                        <th>Guest name</th>
                        <td>Murukesan</td>
                      </tr>
                      <tr>
                        <th>Product name</th>
                        <td>Yash Water World Tickets</td>
                      </tr>
                      <tr>
                        <th>Package name</th>
                        <td>Mobile Ticket</td>
                      </tr>
                      <tr>
                        <th>Preferences</th>
                        <td>2 Days 1 Night</td>
                      </tr>
                      <tr>
                        <th>Paid Amount</th>
                        <td>150.00 AED</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h6 className="font-weight-bold mt-3">
                  {" "}
                  Important Information :
                </h6>
                <ul>
                  <li>
                    You will receive a confirmation email shortly with all the
                    details of your booking
                  </li>
                  <li>
                    Please retain your Order ID for any future reference or
                    inquiries.
                  </li>
                </ul>
                <p>
                  If you have any questions or need further assistance, feel
                  free to contact our support team at{" "}
                  <Link
                    to="mailto:info@trypexpert.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    info@trypexpert.com
                  </Link>{" "}
                  or call us at{" "}
                  <Link to="tel:+971 50 863 9421">+971 50 863 9421</Link>.
                </p>
                <p>
                  We hope you have a fantastic experience on your{" "}
                  <b>Yash Water World Tickets</b>. Thank you for choosing us!
                </p>
                <p>Enjoy your journey!</p>
                <Link
                  to={`${Weburl}`}
                  className="theme btn btn-primary mnw-180 fw-medium my-3"
                >
                  <span>Back to Home</span>
                  <i className="hicon hicon-thin-circle-arrow-left ps-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
