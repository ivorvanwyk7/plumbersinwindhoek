import HeroSection from "@/components/sections/HeroSection";
import IntroBlock from "@/components/sections/IntroBlock";
import ServicesGrid from "@/components/sections/ServicesGrid";
import NumberedSteps from "@/components/sections/NumberedSteps";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CoverageArea from "@/components/sections/CoverageArea";
import CTABanner from "@/components/sections/CTABanner";

const emergencyServices = [
  { label: "[PIPE REPAIR]", href: "/emergency-plumbing-windhoek/pipe-repair" },
  { label: "[LEAK REPAIR]", href: "/emergency-plumbing-windhoek/leak-repair" },
  { label: "[BURST PIPE REPAIR]", href: "/emergency-plumbing-windhoek/burst-pipe-repair" },
  { label: "[TAP REPAIR]", href: "/services/tap-repair" },
  { label: "[TOILET UNBLOCKING]", href: "/services/toilet-unblocking" },
];

const EmergencyPage = () => (
  <>
    <HeroSection emergency />
    <IntroBlock />
    <ServicesGrid cards={emergencyServices} />
    <NumberedSteps count={5} />
    <WhyChooseUs count={5} />
    <CoverageArea />
    <CTABanner />
  </>
);

export default EmergencyPage;
