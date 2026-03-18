import HeroSection from "@/components/sections/HeroSection";
import IntroBlock from "@/components/sections/IntroBlock";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTABanner from "@/components/sections/CTABanner";

const drainageServices = [
  { label: "[DRAIN CLEANING]", href: "/drainage-services-windhoek/drain-cleaning" },
  { label: "[SEWER CLEANING]", href: "/drainage-services-windhoek/sewer-cleaning" },
  { label: "[SEWER REPAIR]", href: "/drainage-services-windhoek/sewer-repair" },
  { label: "[OUTDOOR PLUMBING REPAIR]", href: "/drainage-services-windhoek/outdoor-plumbing-repair" },
  { label: "[TOILET UNBLOCKING]", href: "/services/toilet-unblocking" },
];

const DrainagePage = () => (
  <>
    <HeroSection />
    <IntroBlock />
    <ServicesGrid cards={drainageServices} />
    <WhyChooseUs count={5} />
    <CTABanner />
  </>
);

export default DrainagePage;
