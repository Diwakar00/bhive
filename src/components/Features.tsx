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

const features = [
  {
    icon: <CalendarHeart size={16} className="section-icon" />,
    title: "Community Events",
  },
  {
    icon: <Dumbbell size={16} className="section-icon" />,
    title: "Gym Facilities",
  },
  {
    icon: <Wifi size={16} className="section-icon" />,
    title: "High-Speed Wifi",
  },
  {
    icon: <Coffee size={16} className="section-icon" />,
    title: "Cafe & Tea Bar",
  },
  {
    icon: <BadgeIndianRupee size={16} className="section-icon" />,
    title: "Affordable",
  },
  {
    icon: <Armchair size={16} className="section-icon" />,
    title: "Comfort Lounges",
  },
  {
    icon: <History size={16} className="section-icon" />,
    title: "Quick Booking",
  },
  {
    icon: <LandPlot size={16} className="section-icon" />,
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
