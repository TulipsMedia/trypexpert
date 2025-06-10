import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Baseurl from "../Baseurl";
import { Link } from "react-router-dom";

export const Signin = () => {
  const Weburl = Baseurl.WebUrl;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Register Your Trypexpert Account | Access Travel Plans & Bookings
          </title>
          <meta
            name="description"
            content="Access your Trypexpert account to manage bookings, view itineraries, and continue your travel planning. Sign in securely to get started."
          />
        </Helmet>
      </HelmetProvider>
      <section
        className="p-top-60 p-bottom-60 bg-gray-gradient"
        data-aos="fade"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-5 col-lg-7 col-md-9">
              <div className="card border-0 shadow-sm p-xl-2">
                <div className="card-body">
                  <div className="border-bottom mb-4 text-center">
                    <h1 className="h2 text-body-emphasis">Register</h1>
                    <p>to unlock the full experience</p>
                  </div>
                  <form method="post">
                    <div className="border-bottom pb-2">
                      <div className="mb-3">
                        <label htmlFor="txtEmail" className="form-label">
                          Email<span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control shadow-sm"
                          name="email"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="txtPassword" className="form-label">
                          Password<span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control shadow-sm"
                          name="password"
                          type="password"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="txtRetypePassword"
                          className="form-label"
                        >
                          Retype password<span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control shadow-sm"
                          name="retypepassword"
                          type="password"
                          required
                        />
                      </div>
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input shadow-sm"
                          type="checkbox"
                          id="chckAgree"
                          required
                        />
                        <label
                          className="form-check-label small"
                          htmlFor="chckAgree"
                        >
                          keep me updated on exclusive promotions and deals,
                          product updates, and travel inspiration, including
                          offers from our partners
                          <span className="text-danger">*</span>.
                        </label>
                      </div>
                      <button
                        className="theme btn btn-primary w-100"
                        type="submit"
                        aria-label="Submit"
                      >
                        <i className="hicon hicon-profiles pe-2"></i>
                        <span>Create Account</span>
                      </button>
                      <p className="small pt-3">
                        By signing up, you agree to Trypexpert's{" "}
                        <Link to={`${Weburl}/term-of-use`} target="_blank">
                          Terms of Use{" "}
                        </Link>
                        and for your personal data to be processed in accordance
                        with our{" "}
                        <Link to={`${Weburl}/privacy-policy`} target="_blank">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                    <div className="mt-3 text-center">
                      <span>
                        Already have an account?{" "}
                        <Link to={`${Weburl}/login`}>Log in</Link>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
