import HeroSection from "@/components/sections/HeroSection";
import IntroBlock from "@/components/sections/IntroBlock";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTABanner from "@/components/sections/CTABanner";

const bathroomServices = [
  { label: "[SHOWER INSTALLATION]", href: "/bathroom-renovations-windhoek/shower-installation" },
  { label: "[SHOWER REPAIR]", href: "/bathroom-renovations-windhoek/shower-repair" },
  { label: "[TOILET INSTALLATION]", href: "/bathroom-renovations-windhoek/toilet-installation" },
  { label: "[TOILET REPAIR]", href: "/bathroom-renovations-windhoek/toilet-repair" },
  { label: "[TAP INSTALLATION]", href: "/services/tap-installation" },
  { label: "[TAP REPAIR]", href: "/services/tap-repair" },
];

const BathroomPage = () => (
  <>
    <HeroSection />
    <IntroBlock />
    <ServicesGrid cards={bathroomServices} />
    <WhyChooseUs count={5} />
    <CTABanner />
  </>
);

export default BathroomPage;
