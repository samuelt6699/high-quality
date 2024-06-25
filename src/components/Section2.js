import React, { useState } from 'react';
import "../styles/section2.css";
import ContactUs from './ContactUs';

const Section2 = () => {
  const [isContactOpen, setContactOpen] = useState(false);

  const toggleContactPopup = () => {
    setContactOpen(!isContactOpen);
  };
  return (
    <section className="section-2">
      <div className="text-box">
        <div className="s2-text">
          We Are Here With Expert&nbsp;
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
            Forget about elbow grease! Powerful formulas tackle even the
            toughest messes on contact, leaving surfaces sparkling clean with
            minimal effort.
          </div>
          <button className='s2-book' onClick={toggleContactPopup}>Book An Appointment</button>
          
        </div>
      </div>
      <div className="s2-image-container">
        <img src="big-image.png" alt="Cleaner" className="s2-image" />
      </div>
      {isContactOpen && <ContactUs toggle={toggleContactPopup} />}
    </section>
    
  );
};

export default Section2;