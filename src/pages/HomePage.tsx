import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import JsonLd from "@/components/JsonLd";
import heroImage from "@/assets/hero-plumber.jpg";
import windhoekImage from "@/assets/windhoek-cityscape.jpg";
import serviceGeyser from "@/assets/service-geyser.jpg";
import serviceDrainage from "@/assets/service-drainage.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";
import serviceBathroom from "@/assets/service-bathroom.jpg";
import serviceEmergency from "@/assets/service-emergency.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const homeServices = [
  {
    label: "HVAC & Geyser Services",
    href: "/hvac-geyser-services-windhoek",
    description: "Water heater and geyser installation, repairs, tank replacement, and solar geyser plumbing. We keep your hot water flowing — reliably and efficiently.",
    image: serviceGeyser,
  },
  {
    label: "Drainage Services",
    href: "/drainage-services-windhoek",
    description: "Blocked drain? Sewer backup? We handle drain cleaning, sewer repairs, outdoor plumbing, and toilet unblocking across Windhoek.",
    image: serviceDrainage,
  },
  {
    label: "Kitchen Plumbing",
    href: "/kitchen-plumbing-windhoek",
    description: "New tap installations and tap repairs for your kitchen — done neatly and quickly so you can get back to cooking.",
    image: serviceKitchen,
  },
  {
    label: "Bathroom Renovations",
    href: "/bathroom-renovations-windhoek",
    description: "Shower installation, toilet fitting, bath taps, and full bathroom plumbing renovations. We make your bathroom work beautifully.",
    image: serviceBathroom,
  },
  {
    label: "Emergency Plumbing — 24/7",
    href: "/emergency-plumbing-windhoek",
    description: "Burst pipe? Major leak? Water everywhere? Don't panic — call 061 Plumbers. We're on call around the clock for Windhoek emergencies.",
    image: serviceEmergency,
  },
];

const introPoints = [
  "24/7 Emergency Response",
  "Free Quotations",
  "Guaranteed Workmanship",
  "Serving All of Windhoek",
];

const IntroSection = () => {
  const { ref, visible } = useScrollReveal(0.2);
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "mx-auto max-w-3xl text-center transition-all duration-700 ease-out",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            At 061 Plumbers, we've been keeping Windhoek homes running smoothly for years. Whether it's a dripping tap keeping you up at night or a geyser that's given up on a cold morning, our friendly team shows up fast, gets the job done right, and leaves your home exactly as we found it — just with the plumbing sorted.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {introPoints.map((point, i) => (
              <span
                key={point}
                className={cn(
                  "rounded-full border border-accent/20 bg-accent/5 px-5 py-2.5 text-sm font-semibold text-accent transition-all duration-500 ease-out",
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}
                style={{ transitionDelay: visible ? `${200 + i * 80}ms` : "0ms" }}
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => (
  <>
    <Helmet>
      <title>061 Plumbers — Your Trusted Plumbers in Windhoek | Available 24/7</title>
      <meta name="description" content="Got a plumbing problem in Windhoek? 061 Plumbers is here to help. From leaky taps and blocked drains to emergency burst pipes — available 24/7. Call +264 85 787 5100." />
    </Helmet>
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "061 Plumbers",
        url: "https://061plumbers.com",
      }}
    />

    <HeroSection
      backgroundImage={heroImage}
      primaryLabel="Call Us Now — +264 85 787 5100"
      primaryHref="tel:+264857875100"
      secondaryLabel="Get a Free Quote"
      secondaryHref="/contact"
    />
    <TrustBar />
    <IntroSection />
    <ServicesGrid
      cards={homeServices}
      heading="Plumbing Services for Windhoek Homeowners"
      intro="From routine repairs to full installations, 061 Plumbers handles it all. Here's a look at what we do:"
    />
    <WhyChooseUs />
    <Testimonials />
    <CTABanner backgroundImage={windhoekImage} />
  </>
);

export default HomePage;
