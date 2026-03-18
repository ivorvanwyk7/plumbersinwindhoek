import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

const homeServices = [
  { label: "[HVAC & GEYSERS]", href: "/hvac-geyser-services-windhoek" },
  { label: "[DRAINAGE]", href: "/drainage-services-windhoek" },
  { label: "[KITCHEN PLUMBING]", href: "/kitchen-plumbing-windhoek" },
  { label: "[BATHROOM RENOVATIONS]", href: "/bathroom-renovations-windhoek" },
  { label: "[EMERGENCY PLUMBING]", href: "/emergency-plumbing-windhoek" },
];

const HomePage = () => (
  <>
    <HeroSection
      primaryLabel="[PRIMARY CTA]"
      primaryHref="/contact"
      secondaryLabel="[EMERGENCY CTA]"
      secondaryHref="/emergency-plumbing-windhoek"
    />
    <TrustBar />
    <ServicesGrid cards={homeServices} />
    <WhyChooseUs count={5} />
    <Testimonials />
    <CTABanner />
  </>
);

export default HomePage;
