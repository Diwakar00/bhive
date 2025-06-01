import "./AppSection.css";

const AppSection = () => (
  <section className="section app-section">
    <h2>Download our app now</h2>

    <div className="app-content">
      <div className="phone-mockup">
        <img src="/assets/mobile.PNG" alt="Mobile app mockup" />
      </div>
      <div className="app-text">
        <h4>
          Boost your productivity with the BHIVE Workspace app. Elevate your
          workspace, collaborate efficiently, and unlock exclusive perks.
        </h4>
        <div className="app-buttons">
          <img src="/assets/playstore.png" className="app-btn"></img>
          <img src="/assets/appstore.png" className="app-btn"></img>
        </div>
      </div>
    </div>
    <div className="background"></div>
  </section>
);
export default AppSection;
