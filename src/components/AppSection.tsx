import { Download } from "lucide-react";

const AppSection = () => (
  <section className="app-section">
    <div className="app-content">
      <div className="app-text">
        <h2>Download our app now</h2>
        <p>
          Boost your productivity with the BHIVE Workspace app. Elevate your
          workspace, collaborate efficiently, and unlock exclusive perks.
        </p>
        <div className="app-buttons">
          <a href="#" className="app-btn">
            <Download size={20} />
            Google Play
          </a>
          <a href="#" className="app-btn">
            <Download size={20} />
            App Store
          </a>
        </div>
      </div>
      <div className="phone-mockup">
        <img src="/api/placeholder/250/400" alt="Mobile app mockup" />
      </div>
    </div>
  </section>
);
export default AppSection;
