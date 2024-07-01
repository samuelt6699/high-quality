import React, { useState, useEffect } from "react";
import "../styles/section5.css";

const Section5 = () => {
  // Initialize the active box index from localStorage or default to the first box
  const initialActiveIndex = localStorage.getItem('activeBoxIndex') 
    ? parseInt(localStorage.getItem('activeBoxIndex'),10) 
    : 0;

  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  useEffect(() => {
    // Update localStorage whenever activeIndex changes
    localStorage.setItem('activeBoxIndex', activeIndex);
  }, [activeIndex]);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  // Defining static boxes content
  const boxes = [
    {
      img1: "svg-3.svg",
      img2: "svg-2.svg",
      title: "Experienced & Certified",
      text: "Our team is comprised of highly trained and experienced cleaning professionals. We hold all necessary certifications and stay updated on the latest cleaning.",
    },
    {
      img1: "svg-3.svg",
      img2: "svg-4.svg",
      title: "Best Pricing Plan",
      text: "The most popular choice, offering a balance of features and value for everyday needs.Packed with premium features and functionalities for power users.",
    },
    {
      img1: "svg-3.svg",
      img2: "svg-5.svg",
      title: "Customized Cleaning Plans",
      text: "We understand every building has unique needs. We work closely with you to create a customized cleaning plan that addresses your specific requirements and budget.",
    },
    {
      img1: "svg-3.svg",
      img2: "svg-6.svg",
      title: "Flexible Scheduling",
      text: "We offer flexible scheduling options to fit your busy schedule. Whether you need daily, weekly, or one-time cleaning services, we can accommodate your needs.",
    },
  ];

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
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`s5-small-box ${activeIndex === index ? "s5-active-box" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <div className="box">
              <img src={box.img1} alt="logo" className="box-svg" />
              <img src={box.img2} alt="logo" className="svg-2" />
            </div>
            <div className="s5-section-2-big-text">{box.title}</div>
            <div className="s5-section-2-small-text">{box.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;