import React from "react";
import "../styles/contactus.css";

const ContactUs = ({ toggle }) => {
  return (
    <div className="contact-modal">
      <div className="modal-content">
        <span className="close-button" onClick={toggle}>×</span>
        <div className="contact-wrapper">
          <div className="contact-header">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">
              We'd love to hear from you. Get in touch with us!
            </p>
          </div>
          <div className="contact-content">
            <form className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Type your message..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;