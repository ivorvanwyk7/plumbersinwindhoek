import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import { Flame, Droplets, CookingPot, Bath, AlertTriangle } from "lucide-react";

const homeServices = [
  {
    label: "HVAC & Geyser Services",
    href: "/hvac-geyser-services-windhoek",
    description: "Water heater and geyser installation, repairs, tank replacement, and solar geyser plumbing. We keep your hot water flowing — reliably and efficiently.",
    icon: Flame,
  },
  {
    label: "Drainage Services",
    href: "/drainage-services-windhoek",
    description: "Blocked drain? Sewer backup? We handle drain cleaning, sewer repairs, outdoor plumbing, and toilet unblocking across Windhoek.",
    icon: Droplets,
  },
  {
    label: "Kitchen Plumbing",
    href: "/kitchen-plumbing-windhoek",
    description: "New tap installations and tap repairs for your kitchen — done neatly and quickly so you can get back to cooking.",
    icon: CookingPot,
  },
  {
    label: "Bathroom Renovations",
    href: "/bathroom-renovations-windhoek",
    description: "Shower installation, toilet fitting, bath taps, and full bathroom plumbing renovations. We make your bathroom work beautifully.",
    icon: Bath,
  },
  {
    label: "Emergency Plumbing — 24/7",
    href: "/emergency-plumbing-windhoek",
    description: "Burst pipe? Major leak? Water everywhere? Don't panic — call 061 Plumbers. We're on call around the clock for Windhoek emergencies.",
    icon: AlertTriangle,
  },
];

const introPoints = [
  "24/7 Emergency Response",
  "Free Quotations",
  "Guaranteed Workmanship",
  "Serving All of Windhoek",
];

const HomePage = () => (
  <>
    <HeroSection
      primaryLabel="Call Us Now — +264 85 787 5100"
      primaryHref="tel:+264857875100"
      secondaryLabel="Get a Free Quote"
      secondaryHref="/contact"
    />
    <TrustBar />

    {/* Introduction */}
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-lg text-muted-foreground">
            At 061 Plumbers, we've been keeping Windhoek homes running smoothly for years. Whether it's a dripping tap keeping you up at night or a geyser that's given up on a cold morning, our friendly team shows up fast, gets the job done right, and leaves your home exactly as we found it — just with the plumbing sorted.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {introPoints.map((point) => (
              <span key={point} className="rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    <ServicesGrid
      cards={homeServices}
      heading="Plumbing Services for Windhoek Homeowners"
      intro="From routine repairs to full installations, 061 Plumbers handles it all. Here's a look at what we do:"
    />
    <WhyChooseUs />
    <Testimonials />
    <CTABanner />
  </>
);

export default HomePage;
