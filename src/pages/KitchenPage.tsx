import HeroSection from "@/components/sections/HeroSection";
import IntroBlock from "@/components/sections/IntroBlock";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTABanner from "@/components/sections/CTABanner";

const kitchenServices = [
  { label: "[TAP INSTALLATION]", href: "/services/tap-installation" },
  { label: "[TAP REPAIR]", href: "/services/tap-repair" },
];

const KitchenPage = () => (
  <>
    <HeroSection />
    <IntroBlock />
    <ServicesGrid cards={kitchenServices} />
    <WhyChooseUs count={5} />
    <CTABanner />
  </>
);

export default KitchenPage;
