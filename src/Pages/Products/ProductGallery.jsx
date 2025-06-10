import React, { useState, useEffect } from "react";

export const ProductGallery = () => {
  const [images] = useState([
    "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Legoland-Dubai.webp",
    "https://rathincom.b-cdn.net//app-assets/media/products/PRO_ING_5_3.webp",
    "https://rathincom.b-cdn.net//app-assets/media/products/product_image_Dubai-Dolphinarium.webp",
    "https://rathincom.b-cdn.net//app-assets/media/products/PRO_ING_5_0.webp",
    "https://rathincom.b-cdn.net//app-assets/media/products/PRO_ING_12_0.webp",
    "https://rathincom.b-cdn.net//app-assets/media/products/PRO_ING_12_1.webp",
    "https://rathincom.b-cdn.net//app-assets/media/products/PRO_ING_12_2.webp",
  ]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxOpacity, setLightboxOpacity] = useState(0); // New state for fade animation
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllModal, setShowAllModal] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size and update state
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const handleResize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    setImageLoading(false);
    setImageOpacity(1);
    setLightboxOpacity(0); // Start with opacity 0
    // Trigger fade-in after a short delay to ensure the element is mounted
    setTimeout(() => setLightboxOpacity(1), 10);
  };

  const closeLightbox = () => {
    setLightboxOpacity(0); // Start fade-out
    // Close lightbox after the transition completes
    setTimeout(() => {
      setLightboxOpen(false);
    }, 300); // Match the transition duration (0.3s)
  };

  const nextImage = () => {
    setImageLoading(true);
    setImageOpacity(0);

    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setImageLoading(false);
      setImageOpacity(1);
    }, 200);
  };

  const prevImage = () => {
    setImageLoading(true);
    setImageOpacity(0);

    setTimeout(() => {
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );
      setImageLoading(false);
      setImageOpacity(1);
    }, 200);
  };

  const openShowAllModal = () => {
    setShowAllModal(true);
  };

  const closeShowAllModal = () => {
    setShowAllModal(false);
  };

  // Preload next and previous images for smoother transitions
  useEffect(() => {
    if (lightboxOpen && images.length > 1) {
      const nextIndex = (currentImageIndex + 1) % images.length;
      const prevIndex = (currentImageIndex - 1 + images.length) % images.length;

      const nextImg = new Image();
      nextImg.src = images[nextIndex];

      const prevImg = new Image();
      prevImg.src = images[prevIndex];
    }
  }, [currentImageIndex, lightboxOpen, images]);

  const renderGalleryLayout = () => {
    const imageCount = images.length;

    if (isSmallScreen && imageCount > 0) {
      return (
        <div className="col-12 position-relative" style={{ height: "375px" }}>
          <figure className="image-hover image-hover-scale rounded mb-0">
            <img
              src={images[0]}
              alt="Gallery image 1"
              className="w-100 rounded"
              style={{ objectFit: "cover", cursor: "pointer", height: "375px" }}
              onClick={() => openLightbox(0)}
              decoding="async"
              fetchPriority="high"
            />
          </figure>
          {imageCount > 1 && (
            <div
              className="position-absolute rounded show_all_photos py-2 px-3"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                cursor: "pointer",
                color: "white",
                bottom: "10px",
                right: "10px",
              }}
              onClick={openShowAllModal}
            >
              <div className="d-flex align-items-center">
                <i className="hicon hicon-ycs-dashboard text-white"></i>
                <span className="fw-medium ms-1">Show all photos</span>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (imageCount === 1) {
      return (
        <div className="col-12" style={{ height: "375px" }}>
          <figure className="image-hover image-hover-scale rounded mb-0">
            <img
              src={images[0]}
              alt="Gallery image 1"
              className="w-100 rounded"
              style={{ objectFit: "cover", cursor: "pointer", height: "375px" }}
              onClick={() => openLightbox(0)}
              decoding="async"
              fetchPriority="high"
            />
          </figure>
        </div>
      );
    }

    if (imageCount === 2) {
      return (
        <div className="row g-2" style={{ height: "375px" }}>
          {images.slice(0, 2).map((image, index) => (
            <div key={index} className="col-6">
              <figure className="image-hover image-hover-scale rounded mb-0">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-100 rounded"
                  style={{
                    objectFit: "cover",
                    cursor: "pointer",
                    height: "375px",
                  }}
                  onClick={() => openLightbox(index)}
                  decoding="async"
                  fetchPriority="high"
                />
              </figure>
            </div>
          ))}
        </div>
      );
    }

    if (imageCount === 3) {
      return (
        <div className="row g-2" style={{ height: "375px" }}>
          <div className="col-6">
            <figure className="image-hover image-hover-scale rounded mb-0">
              <img
                src={images[0]}
                alt="Gallery image 1"
                className="w-100 rounded"
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
                  height: "375px",
                }}
                onClick={() => openLightbox(0)}
                decoding="async"
                fetchPriority="high"
              />
            </figure>
          </div>
          <div className="col-6">
            <div className="row g-2 h-100">
              {images.slice(1, 3).map((image, index) => (
                <div key={index + 1} className="col-12">
                  <figure className="image-hover image-hover-scale rounded mb-0">
                    <img
                      src={image}
                      alt={`Gallery image ${index + 2}`}
                      className="w-100 rounded"
                      style={{
                        objectFit: "cover",
                        cursor: "pointer",
                        height: "183px",
                      }}
                      onClick={() => openLightbox(index + 1)}
                      decoding="async"
                      fetchPriority="high"
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (imageCount === 4) {
      return (
        <div className="row g-2" style={{ height: "375px" }}>
          <div className="col-6">
            <figure className="image-hover image-hover-scale rounded mb-0">
              <img
                src={images[0]}
                alt="Gallery image 1"
                className="w-100 rounded"
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
                  height: "375px",
                }}
                onClick={() => openLightbox(0)}
                decoding="async"
                fetchPriority="high"
              />
            </figure>
          </div>
          <div className="col-6">
            <div className="row g-2 h-100">
              <div className="col-12">
                <div className="row g-2">
                  {images.slice(1, 3).map((image, index) => (
                    <div key={index + 1} className="col-6">
                      <figure className="image-hover image-hover-scale rounded mb-0">
                        <img
                          src={image}
                          alt={`Gallery image ${index + 2}`}
                          className="w-100 rounded"
                          style={{
                            objectFit: "cover",
                            cursor: "pointer",
                            height: "183px",
                          }}
                          onClick={() => openLightbox(index + 1)}
                          decoding="async"
                          fetchPriority="high"
                        />
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12">
                <figure className="image-hover image-hover-scale rounded mb-0">
                  <img
                    src={images[3]}
                    alt="Gallery image 4"
                    className="w-100 rounded"
                    style={{
                      objectFit: "cover",
                      cursor: "pointer",
                      height: "183px",
                    }}
                    onClick={() => openLightbox(3)}
                    decoding="async"
                    fetchPriority="high"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="row g-2" style={{ height: "375px" }}>
        <div className="col-6">
          <figure className="image-hover image-hover-scale rounded mb-0">
            <img
              src={images[0]}
              alt="Gallery image 1"
              className="w-100 rounded"
              style={{ objectFit: "cover", cursor: "pointer", height: "375px" }}
              onClick={() => openLightbox(0)}
              decoding="async"
              fetchPriority="high"
            />
          </figure>
        </div>
        <div className="col-6">
          <div className="row g-2 h-100">
            <div className="col-12">
              <div className="row g-2">
                {images.slice(1, 3).map((image, index) => (
                  <div key={index + 1} className="col-6">
                    <figure className="image-hover image-hover-scale rounded mb-0">
                      <img
                        src={image}
                        alt={`Gallery image ${index + 2}`}
                        className="w-100 rounded"
                        style={{
                          objectFit: "cover",
                          cursor: "pointer",
                          height: "183px",
                        }}
                        onClick={() => openLightbox(index + 1)}
                        decoding="async"
                        fetchPriority="high"
                      />
                    </figure>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12">
              <div className="row g-2">
                <div className="col-6">
                  <figure className="image-hover image-hover-scale rounded mb-0">
                    <img
                      src={images[3]}
                      alt="Gallery image 4"
                      className="w-100 rounded"
                      style={{
                        objectFit: "cover",
                        cursor: "pointer",
                        height: "183px",
                      }}
                      onClick={() => openLightbox(3)}
                      decoding="async"
                      fetchPriority="high"
                    />
                  </figure>
                </div>
                <div className="col-6 position-relative">
                  <figure className="image-hover image-hover-scale rounded mb-0">
                    <img
                      src={images[4]}
                      alt="Gallery image 5"
                      className="w-100 rounded"
                      style={{
                        objectFit: "cover",
                        cursor: "pointer",
                        height: "183px",
                      }}
                      onClick={() => openLightbox(4)}
                      decoding="async"
                      fetchPriority="high"
                    />
                  </figure>
                  {imageCount > 5 && (
                    <div
                      className="position-absolute rounded show_all_photos py-2 px-3"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        cursor: "pointer",
                        color: "white",
                        bottom: "10px",
                        right: "10px",
                      }}
                      onClick={openShowAllModal}
                    >
                      <div className="d-flex align-items-center">
                        <i className="hicon hicon-ycs-dashboard text-white"></i>
                        <span className="fw-medium ms-1">Show all photos</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderGalleryLayout()}

      {/* Lightbox with smooth fade */}
      {lightboxOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 9999999,
            opacity: lightboxOpacity,
            transition: "opacity 0.3s ease-in-out", // Smooth fade transition
          }}
        >
          <div
            className="position-relative"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
          >
            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="btn btn-link position-absolute text-white p-0"
              style={{
                top: "15px",
                right: "15px",
                zIndex: 10,
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              <i
                className="hicon hicon-close-popup-solid"
                style={{ fontSize: "32px" }}
              ></i>
            </button>

            <button
              onClick={prevImage}
              aria-label="Prev image"
              className="btn btn-link position-absolute text-white p-0"
              style={{
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              <i
                className="hicon hicon-edge-arrow-left"
                style={{ fontSize: "48px" }}
              ></i>
            </button>

            <button
              onClick={nextImage}
              aria-label="Next image"
              className="btn btn-link position-absolute text-white p-0"
              style={{
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              <i
                className="hicon hicon-edge-arrow-right"
                style={{ fontSize: "48px" }}
              ></i>
            </button>

            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "90vw",
                height: "90vh",
                position: "relative",
              }}
            >
              <img
                src={images[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="img-fluid"
                style={{
                  maxHeight: "90vh",
                  maxWidth: "90vw",
                  objectFit: "contain",
                  opacity: imageOpacity,
                  transition: "opacity 0.3s ease-in-out",
                }}
                decoding="async"
                fetchPriority="high"
              />

              {imageLoading && (
                <div
                  className="position-absolute d-flex align-items-center justify-content-center"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                  }}
                >
                  <div
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <span>Loading...</span>
                </div>
              )}
            </div>

            <div
              className="position-absolute text-white text-center"
              style={{
                bottom: "15px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "14px",
              }}
            >
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}

      {/* Show All Modal */}
      {showAllModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-white overflow-auto"
          style={{ zIndex: 9999999 }}
        >
          <div className="sticky-top bg-white border-bottom p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="h4 mb-0">All Photos ({images.length})</h2>
              <button
                onClick={closeShowAllModal}
                aria-label="Close modal"
                className="btn btn-link"
              >
                <i className="hicon hicon-close-popup-solid fs-2"></i>
              </button>
            </div>
          </div>

          <div
            className="container"
            style={{ maxWidth: "800px", padding: "20px" }}
          >
            {images.map((image, index) => (
              <div key={index} className="mb-4">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-100 rounded"
                  style={{
                    cursor: "pointer",
                    transition: "opacity 0.3s ease, transform 0.2s ease",
                  }}
                  onClick={() => {
                    closeShowAllModal();
                    openLightbox(index);
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "0.9";
                    e.target.style.transform = "scale(0.98)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "1";
                    e.target.style.transform = "scale(1)";
                  }}
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

