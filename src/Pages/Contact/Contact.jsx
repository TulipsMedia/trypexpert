import React from "react";
import { SubBanner } from "../../Components/Banners/SubBanner";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ContactContent } from "./ContactContent";
import contactBanner from "../../Images/contact-banner.webp";
export const Contact = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contact Us | Trypexpert - Plan Your Next UAE Adventure</title>
          <meta
            name="description"
            content="Get in touch with Trypexpert for personalized travel planning, booking assistance, and support. We're here to help you create unforgettable experiences across the UAE."
          />
        </Helmet>
      </HelmetProvider>
      <SubBanner
        title="Contact Us"
        breadcrumb="Contact Us"
        image={contactBanner}
      />
      <ContactContent />
    </>
  );
};
