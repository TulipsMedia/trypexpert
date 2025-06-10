import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Highlights } from "../Home/Highlights";
import { ClientSlider } from "../Home/ClientSlider";
import { AboutContent } from "./AboutContent";
import { SubBanner } from "../../Components/Banners/SubBanner";
import aboutBanner from "../../Images/about-banner.webp";

export const About = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            About Us | Trypexpert - Crafting Unforgettable UAE Travel
            Experiences
          </title>

          <meta
            name="description"
            content="Learn about Trypexpert, your trusted travel partner in the UAE. We're passionate about curating thrilling experiences — from iconic city tours to desert adventures — that create lifelong memories."
          />
        </Helmet>
      </HelmetProvider>
      <SubBanner title="About Us" breadcrumb="About Us" image={aboutBanner} />
      <Highlights />
      <AboutContent />
      <ClientSlider />
    </>
  );
};
