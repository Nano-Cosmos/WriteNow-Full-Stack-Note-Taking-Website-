import PublicNavbar from "../components/PublicNavbar";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import FeaturesSection from "../components/FeatureSection";
import BenefitsSection from "../components/BenefitsSection";
import SecurityAndPrivacySection from "../components/SecurityAndPrivacySection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <PublicNavbar />
      <HeroSection/>
      <ProblemSection/>
      <FeaturesSection/>
      <BenefitsSection/>
      <SecurityAndPrivacySection/>
      <Footer/>
    </>
  );
};

export default LandingPage;
