import React from "react";
import "../styles/section3.css";

const Section3 = () => {
  return (
    <div className="section-3-wrapper">
      <section className="section-3">
        <div className="content-wrapper">
          <div className="image-wrapper">
            <div className="image-container">
              <img src="s3-image1.png" alt="Logo" className="s3-image1" />
              <img src="men-window.png" alt="Logo" className="s3-image2" />
            </div>
          </div>
          <div className="s3-section2">
            <div className="about">
              <img src="s3-image3.png" alt="Logo" className="s3-image3" />
              <div className="se-tag-about">About company</div>
            </div>
            <div className="s3-text-1">
              Our Promise Is To Deliver Only The{" "}
              <span className="s3-color-text">
                Best Services{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="300"
                  height="22"
                  viewBox="0 0 428 22"
                  fill="none"
                  className="cleaner-color-underline"
                >
                  <path
                    d="M4 14.576C111.458 -2.20602 305.131 2.522 424 21"
                    stroke="#81CD28"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
            <div className="s3-small-text">
              We specialize in maintenance cleaning for{" "}
              <span className="s3-small-bold">
                large buildings, prevailing wage buildings,
              </span>{" "}
              and <span className="s3-small-bold">small buildings.</span> We
              offer competitive prices and{" "}
              <span className="s3-small-bold"> special discount</span> rates for
              apartment cleaning for our customers.
            </div>
            <div className="s3-small-text">
              Focus on management while we take care of cleaning your building.
              Don't let the headache of maintaining cleanliness bother you—hand
              it over to us. We'll ensure that your building is beautifully
              cleaned, both inside and out.
            </div>
          </div>
        </div>
      </section>
      <img
        src="s3-small-image.png"
        alt="Small Decorative"
        className="s3-small-image"
      />
    </div>
  );
};

export default Section3;