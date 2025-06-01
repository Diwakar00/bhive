import {
  Armchair,
  BadgeIndianRupee,
  CalendarHeart,
  Coffee,
  Dumbbell,
  History,
  LandPlot,
  Wifi,
} from "lucide-react";
import "./Features.css";

const features = [
  {
    icon: <CalendarHeart className="section-icon" />,
    title: "Community Events",
  },
  {
    icon: <Dumbbell className="section-icon" />,
    title: "Gym Facilities",
  },
  {
    icon: <Wifi className="section-icon" />,
    title: "High-Speed Wifi",
  },
  {
    icon: <Coffee className="section-icon" />,
    title: "Cafe & Tea Bar",
  },
  {
    icon: <BadgeIndianRupee className="section-icon" />,
    title: "Affordable",
  },
  {
    icon: <Armchair className="section-icon" />,
    title: "Comfort Lounges",
  },
  {
    icon: <History className="section-icon" />,
    title: "Quick Booking",
  },
  {
    icon: <LandPlot className="section-icon" />,
    title: "Sports Area",
  },
];

const Features: React.FC = () => (
  <section className="section">
    <h2>Why Choose us?</h2>
    <div className="features-grid">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <>
            {feature.icon}
            <p>{feature.title}</p>
          </>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
