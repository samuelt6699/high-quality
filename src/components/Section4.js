import "../styles/section4.css";

const Section4 = () => {
  return (
    <div id="section-4-wrapper">
      <div id="s4-section-1">
        <div id="service-tag">
          <div id="service-image">
            <img src="s4-image-1.png" />
            <div id="service-1-text">Our Service</div>
          </div>
          <div id="big-text-container">
            <div id="s4-big-text">
              Professional <span id="service-color-tag">Cleaning Services</span>
            </div>
            <svg
              id="big-text-underline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 428 22"
            >
              <path d="M4 14.576C111.458 -2.20602 305.131 2.522 424 18" />
            </svg>
          </div>
          <div id="servive-2-text">
            Our team of highly trained and insured cleaning professionals are
            dedicated to providing exceptional service.
          </div>
        </div>
      </div>
      <div id="s4-section-2">
        <div id="s4-small-images">
          <div id="image-1">
            <img src="new.jpg" alt="logo" id="s4-image" />
            <div id="small-box-text-container">
              <div id="s4-text-big">Small building cleaning</div>
              <div id="s4-text-small">
              Our skilled team, armed with cutting-edge equipment, excels at efficiently addressing the unique needs of cleaning small buildings.
              </div>
            </div>
          </div>

          <div id="image-1">
            <img src="new-big.jpeg" alt="logo" id="s4-image" />
            <div id="small-box-text-container">
              <div id="s4-text-big">Large Building Cleaning</div>
              <div id="s4-text-small">
              Our expert team, equipped with advanced tools, is adept at efficiently managing the unique challenges of cleaning large buildings.
              </div>
            </div>
          </div>
          <div id="image-1">
            <img src="h.jpg" alt="logo" id="s4-image" />
            <div id="small-box-text-container">
              <div id="s4-text-big">Stairwell Cleaning</div>
              <div id="s4-text-small">
                Professional stairwell cleaning services ensure a clean and
                welcoming environment for residents and visitors in your
                building.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
