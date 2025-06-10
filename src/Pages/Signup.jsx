import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Baseurl from "../Baseurl";
import { Link } from "react-router-dom";

export const Signup = () => {
  const Weburl = Baseurl.WebUrl;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Create Your Account | Trypexpert – Start Your Travel Journey
          </title>
          <meta
            name="description"
            content="Join Trypexpert to discover unique travel experiences, manage your bookings, and receive personalized travel recommendations. Sign up in minutes."
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
                    <h1 className="h2 text-body-emphasis">Sign up</h1>
                    <p>to unlock the full experience</p>
                    <div className="d-flex justify-content-around mt-5 mb-3">
                      <div className="signip-items">
                        <i className="hicon hicon-gift-souvenir-shop fs-3"></i>
                        <p className="font-weight-bold">
                          10% off your first booking
                        </p>
                      </div>
                      <div className="signip-items">
                        <i className="hicon hicon-menu-favorite fs-3"></i>
                        <p className="font-weight-bold">Add to your wishlist</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom pb-4 mb-4">
                    <div className="row">
                      <div className="col-12">
                        <button
                          type="button"
                          className="btn btn-google w-100"
                          aria-label="Google signup"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 534 544"
                            width="20"
                            height="20"
                          >
                            <path
                              fill="#4285f4"
                              d="M534 278c0-18-2-37-5-55H272v105h147c-6 34-26 64-54 83v68h87c52-48 82-118 82-201z"
                            />
                            <path
                              fill="#34a853"
                              d="M272 544c74 0 135-24 181-65l-88-68c-25 16-56 26-93 26-71 0-131-48-153-113H29v70c46 92 140 150 243 150z"
                            />
                            <path
                              fill="#fbbc04"
                              d="M119 324c-11-33-11-70 0-104v-70H29c-39 77-39 168 0 244l90-70z"
                            />
                            <path
                              fill="#ea4335"
                              d="M272 108c39-1 76 14 105 41l77-78a272 272 0 0 0-425 79l90 70c22-64 82-112 153-112z"
                            />
                          </svg>
                          <span className="ms-2">Continue with Google</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="pb-4">
                    <div className="mb-6">
                      <Link
                        className="theme btn btn-primary w-100"
                        to={`${Weburl}/login`}
                      >
                        <i className="hicon hicon hicon-email-envelope pe-2"></i>
                        <span>Continue with Email</span>
                      </Link>
                    </div>
                  </div>
                  <p className="small">
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
                  <div className="mt-4 text-center">
                    <span>
                      Already have an account?{" "}
                      <Link to={`${Weburl}/login`}>Login</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
