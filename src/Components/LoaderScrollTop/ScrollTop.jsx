import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      to="#"
      className={`scroll-top ${showScrollTop ? "active" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="hicon hicon-thin-arrow-up"></i>
    </Link>
  );
};
