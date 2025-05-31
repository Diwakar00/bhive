const HeroBanner: React.FC = () => (
  <section className="hero">
    <div className="hero-content">
      <div className="image-container">
        <img src="src/assets/background.png" alt="Background" />
        <div className="overlay-text">
          <h1>
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="price">₹199/-!</span>
          </h1>
        </div>
      </div>

      <div className="video-container">
        <video autoPlay={true} loop={false}>
          <source src="src/assets/Coworking video.mp4s" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
);
export default HeroBanner;
