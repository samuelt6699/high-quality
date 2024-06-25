import React, { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

const MainPage = () => {
  const headerHeight = 110; // Height of the header in pixels
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const topRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - headerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="App" ref={topRef}>
      <Header
        scrollToSection={scrollToSection}
        refs={{
          top: topRef,
          aboutCompany: section3Ref,
          service: section4Ref,
          ourBenefits: section5Ref,
        }}
      />
      <div ref={section2Ref}>
        <Section2 />
      </div>
      <div ref={section3Ref}>
        <Section3 />
      </div>
      <div ref={section4Ref}>
        <Section4 />
      </div>
      <div ref={section5Ref}>
        <Section5 />
      </div>
      <div ref={section6Ref}>
        <Section6 />
      </div>
      <Footer
        scrollToSection={scrollToSection}
        refs={{
          top: topRef,
          aboutCompany: section3Ref,
          service: section4Ref,
          ourBenefits: section5Ref,
        }}
      />
   
    </div>
  );
};

export default MainPage;
