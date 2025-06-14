import "./HeroBanner.css";
const HeroBanner: React.FC = () => (
  <section className="hero">
    <div className="hero-content">
      <div className="image-container">
        <img src="/assets/background.png" alt="Background" />
        <div className="overlay-text">
          <h1>
            Host your meeting with world-class amenities. Starting at
            <span className="price"> ₹199/-!</span>
          </h1>
        </div>
      </div>

      <div className="video-container">
        <video autoPlay={false} loop={false}>
          <source src="/assets/Coworking video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
);
export default HeroBanner;
