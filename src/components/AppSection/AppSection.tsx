import "./AppSection.css";

const AppSection = () => (
  <section className="section">
    <h2>Download our app now</h2>
    <div className="app-content">
      <div className="app-text">
        <p>
          Boost your productivity with the BHIVE Workspace app. Elevate your
          workspace, collaborate efficiently, and unlock exclusive perks.
        </p>
        <div className="app-buttons">
          <img src="src\assets\playstore.png" className="app-btn"></img>
          <img src="src\assets\appstore.png" className="app-btn"></img>
        </div>
      </div>
      <div className="phone-mockup">
        <img src="/api/placeholder/250/400" alt="Mobile app mockup" />
      </div>
    </div>
  </section>
);
export default AppSection;
