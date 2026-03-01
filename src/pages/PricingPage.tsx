import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingSection from "@/components/landing/PricingSection";

const PricingPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <PricingSection />
    </div>
    <Footer />
  </div>
);

export default PricingPage;
