import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../Buttons/Language";
import { Currency } from "../Buttons/Currency";
import Baseurl from "../../Baseurl";
import tourData from "../../JsonData/tourData";

const CategoriesCanvas = ({
  showCanvas,
  closeCanvas,
  openLangModal,
  openCurrModal,
  selectedLang,
  selectedCurrency,
}) => {
  const Weburl = Baseurl.WebUrl;
  // Sample data for categories
  const categories = [
    {
      id: 1,
      name: "Adventure Tours",
      slug: "adventure-tours",
      image:
        "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Pearls-Kingdom-Waterpark.webp",
    },
    {
      id: 2,
      name: "Beach Holidays",
      slug: "beach-holidays",
      image:
        "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Ferrari-World-Abu-Dhabi.webp",
    },
    {
      id: 3,
      name: "City Breaks",
      slug: "city-breaks",
      image:
        "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Dubai-Dolphinarium.webp",
    },
    {
      id: 4,
      name: "Cultural Trips",
      slug: "cultural-trips",
      image:
        "https://rathincom.b-cdn.net//app-assets/media/products/product_image_IMG-Worlds-of-Adventure-Dubai.webp",
    },
    {
      id: 5,
      name: "Wildlife Safaris",
      slug: "wildlife-safaris",
      image:
        "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Gardens-by-the-Bay-Ticket-Singapore.webp",
    },
    {
      id: 6,
      name: "Luxury Travel",
      slug: "luxury-travel",
      image:
        "https://rathincom.b-cdn.net//app-assets/media/products/product_image_AYA-Universe.webp",
    },
    {
      id: 7,
      name: "Food & Wine",
      slug: "food-wine",
      image:
        "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Dubai-Miracle-Garden.webp",
    },
    {
      id: 8,
      name: "Cruises",
      slug: "cruises",
      image:
        "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Atlantis-Aquaventure-Waterpark.webp",
    },
    {
      id: 9,
      name: "Wellness Retreats",
      slug: "wellness-retreats",
      image:
        "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Singapore-Night-Safari-Ticket.webp",
    },
    {
      id: 10,
      name: "Mountain Treks",
      slug: "mountain-treks",
      image:
        "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Madame-Tussauds-Singapore.webp",
    },
  ];

  const handleOpenLangModal = () => {
    closeCanvas();
    openLangModal();
  };

  const handleOpenCurrModal = () => {
    closeCanvas();
    openCurrModal();
  };

  const handleLinkClick = () => {
    closeCanvas();
  };

  return (
    <>
      {/* Backdrop */}
      {showCanvas && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={closeCanvas}
          style={{ zIndex: 1040 }}
        ></div>
      )}

      <div
        className={`offcanvas offcanvas-start ${showCanvas ? "show" : ""}`}
        style={{
          visibility: showCanvas ? "visible" : "hidden",
          transform: showCanvas ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 9999999,
        }}
      >
        <div
          className="offcanvas-header"
          style={{ borderBottom: "1px solid #dee2e6" }}
        >
          <h5 className="offcanvas-title">Categories</h5>
          <button
            type="button"
            className="btn-close"
            onClick={closeCanvas}
            aria-label="Open canvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <div className="currency_language pb-3 hide_desktop">
            <div className="d-flex justify-content-between">
              <Language
                openLangModal={handleOpenLangModal}
                selectedLang={selectedLang}
              />
              <Currency
                openCurrModal={handleOpenCurrModal}
                selectedCurrency={selectedCurrency}
              />
            </div>
          </div>

          <div className="canvas_categories_result">
            <ul className="ps-0">
              {tourData.map((data) => (
                <li key={data.id}>
                  <Link
                    to={`${Weburl}/activities/${data.slug}`}
                    onClick={handleLinkClick}
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="d-flex align-items-center">
                        <img
                          src={data.image}
                          alt={data.title}
                          className="rounded-3"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="ps-3">
                          <span className="cat_name">{data.title}</span>
                          <p className="text-muted mb-0 small">
                            <i className="hicon hicon-flights-pin me-1"></i>
                            {data.city},{data.country}
                          </p>
                        </span>
                      </span>
                      <i className="hicon hicon-edge-arrow-right"></i>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesCanvas;
