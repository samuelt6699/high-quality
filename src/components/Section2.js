import React from "react";
import "../components/styles/section2.css";

const Section2 = () => {
  return (
    <section className="section-2">
      <div className="text-box">
        <div className="s2-text">
          We Are Here With Expert 
          <span className="cleaner">
            Cleaner
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="266"
              height="21"
              viewBox="0 0 266 21"
              fill="none"
              className="cleaner-underline"
            >
              <path
                d="M4.25527 16.8859C65.0905 -2.92653 193.112 3.45337 261.916 16.3018"
                stroke="#81CD28"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>

        <div className="s2-text-box">
          <div className="s2-small-text">
            Forget about elbow grease! Powerful formulas tackle even the toughest messes on contact, leaving surfaces sparkling clean with minimal effort.
          </div>
          <div className="s2-book">Book An Appointment</div>
        </div>
      </div>
      <div className="s2-image-containor">
      <img src='s2-image.png' alt='Logo' className="s2-image" />
      </div>
    </section>
  );
};

export default Section2;