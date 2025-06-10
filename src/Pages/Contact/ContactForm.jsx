import React from "react";

export const ContactForm = () => {
  return (
    <div className="form-contact rounded-4 shadow-sm">
      <form className="contact-form">
        <div className="border-bottom pb-4 mb-4">
          <h2 className="text-white mb-0">Looking for any help?</h2>
        </div>
        <div className="alert d-none" role="alert" id="msg_alert"></div>
        <div className="form-floating mb-4">
          <input
            id="txtYourName"
            type="text"
            name="yourname"
            className="form-control shadow-sm"
            placeholder="Your Name"
            required
          />
          <label htmlFor="txtYourName">Your Name *</label>
        </div>
        <div className="form-floating mb-4">
          <input
            id="txtEmail"
            type="email"
            name="email"
            className="form-control shadow-sm"
            placeholder="Email"
            required
          />
          <label htmlFor="txtEmail">Your Email *</label>
        </div>
        <div className="form-floating mb-4">
          <input
            id="txtSubject"
            type="text"
            name="subject"
            className="form-control shadow-sm"
            placeholder="Subject"
            required
          />
          <label htmlFor="txtSubject">Subject *</label>
        </div>
        <div className="form-floating mb-4">
          <textarea
            id="txtMessage"
            name="message"
            className="form-control shadow-sm"
            placeholder="Message"
            style={{ height: "150px" }}
            required
          ></textarea>
          <label htmlFor="txtMessage">Message *</label>
        </div>
        <button
          type="submit"
          className="theme btn btn-light mnw-180"
          aria-label="Submit"
        >
          <i className="hicon hicon-email-envelope pe-1"></i>
          <span> Send message</span>
        </button>
      </form>
    </div>
  );
};
