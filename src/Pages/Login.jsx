import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Baseurl from "../Baseurl";
import { Link } from "react-router-dom";

export const Login = () => {
  const Weburl = Baseurl.WebUrl;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Login to Your Account | Trypexpert – Manage Your Travel Experience
          </title>
          <meta
            name="description"
            content="Access your Trypexpert account to manage bookings, explore travel options, and get personalized recommendations. Secure and easy login."
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
                    <h1 className="h2 text-body-emphasis">Login</h1>
                    <p>to continue exploring</p>
                  </div>
                  <form method="post">
                    <div className="border-bottom pb-4 mb-3">
                      <div className="row">
                        <div className="col-12">
                          <button
                            type="button"
                            className="btn btn-google w-100"
                            aria-label="Google login"
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
                    <div className="border-bottom pb-3">
                      <h5 className="pt-2">Continue with Email</h5>
                      <div className="my-3">
                        <label htmlFor="txtEmail" className="form-label">
                          Email<span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control shadow-sm"
                          type="text"
                          id="txtEmail"
                          name="username"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="txtPassword" className="form-label">
                          Password<span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control shadow-sm"
                          id="txtPassword"
                          name="password"
                          type="password"
                          required
                        />
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-3 text-end">
                            <Link to={`${Weburl}/forgot-password`}>
                              Forgot password?
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button
                          className="theme btn btn-primary w-100"
                          type="submit"
                          aria-label="Submit"
                        >
                          <i className="hicon hicon-aps-lock pe-2"></i>
                          <span>Login</span>
                        </button>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <span>
                        Don't have an account?{" "}
                        <Link to={`${Weburl}/sign-up`}>Sign up</Link>
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
