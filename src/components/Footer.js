import "../styles/footer.css";

const Footer = ({ scrollToSection, refs }) => {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="footer-box-1">
          <img src="s6-image.png" alt="logo" className="footer-image" />
          <div className="footer-text">
            Ditch the weekend cleaning marathons! Professional cleaning frees up your time to relax, pursue hobbies, or spend time with loved ones.
          </div>
        </div>
        <div className="footer-box-2">
          <div className="header">
            <div className="link-header">Useful Links</div>
            <div className="link" onClick={() => scrollToSection(refs.top)}>Home page</div>
            <div className="link" onClick={() => scrollToSection(refs.aboutCompany)}>About Company</div>
            <div className="link" onClick={() => scrollToSection(refs.service)}>Services</div>
            <div className="link" onClick={() => scrollToSection(refs.ourBenefits)}>Our Benefits</div>
          </div>
          <div className="header">
            <div className="link-header">Services</div>
            <div className="service">Hard Floor Cleaning</div>
            <div className="service">Deep Cleaning Services</div>
            <div className="service">Industrial Cleaning</div>
            <div className="service">Stairwell Cleaning</div>
          </div>
          <div className="header">
            <div className="link-header">Contact</div>
            <div className="link">
              <div className="contact-info">
                <img src="phone.png" alt="phone" className="phone-mail-image" />
                <a href="tel:13475879651">+1 347-587-9651</a>
              </div>
            </div>
            <div className="link">
              <div className="contact-info">
                <img src="mail.png" alt="mail" className="phone-mail-image" />
                <a href="mailto:info@hqcleaningny.com">info@hqcleaningny.com</a>
              </div>
            </div>
            <div className="link">
              <div className="contact-info">
                <img src="address.png" alt="address" className="address-image" />
                <a href="https://www.google.com/maps/search/?api=1&query=207+Skillman+St,+Brooklyn+NY+11205" target="_blank" rel="noopener noreferrer">207 Skillman St, Brooklyn NY 11205</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;