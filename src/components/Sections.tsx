import AppSection from "./AppSection";
import Features from "./Features";
import HeroBanner from "./HeroBanner";
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
