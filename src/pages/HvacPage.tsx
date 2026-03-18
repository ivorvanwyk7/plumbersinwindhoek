import HeroSection from "@/components/sections/HeroSection";
import IntroBlock from "@/components/sections/IntroBlock";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WarningSignsList from "@/components/sections/WarningSignsList";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTABanner from "@/components/sections/CTABanner";

const hvacServices = [
  { label: "[GEYSER INSTALLATION]", href: "/hvac-geyser-services-windhoek/geyser-installation" },
  { label: "[GEYSER REPAIRS]", href: "/hvac-geyser-services-windhoek/geyser-repairs" },
  { label: "[SOLAR GEYSER PLUMBING]", href: "/hvac-geyser-services-windhoek/solar-geyser-plumbing" },
  { label: "[WATER HEATER INSTALLATION]", href: "/hvac-geyser-services-windhoek/water-heater-installation" },
  { label: "[WATER HEATER REPAIR]", href: "/hvac-geyser-services-windhoek/water-heater-repair" },
  { label: "[WATER TANK INSTALLATION]", href: "/hvac-geyser-services-windhoek/water-tank-installation" },
  { label: "[WATER TANK REPAIR]", href: "/hvac-geyser-services-windhoek/water-tank-repair" },
];

const HvacPage = () => (
  <>
    <HeroSection />
    <IntroBlock />
    <ServicesGrid cards={hvacServices} />
    <WarningSignsList count={7} />
    <WhyChooseUs count={5} />
    <CTABanner />
  </>
);

export default HvacPage;
