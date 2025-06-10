import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../../Images/logo-dark.svg";
import "./Header.css";
import Baseurl from "../../Baseurl";
import SearchInput from "../../Components/Search/SearchInput";
import LocationModal from "../../Components/Modal/LocationModal";
import CategoriesCanvas from "../../Components/OffCanvas/CategoriesCanvas";
import LanguageModal from "../../Components/Modal/LanguageModal";
import CurrencyModal from "../../Components/Modal/CurrencyModal";
import { Language } from "../../Components/Buttons/Language";
import { Currency } from "../../Components/Buttons/Currency";
import { HeaderWishlistButton } from "../../Components/Buttons/HeaderWishlistButton";
import { UserProfile } from "../../Components/Buttons/UserProfile";
import MobileSearchModal from "../../Components/Modal/MobileSearchModal";

const Header = () => {
  const Weburl = Baseurl.WebUrl;
  const [showModal, setShowModal] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const [showLangModal, setShowLangModal] = useState(false);
  const [showCurrModal, setShowCurrModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [selectedLang, setSelectedLang] = useState("english");
  const [selectedCurrency, setSelectedCurrency] = useState("aed"); // Changed to AED default

  useEffect(() => {
    const savedLang = localStorage.getItem("siteLang");
    const savedCurrency = localStorage.getItem("siteCurrency");
    if (savedLang) setSelectedLang(savedLang);
    if (savedCurrency) setSelectedCurrency(savedCurrency);
    else {
      // Set default AED in localStorage if nothing is saved
      localStorage.setItem("siteCurrency", "aed");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`header bg-white py-3 ${
          isFixed ? "fixed-top header-animated" : ""
        }`}
      >
        <div className="desktop_header hide_mobile">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="d-flex align-items-center">
                  <Link to={`${Weburl}`}>
                    <img
                      src={logo}
                      alt="logo"
                      width="180px"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </Link>
                  <ul
                    className="mb-0 header_action_left header_action"
                    style={{ listStyle: "none", display: "inline-flex" }}
                  >
                    <li>
                      <button
                        className="btn border-0 bg-transprant d-flex align-items-center"
                        onClick={() => setShowModal(true)}
                        aria-label="Show location"
                      >
                        <i className="hicon hicon-flights-pin fs-5"></i>{" "}
                        <span className="text-pad-hide ps-1">Location</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn border-0 bg-transprant d-flex align-items-center"
                        onClick={() => setShowCanvas(true)}
                        aria-label="Show categories"
                      >
                        <i className="hicon hicon-ycs-dashboard fs-5"></i>{" "}
                        <span className="text-pad-hide ps-1">Categories</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="d-flex align-items-center justify-content-between">
                  <SearchInput />
                  <ul
                    className="mb-0 text-end ps-2 header_action_right header_action"
                    style={{ listStyle: "none", display: "inline-flex" }}
                  >
                    <li>
                      <Language
                        openLangModal={() => setShowLangModal(true)}
                        selectedLang={selectedLang}
                      />
                    </li>
                    <li>
                      <Currency
                        openCurrModal={() => setShowCurrModal(true)}
                        selectedCurrency={selectedCurrency}
                      />
                    </li>
                    <li>
                      <HeaderWishlistButton />
                    </li>
                    <li>
                      <UserProfile />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="mobile_header px-3 hide_desktop">
          <div className="d-flex align-items-center justify-content-between">
            <div className="w-50">
              <Link to={`${Weburl}`}>
                <img
                  src={logo}
                  alt="logo"
                  width="175px"
                  className="img-fluid"
                  loading="lazy"
                />
              </Link>
            </div>
            <ul
              className="mb-0"
              style={{ listStyle: "none", display: "inline-flex" }}
            >
              <li className="pe-2">
                <button
                  className="btn border-0 bg-transprant"
                  onClick={() => setShowSearchModal(true)}
                  aria-label="Show search location"
                >
                  <i className="hicon hicon-search-icon fs-5 me-2 fs-5"></i>
                </button>
              </li>
              <li className="pe-2">
                <button
                  className="btn border-0 bg-transprant"
                  onClick={() => setShowModal(true)}
                  aria-label="Show location"
                >
                  <i className="hicon hicon-flights-pin me-2 fs-5"></i>
                </button>
              </li>
              <li className="pe-2">
                <HeaderWishlistButton />
              </li>
              <li className="px-2">
                <UserProfile />
              </li>
              <li className="ps-2">
                <button
                  className="btn border-0 bg-transprant"
                  onClick={() => setShowCanvas(true)}
                  aria-label="Show categories"
                >
                  <i
                    className="hicon hicon-hamburger-menu fs-5"
                    style={{ color: "#000" }}
                  ></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Modals and Off-Canvas */}
      <LocationModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
      <CategoriesCanvas
        showCanvas={showCanvas}
        closeCanvas={() => setShowCanvas(false)}
        openLangModal={() => setShowLangModal(true)}
        openCurrModal={() => setShowCurrModal(true)}
        onSelectLanguage={(lang) => {
          setSelectedLang(lang);
          localStorage.setItem("siteLang", lang);
          setShowLangModal(false);
        }}
        selectedLang={selectedLang}
        onSelectCurrency={(currency) => {
          setSelectedCurrency(currency);
          localStorage.setItem("siteCurrency", currency);
          setShowCurrModal(false);
        }}
        selectedCurrency={selectedCurrency}
      />
      <LanguageModal
        showLangModal={showLangModal}
        closeLangModal={() => setShowLangModal(false)}
        onSelectLanguage={(lang) => {
          setSelectedLang(lang);
          localStorage.setItem("siteLang", lang);
          setShowLangModal(false);
        }}
        selectedLang={selectedLang}
      />
      <CurrencyModal
        showCurrModal={showCurrModal}
        closeCurrModal={() => setShowCurrModal(false)}
        onSelectCurrency={(currency) => {
          setSelectedCurrency(currency);
          localStorage.setItem("siteCurrency", currency);
          setShowCurrModal(false);
        }}
        selectedCurrency={selectedCurrency}
      />
      <MobileSearchModal
        showSearchModal={showSearchModal}
        closeSearchModal={() => setShowSearchModal(false)}
      />
    </>
  );
};

export default Header;
