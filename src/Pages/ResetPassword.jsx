import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const ResetPassword = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Reset Password | Trypexpert – Reset Your Account Access</title>
          <meta
            name="description"
            content="Trouble signing in? Reset your Trypexpert password securely and regain access to your account in just a few steps."
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
                    <h1 className="h2 text-body-emphasis">New Password</h1>
                  </div>
                  <form>
                    <div className="mb-4">
                      <label htmlFor="txtNewPassword5" className="form-label">
                        New password<span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control shadow-sm"
                        name="NewPassword5"
                        type="password"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="txtRetypeNewPassword5"
                        className="form-label"
                      >
                        Retype new password
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control shadow-sm"
                        name="RetypeNewPassword5"
                        type="password"
                        required
                      />
                    </div>
                    <button
                      className="theme btn btn-primary w-100"
                      type="submit"
                      aria-label="Submit"
                    >
                      <i className="hicon hicon-aps-lock pe-2"></i>
                      <span>Create Password</span>
                    </button>
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
