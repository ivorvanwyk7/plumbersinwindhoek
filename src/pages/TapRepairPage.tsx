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
import { AlertTriangle, Droplets, ShieldCheck, Clock, Zap, Wrench } from "lucide-react";
import tapRepairHero from "@/assets/tap-repair-hero.jpg";

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Kitchen Plumbing", href: "/kitchen-plumbing-windhoek" },
  { label: "Tap Repair" },
];

const relatedServices = [
  { label: "Tap Installation", href: "/services/tap-installation" },
  { label: "Kitchen Plumbing", href: "/kitchen-plumbing-windhoek" },
  { label: "Leak Repair", href: "/emergency-plumbing-windhoek/leak-repair" },
  { label: "Bathroom Renovations", href: "/bathroom-renovations-windhoek" },
];

const warningSignItems = [
  {
    icon: Droplets,
    title: "Constant dripping",
    text: "A tap that drips even when fully closed is wasting water and money. A worn washer, cartridge, or valve seat is usually to blame.",
  },
  {
    icon: AlertTriangle,
    title: "Difficulty turning the handle",
    text: "If your tap is stiff, squeaky, or hard to turn, the internal components are worn or corroded and need replacing before the tap seizes completely.",
  },
  {
    icon: Droplets,
    title: "Low water pressure from one tap",
    text: "If only one tap has weak flow while others are fine, the aerator may be clogged or internal parts are restricting flow.",
  },
  {
    icon: AlertTriangle,
    title: "Water leaking from the base",
    text: "Water pooling around the base of your tap means the O-ring or internal seal has failed — left unattended, it can damage your countertop or cabinet.",
  },
  {
    icon: Droplets,
    title: "Rusty or discoloured water",
    text: "Brown or orange water from a specific tap suggests internal corrosion. The tap likely needs replacing before it contaminates your drinking water.",
  },
  {
    icon: AlertTriangle,
    title: "Strange noises when turning on",
    text: "Banging, whistling, or chattering sounds indicate a loose or damaged washer, high water pressure, or worn valve components.",
  },
];

const stepsData = [
  {
    title: "Turn off the water supply",
    text: "Locate the isolation valve under the sink and turn it clockwise to stop water flow. If there's no isolation valve, turn off the mains.",
  },
  {
    title: "Check if the problem is isolated",
    text: "Test other taps in the house. If only one tap is affected, the issue is with that tap's internal parts — not your plumbing system.",
  },
  {
    title: "Don't force a stiff tap",
    text: "Forcing a stiff handle can snap the spindle or crack the tap body, turning a simple repair into a full replacement.",
  },
  {
    title: "Place a towel under the tap",
    text: "If the tap is leaking from the base, put a towel or small container underneath to protect your countertop while you wait for the plumber.",
  },
  {
    title: "Call 061 Plumbers on +264 85 787 5100",
    text: "We'll diagnose the problem, carry the right replacement parts, and have your tap working properly again — usually in a single visit.",
  },
];

const whyChooseItems = [
  {
    icon: Clock,
    title: "Fast Response, Same-Day Repairs",
    text: "A dripping tap won't fix itself. We prioritise tap repairs and aim to get a plumber to you the same day you call — often within hours.",
  },
  {
    icon: Zap,
    title: "We Carry Common Parts",
    text: "Our vans are stocked with washers, cartridges, O-rings, and spindles for most tap brands — so we can usually fix your tap in one visit.",
  },
  {
    icon: ShieldCheck,
    title: "Honest Advice on Repair vs Replace",
    text: "We won't push you to replace a tap that just needs a new washer. And if the tap is beyond repair, we'll explain why and quote fairly for a replacement.",
  },
  {
    icon: Wrench,
    title: "All Tap Types & Brands",
    text: "Mixer taps, pillar taps, ball valves, ceramic disc — we repair all types and brands commonly found in Windhoek kitchens and bathrooms.",
  },
];

const faqItems = [
  {
    question: "How much does a tap repair cost in Windhoek?",
    answer: "Most tap repairs cost between N$250 and N$600, depending on the type of tap and the parts needed. We'll give you a clear quote before starting any work.",
  },
  {
    question: "Can a dripping tap be repaired, or does it need replacing?",
    answer: "In most cases, a dripping tap can be repaired by replacing the washer, cartridge, or O-ring. We'll always try to repair first. If the tap body is cracked or corroded beyond repair, we'll recommend replacement and explain your options.",
  },
  {
    question: "How much water does a dripping tap waste?",
    answer: "A tap dripping once per second wastes over 20,000 litres per year — that's real money on your water bill and a lot of wasted water in a dry climate like Windhoek's.",
  },
  {
    question: "Do you repair mixer taps?",
    answer: "Yes. We repair single-lever mixer taps, dual-handle mixers, and pull-out spray taps. Most mixer tap issues are caused by a worn ceramic cartridge, which we carry in stock.",
  },
  {
    question: "Can I repair a tap myself?",
    answer: "Simple washer replacements are doable if you're handy. But if you're not sure which part is failing, or if the tap has a ceramic cartridge or unusual mechanism, it's best to call a plumber to avoid making the problem worse.",
  },
  {
    question: "How long does a tap repair take?",
    answer: "Most tap repairs take 30–60 minutes. If we need to source a specific part, we'll let you know upfront and schedule a return visit at no extra call-out charge.",
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
            A dripping tap might seem like a minor annoyance, but it wastes thousands of litres of water a year and often signals worn internal parts that will only get worse. Whether it's a kitchen mixer tap that won't stop dripping or a bathroom tap that's seized up, 061 Plumbers can fix it.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
            We repair all types of taps across Windhoek — from older pillar taps to modern ceramic disc mixers. Our plumbers carry the most common replacement parts, so most repairs are completed in a single visit.
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
          Signs Your Tap Needs Repair
        </h2>
        <p
          className={cn(
            "mx-auto mb-10 max-w-2xl text-center text-muted-foreground transition-all duration-600 ease-out delay-100",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Don't ignore these common signs — a small tap problem now can lead to water damage or a burst fitting later:
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
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10">
                <item.icon className="h-5 w-5 text-destructive" />
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

const TapRepairPage = () => (
  <>
    <Helmet>
      <title>Tap Repair Windhoek | Fix Dripping & Leaking Taps | 061 Plumbers</title>
      <meta
        name="description"
        content="Dripping or leaking tap in Windhoek? 061 Plumbers repairs all tap types — mixer, pillar, ceramic disc. Same-day service, honest pricing. Call +264 85 787 5100."
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Tap Repair — 061 Plumbers",
          description: "Professional tap repair service in Windhoek, Namibia. We fix dripping, leaking, and stiff taps — all brands and types.",
          provider: {
            "@type": "LocalBusiness",
            name: "061 Plumbers",
            telephone: "+264857875100",
            areaServed: { "@type": "City", name: "Windhoek" },
          },
          serviceType: "Tap Repair",
        })}
      </script>
    </Helmet>

    <Breadcrumb items={breadcrumb} />

    <HeroSection
      headline="Tap Repair in Windhoek — Stop the Drip Today"
      subheadline="Dripping tap driving you mad? Whether it's a worn washer, a seized handle, or a leak at the base — 061 Plumbers will fix it fast, fix it right, and save you water."
      primaryLabel="Call Now — +264 85 787 5100"
      primaryHref="tel:+264857875100"
      secondaryLabel="Get a Free Quote"
      secondaryHref="/contact"
      backgroundImage={tapRepairHero}
    />

    <IntroSection />

    <WarningSignsSection />

    <NumberedSteps
      label="What To Do When Your Tap Is Leaking"
      intro="Before you call us, here's how to minimise damage and water waste:"
      steps={stepsData}
    />

    <WhyChooseUs
      heading="Why Windhoek Trusts 061 Plumbers for Tap Repairs"
      items={whyChooseItems}
    />

    <FAQSection
      heading="Tap Repair — Frequently Asked Questions"
      items={faqItems}
    />

    <RelatedServices links={relatedServices} />

    <CTABanner
      heading="Don't Let That Tap Keep Dripping."
      text="Every drip is wasted water and money. Call 061 Plumbers now for a fast, affordable tap repair anywhere in Windhoek."
      phoneLabel="Call +264 85 787 5100"
      secondaryLabel="Get a Free Quote"
    />
  </>
);

export default TapRepairPage;
