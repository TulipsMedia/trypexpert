import React from "react";
import { useNavigate } from "react-router-dom";

export const WishlistButton = ({ prodId }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation(); // ⛔ Prevent event from reaching parent <Link>
    e.preventDefault(); // ⛔ Prevent default <button> behavior

    const isLoggedIn = !!localStorage.getItem("userToken"); // example check

    if (!isLoggedIn) {
      localStorage.setItem("tempWishlist", prodId);
      navigate("/login");
      return;
    }

    // Toggle liked class manually
    const icon = e.currentTarget.querySelector("i");
    icon.classList.toggle("liked");

    // Optionally store in localStorage or make API call

  };

  return (
    <div className="tour-like z-2">
      <button
        type="button"
        className="circle-icon like-icon"
        onClick={handleClick}
        aria-label="Wislist product"
      >
        <input type="hidden" value={prodId} />
        <i className="hicon hicon-favorite-filled"></i>
      </button>
    </div>
  );
};
