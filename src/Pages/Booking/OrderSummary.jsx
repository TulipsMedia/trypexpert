import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Baseurl from "../../Baseurl";
import { Link } from "react-router-dom";
import orderImg from "../../Images/order-summary.svg";

export const OrderSummary = () => {
  const Weburl = Baseurl.WebUrl;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Order Summary – Review Your Booking Details | Trypexpert
          </title>
          <meta
            name="description"
            content="View a detailed summary of your order, including booking details, pricing, and selected options. Confirm everything is correct before completing your booking"
          />
        </Helmet>
      </HelmetProvider>
      <div className="p-top-60 p-bottom-60 bg-gray-gradient" data-aos="fade">
        <section className="container">
          <div className="card border-0 shadow-sm" data-aos="fade">
            <div className="card-body">
              <div className="border-bottom pb-4 mb-4">
                <h2 className="h3 ff-primary mb-0 text-body-emphasis">
                  Booking Confirmation
                </h2>
              </div>
              <img
                src={orderImg}
                alt="Order Summary"
                className="img-fluid py-3"
                width="100px"
                loading="lazy"
              />
              <p>Here's the summary of your booking</p>
              <div className="mt-3">
                <div className="table table-bordered table-striped">
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <th>Guest name</th>
                        <td>Murukesan A</td>
                      </tr>
                      <tr>
                        <th>Guest email</th>
                        <td>Test@gmail.com</td>
                      </tr>
                      <tr>
                        <th>Guest mobile</th>
                        <td>+91 12345 98745</td>
                      </tr>
                      <tr>
                        <th>Guest Special Request</th>
                        <td>2 Days 1 Night</td>
                      </tr>
                      <tr>
                        <th>Product Name</th>
                        <td>Yash Water World Ticket</td>
                      </tr>
                      <tr>
                        <th>Package Name</th>
                        <td>Mobile Ticket</td>
                      </tr>
                      <tr>
                        <th>Addon</th>
                        <td>Addon name</td>
                      </tr>
                      <tr>
                        <th>Date</th>
                        <td>01-Jul-2025</td>
                      </tr>
                      <tr>
                        <th>Total Amount</th>
                        <td>$1200.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Link
                  to={`${Weburl}`}
                  className="theme btn btn-primary mnw-180 fw-medium my-3"
                >
                  <i className="hicon hicon-check-valid-state pe-2"></i>
                  <span>Confirm Booking</span>
                </Link>
                <Link
                  to={`${Weburl}/activities`}
                  className="theme btn btn-link link-dark link-hover fw-medium mnw-180"
                >
                  <i className="hicon hicon-cancel-booking pe-2"></i>
                  <span>Cancel Booking</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
