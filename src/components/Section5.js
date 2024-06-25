import React from "react";
import "../styles/section5.css";

const Section5 = () => {
  return (
    <div className="section-5-wrapper">
      <div className="s5-section-1">
        <div className="s5-section-small-box">
          <div className="s5-logo-box">
            <div className="s5-logo">
              <img src="svg-1.svg" alt="logo" />
            </div>
            <div className="s5-logo-text">Benefits For You</div>
          </div>
          <div className="s5-logo-big-text">
            Why <span className="s5-logo-color-text">Choose Us</span>
            <img src="s5-svg.png" alt="underline" className="s5-underline-svg" />
          </div>
        </div>
        <div className="s5-logo-small-text">
          Tired of a lackluster clean? Let our dedicated team transform your building into a sparkling haven.
        </div>
      </div>
      <div className="s5-section-2">
        <div className="s5-small-box">
          <div className="box">
            <img src="svg-3.svg" alt="logo" className="box-svg" />
            <img src="svg-2.svg" alt="logo" className="svg-2" />
          </div>
          <div className="s5-section-2-big-text">Experienced & Certified</div>
          <div className="s5-section-2-small-text">
            Our team is comprised of highly trained and experienced cleaning professionals. We hold all necessary certifications and stay updated on the latest cleaning.
          </div>
        </div>
        <div className="s5-blue-box">
          <div className="box">
            <img src="svg-3.svg" alt="logo" className="blue-box-svg" />
            <img src="svg-4.svg" alt="logo" className="svg-2" />
          </div>
          <div className="s5-blue-big-text">Customized Cleaning Plans</div>
          <div className="s5-blue-small-text">
            We understand every building has unique needs. We work closely with you to create a customized cleaning plan that addresses your specific requirements and budget.
          </div>
        </div>
        <div className="s5-small-box">
          <div className="box">
            <img src="svg-3.svg" alt="logo" className="box-svg" />
            <img src="svg-5.svg" alt="logo" className="svg-2" />
          </div>
          <div className="s5-section-2-big-text">Flexible Scheduling</div>
          <div className="s5-section-2-small-text">
            We offer flexible scheduling options to fit your busy schedule. Whether you need daily, weekly, or one-time cleaning services, we can accommodate your needs.
          </div>
        </div>
        <div className="s5-small-box">
          <div className="box">
            <img src="svg-3.svg" alt="logo" className="box-svg" />
            <img src="svg-6.svg" alt="logo" className="svg-2" />
          </div>
          <div className="s5-section-2-big-text">Experienced & Certified</div>
          <div className="s5-section-2-small-text">
            Our team is comprised of highly trained and experienced cleaning professionals. We hold all necessary certifications and stay updated on the latest cleaning.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;