import React, { useState } from 'react';
import '../styles/section.css';
import ContactUs from './ContactUs';

const Header = ({ scrollToSection, refs }) => {
  const [isContactOpen, setContactOpen] = useState(false);

  const toggleContactPopup = () => {
    setContactOpen(!isContactOpen);
  };

  return (
    <>
      <section className='main-header'>
        <img src='logo2.png' alt='Logo' className='header-logo' onClick={() => scrollToSection(refs.top)} />
        <div className='header-nav'>
          <div className='header-link' onClick={() => scrollToSection(refs.top)}>Home</div>
          <div className='header-link' onClick={() => scrollToSection(refs.aboutCompany)}>About Company</div>
          <div className="header-link" onClick={() => scrollToSection(refs.service)}>Services</div>
          <div className='header-link' onClick={() => scrollToSection(refs.ourBenefits)}>Our Benefits</div>
        </div>
        <button className='contact-us' onClick={toggleContactPopup}>Contact Us</button>
      </section>
      {isContactOpen && <ContactUs toggle={toggleContactPopup} />}
    </>
  );
};

export default Header;