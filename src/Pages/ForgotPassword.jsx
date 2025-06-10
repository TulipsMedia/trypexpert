import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Baseurl from "../Baseurl";
import forgot from "../Images/forgot-password.svg";

export const ForgotPassword = () => {
  const webUrl = Baseurl;
  const [errorMessage, setErrorMessage] = useState("");
  const [showSecondRow, setShowSecondRow] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredEmail = e.target.email.value;

    // Make a POST request to your PHP endpoint
    try {
      const response = await fetch(`${webUrl.apiUrl}/forgot_password.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: enteredEmail }),
      });

      if (response.ok) {
        const data = await response.json();
        // Check the response from the server
        if (data.result === "Success") {
          setShowSecondRow(true);
          setErrorMessage("");
          setSubmittedEmail(enteredEmail);
        } else {
          setErrorMessage("Email does not match our records.");
        }
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      setErrorMessage("Failed to check email. Please try again.");
    }
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Forgot Password | Trypexpert – Reset Your Account Access
          </title>
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
                {!showSecondRow ? (
                  <div className="card-body">
                    <div className="border-bottom mb-4 text-center">
                      <h1 className="h2 text-body-emphasis">Forgot Password</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="border-bottom pb-4">
                        <div className="mb-4">
                          <label htmlFor="txtEmail" className="form-label">
                            Email<span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control shadow-sm"
                            name="email"
                            required
                          />
                        </div>
                        <p>
                          <strong className="small fw-medium">Note:</strong> A
                          link will be sent to your mail, you need to click on
                          it to create a new password.
                        </p>
                        <button
                          className="theme btn btn-primary w-100"
                          type="submit"
                          aria-label="Submit"
                        >
                          <i className="hicon hicon-email-envelope pe-2"></i>
                          <span>Send Link</span>
                        </button>
                        {errorMessage && (
                          <p className="text-danger pt-3">{errorMessage}</p>
                        )}
                      </div>
                      <div className="mt-4 text-center">
                        <span>
                          Remember Password?{" "}
                          <Link to={`${webUrl.WebUrl}/login`}>Login</Link>
                        </span>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="card-body text-center">
                    <h4 className="font-weight-bold">Check your mail</h4>
                    <img
                      src={forgot}
                      className="img-fluid py-3"
                      alt="forgot password"
                      width="75px"
                      loading="lazy"
                    />
                    <p>
                      We’ve emailed you instructions for setting your password.
                      If an account exists with <b>{submittedEmail}</b>, you’ll
                      receive an email containing the password reset link.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
