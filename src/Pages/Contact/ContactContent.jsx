import React from "react";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export const ContactContent = () => {
  return (
    <section className="bg-gray-gradient p-bottom-90" data-aos="fade">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <ContactInfo />
          </div>
          <div className="col-12 col-lg-6">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4072.240039392364!2d55.300301!3d25.155658!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f688c5516ea0f%3A0x44800f32689f57e2!2sThe%20Meydan%20Hotel!5e1!3m2!1sen!2sae!4v1748072060037!5m2!1sen!2sae"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
