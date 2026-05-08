import "./home.css";
import FeaturesSection from "./components/FeaturesSection";
import GridTemplatesSection from "./components/GridTemplatesSection";
import StatSection from "./components/StatSection";
import HeroSection from "./components/HeroSection";
import CTASection from "./components/CTASection";

const HomePage = () => {

  return (
    <div className={"home-page bg-white"}>
      {/* Hero section -----------------------------------*/}
      <HeroSection />

      {/* Template grid section ------------------------- */}
      <GridTemplatesSection />

      {/* statistics section ---------------------------- */}
      <StatSection />

      {/* features section ------------------------------ */}
      <FeaturesSection />

      {/* CTA Section ----------------------------------- */}
      <CTASection />
    </div>
  );
};

export default HomePage;