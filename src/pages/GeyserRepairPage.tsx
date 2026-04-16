import { Helmet } from "react-helmet-async";
import Breadcrumb from "@/components/sections/Breadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import NumberedSteps from "@/components/sections/NumberedSteps";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQSection from "@/components/sections/FAQSection";
import RelatedServices from "@/components/sections/RelatedServices";
import CTABanner from "@/components/sections/CTABanner";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { AlertTriangle, Droplets, ShieldCheck, Clock, Zap, Wrench, Thermometer, Flame } from "lucide-react";
import geyserRepairHero from "@/assets/geyser-repair-hero.jpg";

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "HVAC & Geysers", href: "/hvac-geyser-services-windhoek" },
  { label: "Geyser Repairs" },
];

const relatedServices = [
  { label: "Geyser Installation", href: "/hvac-geyser-services-windhoek/geyser-installation" },
  { label: "Solar Geyser Plumbing", href: "/hvac-geyser-services-windhoek/solar-geyser-plumbing" },
  { label: "Water Heater Repair", href: "/hvac-geyser-services-windhoek/water-heater-repair" },
  { label: "Burst Pipe Repair", href: "/emergency-plumbing-windhoek/burst-pipe-repair" },
];

const warningSignItems = [
  {
    icon: Droplets,
    title: "Water leaking from the geyser",
    text: "Puddles or dripping around the base of your geyser usually mean a corroded tank, failed pressure valve, or loose fitting that needs immediate attention.",
  },
  {
    icon: Thermometer,
    title: "No hot water or lukewarm water",
    text: "If your geyser isn't heating water properly, the element or thermostat has likely failed — a common repair we handle daily.",
  },
  {
    icon: AlertTriangle,
    title: "Geyser tripping the electrical board",
    text: "A geyser that keeps tripping the breaker usually has a faulty element or damaged wiring. Don't keep resetting it — call a plumber.",
  },
  {
    icon: Flame,
    title: "Strange noises from the geyser",
    text: "Popping, rumbling, or hissing sounds are caused by sediment build-up or a failing element. Left unchecked, this can shorten your geyser's lifespan.",
  },
  {
    icon: Droplets,
    title: "Rust-coloured water from hot taps",
    text: "Discoloured water when running hot taps is a sign of internal tank corrosion. It may be repairable, but it often signals the geyser is nearing end of life.",
  },
  {
    icon: AlertTriangle,
    title: "Pressure relief valve constantly dripping",
    text: "A dripping T&P valve could mean excessive pressure or a faulty valve. Either way, it needs professional inspection to prevent a dangerous situation.",
  },
];

const repairSteps = [
  {
    title: "Call us and describe the problem",
    text: "Tell us what's happening — no hot water, leaking, tripping the board — and we'll give you immediate advice and schedule the fastest available plumber.",
  },
  {
    title: "Turn off the geyser at the electrical board",
    text: "For safety, switch off the geyser's dedicated breaker. If it's leaking, also close the isolation valve on the cold water inlet to stop water flowing in.",
  },
  {
    title: "We diagnose the fault on site",
    text: "Our plumber inspects the element, thermostat, valves, anode rod, and connections to pinpoint the exact issue — and gives you a clear quote before any work starts.",
  },
  {
    title: "We carry out the repair",
    text: "Most geyser repairs — element replacements, thermostat swaps, valve replacements — are completed in a single visit with parts we carry on our van.",
  },
  {
    title: "We test and confirm everything works",
    text: "We run full hot water and pressure tests, check for leaks, and make sure your geyser is heating safely and efficiently before we leave.",
  },
];

const whyChooseItems = [
  {
    icon: Clock,
    title: "Same-Day Geyser Repairs",
    text: "No hot water is more than an inconvenience — it disrupts your entire household. We prioritise geyser repairs and aim to have yours fixed the same day you call.",
  },
  {
    icon: Zap,
    title: "Parts on the Van",
    text: "We carry the most common geyser parts — elements, thermostats, pressure valves, and anode rods — so most repairs are completed in a single visit.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Workmanship",
    text: "Every geyser repair is backed by our workmanship guarantee. If the same fault returns, we come back and fix it — no questions asked.",
  },
  {
    icon: Wrench,
    title: "All Geyser Brands Serviced",
    text: "Kwikot, Franke, Geyserwise, HeatTech — we work on all major geyser brands installed across Windhoek homes and businesses.",
  },
];

const faqItems = [
  {
    question: "How much does a geyser repair cost in Windhoek?",
    answer: "It depends on the fault. A thermostat replacement is typically less expensive than an element swap. We always provide an upfront quote after diagnosing the issue — no hidden fees or surprises.",
  },
  {
    question: "Should I repair or replace my geyser?",
    answer: "If your geyser is under 8–10 years old and the fault is a single component (element, thermostat, valve), a repair is usually the smart choice. If the tank is corroded or it's failing repeatedly, replacement is more cost-effective long-term.",
  },
  {
    question: "Can you repair my geyser today?",
    answer: "In most cases, yes. We carry common geyser parts and prioritise same-day service. Call us and we'll confirm availability for your area.",
  },
  {
    question: "Why does my geyser keep tripping the breaker?",
    answer: "The most common cause is a failed element that's shorting out. It can also be damaged wiring or a faulty thermostat. We'll diagnose the exact cause and fix it safely.",
  },
  {
    question: "Is it dangerous to use a leaking geyser?",
    answer: "Yes — a leaking geyser combines water and electricity, which is a serious safety risk. Turn it off at the electrical board immediately and call us for an urgent repair.",
  },
  {
    question: "Do you service solar geysers too?",
    answer: "Absolutely. We handle the plumbing side of solar geyser systems, including circulation pumps, valves, and connections between the solar panel and storage tank.",
  },
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
            A faulty geyser can leave your household without hot water, run up your electricity bill, or — in the worst case — become a safety hazard. Whether it's leaking, not heating, or tripping your electrical board, geyser problems need to be sorted out quickly and properly.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
            At 061 Plumbers, we handle geyser repairs across Windhoek every day. From element replacements and thermostat faults to leaking pressure valves and corroded tanks — we diagnose the problem fast, explain your options clearly, and get your hot water running again.
          </p>
        </div>
      </div>
    </section>
  );
};

const WarningSignsSection = () => {
  const { ref, visible } = useScrollReveal(0.15);
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2
          className={cn(
            "mb-4 text-center text-2xl font-extrabold text-foreground md:text-4xl transition-all duration-600 ease-out",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Signs Your Geyser Needs Repair
        </h2>
        <p
          className={cn(
            "mx-auto mb-10 max-w-2xl text-center text-muted-foreground transition-all duration-600 ease-out delay-100",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Don't ignore these warning signs — a small geyser fault can quickly become an expensive problem:
        </p>
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {warningSignItems.map((item, i) => (
            <div
              key={i}
              className={cn(
                "rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 ease-out hover:shadow-md",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: visible ? `${100 + i * 80}ms` : "0ms" }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-1 font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GeyserRepairPage = () => (
  <>
    <Helmet>
      <title>Geyser Repairs Windhoek | Same-Day Service | 061 Plumbers</title>
      <meta
        name="description"
        content="Geyser not heating? Leaking or tripping the board? 061 Plumbers offers same-day geyser repairs across Windhoek. All brands serviced, parts on the van. Call +264 85 787 5100."
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Geyser Repairs — 061 Plumbers",
          description: "Same-day geyser repair service in Windhoek, Namibia. Element replacements, thermostat repairs, pressure valve fixes.",
          provider: {
            "@type": "LocalBusiness",
            name: "061 Plumbers",
            telephone: "+264857875100",
            areaServed: { "@type": "City", name: "Windhoek" },
          },
          serviceType: "Geyser Repair",
        })}
      </script>
    </Helmet>

    <Breadcrumb items={breadcrumb} />

    <HeroSection
      headline="Geyser Repairs in Windhoek — Fast, Reliable, Same-Day Service"
      subheadline="No hot water? Geyser leaking or tripping the board? Call 061 Plumbers — we'll diagnose the problem, explain your options, and get it fixed today."
      primaryLabel="Call Now — +264 85 787 5100"
      primaryHref="tel:+264857875100"
      secondaryLabel="Get a Free Quote"
      secondaryHref="/contact"
      backgroundImage={geyserRepairHero}
    />

    <IntroSection />

    <WarningSignsSection />

    <NumberedSteps
      label="How We Handle Geyser Repairs"
      intro="From your first call to hot water flowing again — here's our process:"
      steps={repairSteps}
    />

    <WhyChooseUs
      heading="Why Windhoek Trusts 061 Plumbers for Geyser Repairs"
      items={whyChooseItems}
    />

    <FAQSection
      heading="Geyser Repairs — Frequently Asked Questions"
      items={faqItems}
    />

    <RelatedServices links={relatedServices} />

    <CTABanner
      heading="Geyser Problems? We'll Fix It Today."
      text="Don't go another day without hot water. Call 061 Plumbers now for a same-day geyser repair — honest pricing, guaranteed workmanship, all brands serviced."
      phoneLabel="Call +264 85 787 5100"
      secondaryLabel="Get a Free Quote"
    />
  </>
);

export default GeyserRepairPage;
