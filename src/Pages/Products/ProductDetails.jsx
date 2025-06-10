import React, { useState } from "react";
import { AboutProduct } from "./AboutProduct";
import { AdditionalInfo } from "./AdditionalInfo";
import { Location } from "./Location";
import { ProductReviews } from "./ProductReviews";
import { ProductAside } from "./ProductAside";
import { RelatedProducts } from "./RelatedProducts";
import { Breadcrumb } from "./Breadcrumb";
import { ProductGallery } from "./ProductGallery";
import { FixedBottomBar } from "./FixedBottomBar";

export const ProductDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const pricingData = {
    "2025-06-07": "₹4.1K",
    "2025-06-08": "₹3.7K",
    "2025-06-09": "₹3.7K",
  };

  const handleOpenCalendar = () => setShowModal(true);
  const handleCloseCalendar = () => setShowModal(false);

  const handleDateSelect = (date) => {
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);
    setSelectedDate(normalizedDate);
  };

  return (
    <>
      <section className="p-top-50 p-bottom-90 bg-gray-gradient">
        <Breadcrumb />
        <div className="container pb-5">
          <ProductGallery />
        </div>
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-lg-8">
              <div className="pe-lg-4 me-lg-2">
                <AboutProduct />
                <ProductReviews />
                <AdditionalInfo />
                <Location />
              </div>
            </div>
            <div className="col-12 col-lg-4 hide_mobile">
              <ProductAside
                showModal={showModal}
                onOpenCalendar={handleOpenCalendar}
                onCloseCalendar={handleCloseCalendar}
                selectedDate={selectedDate}
                onDateSelect={handleDateSelect}
                pricingData={pricingData}
              />
            </div>
          </div>
        </div>
        <RelatedProducts />
        <FixedBottomBar
          onOpenCalendar={handleOpenCalendar}
          showModal={showModal}
          onCloseCalendar={handleCloseCalendar}
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
          pricingData={pricingData}
        />
      </section>
    </>
  );
};