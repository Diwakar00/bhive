import AppSection from "./AppSection/AppSection";
import Features from "./Features/Features";
import HeroBanner from "./HeroBanner/HeroBanner";
import Offices from "./Offices";

const Sections: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <Features />
      <Offices />
      <AppSection />
    </>
  );
};

export default Sections;
