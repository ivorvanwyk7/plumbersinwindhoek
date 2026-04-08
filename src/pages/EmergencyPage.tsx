import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import NumberedSteps from "@/components/sections/NumberedSteps";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CoverageArea from "@/components/sections/CoverageArea";
import CTABanner from "@/components/sections/CTABanner";
import { Wrench, Droplets, PipetteIcon, Disc, ShowerHead } from "lucide-react";
import { Clock, Zap, FileText, Shield, Smile } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import emergencyHero from "@/assets/emergency-hero.jpg";

const emergencyServices = [
  {
    label: "Burst Pipe Repair",
    href: "/emergency-plumbing-windhoek/burst-pipe-repair",
    description: "A burst pipe can flood your home in minutes. Call us immediately and we'll get there fast to stop the flow, repair the damage, and protect your property from further water damage.",
    icon: Droplets,
  },
  {
    label: "Plumbing Leak Repair",
    href: "/emergency-plumbing-windhoek/leak-repair",
    description: "Even a slow leak can cause serious structural damage and mould over time. Whether it's a hidden leak behind a wall or a dripping joint under the sink, we find it and fix it properly.",
    icon: PipetteIcon,
  },
  {
    label: "Pipe Repair",
    href: "/emergency-plumbing-windhoek/pipe-repair",
    description: "Cracked, corroded, or damaged pipes? We repair and replace all types of plumbing pipes — quickly and with lasting results so the problem doesn't come back.",
    icon: Wrench,
  },
  {
    label: "Tap Repair",
    href: "/services/tap-repair",
    description: "A tap that won't turn off wastes water and drives up your bill. We carry the parts to fix most taps on the spot, so you're not left watching water run down the drain.",
    icon: Disc,
  },
  {
    label: "Toilet Unblocking",
    href: "/services/toilet-unblocking",
    description: "A blocked toilet is one of the most urgent household plumbing problems. Our team unblocks toilets fast — no mess, no fuss — and checks the cause to prevent it happening again.",
    icon: ShowerHead,
  },
];

const emergencySteps = [
  {
    title: "Turn off your main water supply",
    text: "The stopcock is usually under the kitchen sink or near your water meter. This stops more water from flowing and causing further damage.",
  },
  {
    title: "Turn off your geyser or water heater",
    text: "If the leak is near it or the water has been cut off — running a heater without water can damage the element.",
  },
  {
    title: "Move valuables away from the affected area",
    text: "Move electronics, furniture, and important items away from the water if it's safe to do so.",
  },
  {
    title: "Take photos of the damage",
    text: "Document everything for insurance purposes before any cleanup begins.",
  },
  {
    title: "Call 061 Plumbers on +264 85 787 5100",
    text: "We'll guide you through anything else while we're on our way.",
  },
];

const whyChooseItems = [
  {
    icon: Clock,
    title: "Genuinely Available 24/7",
    text: "When we say 24/7, we mean it. Day, night, weekends, public holidays — there's always someone at the other end of the line ready to help.",
  },
  {
    icon: Zap,
    title: "Fast Response Across All of Windhoek",
    text: "We're based in Windhoek and know the city well. Whether you're in Windhoek North, the Southern suburbs, or anywhere in between, we get to you quickly.",
  },
  {
    icon: FileText,
    title: "Honest, Upfront Pricing",
    text: "We'll give you a clear quote before we start. No surprise charges when the job is done — just fair, transparent pricing you can trust.",
  },
  {
    icon: Shield,
    title: "Guaranteed Workmanship",
    text: "Every emergency repair we carry out is backed by our workmanship guarantee. If something isn't right, we come back and sort it — simple as that.",
  },
  {
    icon: Smile,
    title: "Friendly, Calm Under Pressure",
    text: "Emergencies are stressful enough. Our team is professional, reassuring, and focused on solving the problem as quickly as possible so you can breathe easy again.",
  },
];

const coverageAreas = [
  "Windhoek North",
  "Windhoek East",
  "Windhoek West",
  "Windhoek Central",
  "Southern suburbs and surrounding areas",
];

const IntroSection = () => {
  const { ref, visible } = useScrollReveal(0.15);
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "mx-auto max-w-3xl text-center transition-all duration-700 ease-out",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Plumbing emergencies have terrible timing. A burst pipe doesn't wait for Monday morning, and a blocked toilet won't fix itself overnight. That's exactly why 061 Plumbers operates 24 hours a day, 7 days a week — including weekends and public holidays — so that Windhoek homeowners always have someone reliable to call.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
            We arrive quickly, assess the situation honestly, and get to work straight away. No call-out fees hidden in the fine print, no waiting days for a callback. Just fast, friendly plumbing help when you need it most.
          </p>
        </div>
      </div>
    </section>
  );
};

const EmergencyPage = () => (
  <>
    <Helmet>
      <title>Emergency Plumber Windhoek | 24/7 Call-Out | 061 Plumbers</title>
      <meta name="description" content="Need an emergency plumber in Windhoek? 061 Plumbers is available 24/7 for burst pipes, leaks, blocked toilets and more. Call +264 85 787 5100 now — we respond fast." />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EmergencyService",
          name: "061 Plumbers — Emergency Plumbing",
          description: "24/7 emergency plumber in Windhoek, Namibia. Burst pipes, leaks, blocked toilets and more.",
          telephone: "+264857875100",
          areaServed: {
            "@type": "City",
            name: "Windhoek",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        })}
      </script>
    </Helmet>

    <HeroSection
      emergency
      headline="Emergency Plumber in Windhoek — We're On Call 24/7"
      subheadline="Burst pipe? Major leak? Blocked toilet at midnight? Don't stress — 061 Plumbers is available around the clock, every single day. One call and we're on our way."
      primaryLabel="Call Now — +264 85 787 5100"
      primaryHref="tel:+264857875100"
      secondaryLabel="Get a Free Quote"
      secondaryHref="/contact"
      backgroundImage={emergencyHero}
    />

    <IntroSection />

    <ServicesGrid
      cards={emergencyServices}
      heading="Our Emergency Plumbing Services in Windhoek"
      intro="Here's what we handle at any hour of the day or night:"
    />

    <NumberedSteps
      label="What To Do When You Have a Plumbing Emergency"
      intro="While you wait for us to arrive, here are a few steps that can help limit the damage:"
      steps={emergencySteps}
    />

    <WhyChooseUs
      heading="Why Windhoek Homeowners Trust 061 Plumbers in an Emergency"
      items={whyChooseItems}
    />

    <CoverageArea
      heading="Emergency Plumbing Across All of Windhoek"
      intro="061 Plumbers covers the entire Windhoek area, including:"
      areas={coverageAreas}
    />

    <CTABanner
      heading="Plumbing Emergency in Windhoek? Call Us Right Now."
      text="Every minute counts when water is going where it shouldn't. Call 061 Plumbers now and get a friendly, experienced plumber on the way to your home — any time, day or night."
      phoneLabel="Call +264 85 787 5100"
      secondaryLabel="Get a Free Quote"
    />
  </>
);

export default EmergencyPage;
