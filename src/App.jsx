import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // ✅ import useLocation
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

import "./app.min.css";

import { Footer } from "./Pages/Footer/Footer";
import { Loader } from "./Components/LoaderScrollTop/Loader";
import { Home } from "./Pages/Home/home";
import Header from "./Pages/Header/Header";
import { NotFound } from "./Pages/NotFound";
import Baseurl from "./Baseurl";
import { About } from "./Pages/About/About";
import { Contact } from "./Pages/Contact/Contact";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";
import { CookiePolicy } from "./Pages/CookiePolicy";
import { TermsConditions } from "./Pages/TermsConditions";
import { Testimonials } from "./Pages/Testimonials";
import { Blogs } from "./Pages/Blogs/Blogs";
import { BlogDetails } from "./Pages/Blogs/BlogDetails";
import { Destinations } from "./Pages/Destinations/Destinations";
import { DestinationDetails } from "./Pages/Destinations/DestinationDetails";
import { Products } from "./Pages/Products/Products";
import { Accounts } from "./Pages/Accounts/Accounts";
import { ForgotPassword } from "./Pages/ForgotPassword";
import { ResetPassword } from "./Pages/ResetPassword";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Signin } from "./Pages/Signin";
import { ProductDetails } from "./Pages/Products/ProductDetails";
import { BookingFailure } from "./Pages/Booking/BookingFailure";
import { BookingSuccess } from "./Pages/Booking/BookingSuccess";
import { OrderSummary } from "./Pages/Booking/OrderSummary";
import { CheckOut } from "./Pages/Booking/CheckOut";
import { BookingInfo } from "./Pages/Products/BookingInfo";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // ✅ Hook to detect route changes
  const Weburl = Baseurl.WebUrl;

  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    });
  }, []);

  // Trigger loader + scroll to top on every route change
  useEffect(() => {
    setLoading(true); // show loader
    const timer = setTimeout(() => {
      setLoading(false); // hide loader after delay
      window.scrollTo(0, 0); // scroll to top
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]); // ✅ run on pathname change

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ToastContainer position="top-right" autoClose={3000} />
          <Header />
          <main>
            <Routes>
              <Route path={`${Weburl}`} element={<Home />} />
              <Route path={`${Weburl}/about-us`} element={<About />} />
              <Route path={`${Weburl}/contact-us`} element={<Contact />} />
              <Route path={`${Weburl}/activities`} element={<Products />} />
              <Route
                path={`${Weburl}/activities/:slug`}
                element={<ProductDetails />}
              />
              <Route
                path={`${Weburl}/activities/booking-info`}
                element={<BookingInfo />}
              />
              <Route path={`${Weburl}/checkout`} element={<CheckOut />} />
              <Route
                path={`${Weburl}/order-summary`}
                element={<OrderSummary />}
              />
              <Route
                path={`${Weburl}/booking-success`}
                element={<BookingSuccess />}
              />
              <Route
                path={`${Weburl}/booking-failure`}
                element={<BookingFailure />}
              />
              <Route
                path={`${Weburl}/destinations`}
                element={<Destinations />}
              />
              <Route
                path={`${Weburl}/destinations/:slug`}
                element={<DestinationDetails />}
              />
              <Route
                path={`${Weburl}/testimonials`}
                element={<Testimonials />}
              />
              <Route path={`${Weburl}/blogs`} element={<Blogs />} />
              <Route path={`${Weburl}/blogs/:slug`} element={<BlogDetails />} />
              <Route
                path={`${Weburl}/privacy-policy`}
                element={<PrivacyPolicy />}
              />
              <Route
                path={`${Weburl}/cookie-policy`}
                element={<CookiePolicy />}
              />
              <Route
                path={`${Weburl}/terms-of-use`}
                element={<TermsConditions />}
              />
              <Route path="*" element={<NotFound />} />

              <Route path={`${Weburl}/my-account`} element={<Accounts />} />
              <Route path={`${Weburl}/login`} element={<Login />} />
              <Route path={`${Weburl}/sign-up`} element={<Signup />} />
              <Route path={`${Weburl}/register`} element={<Signin />} />
              <Route
                path={`${Weburl}/forgot-password`}
                element={<ForgotPassword />}
              />
              <Route
                path={`${Weburl}/reset-password`}
                element={<ResetPassword />}
              />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
