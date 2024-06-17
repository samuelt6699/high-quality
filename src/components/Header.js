import React from 'react';
import '../components/styles/section.css';

const Header = () => {
  return (
    <section className='main-header'>
      <img src='logo2.png' alt='Logo' className='header-logo' />
      <div className='header-nav'>
        <div className='header-link'>Home</div>
        <div className='header-link'>About Company</div>
        <div className='header-link'>Residential</div>
        <div className='header-link'>Service</div>
      </div>
      <button className='contact-us'>Contact Us</button>
    </section>
  );
};

export default Header;