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
import { Droplets, Eye, ShieldCheck, Clock, Zap, Wrench, Search, AlertTriangle } from "lucide-react";
import leakRepairHero from "@/assets/leak-repair-hero.jpg";

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Emergency Plumbing", href: "/emergency-plumbing-windhoek" },
  { label: "Leak Repair" },
];

const relatedServices = [
  { label: "Burst Pipe Repair", href: "/emergency-plumbing-windhoek/burst-pipe-repair" },
  { label: "Pipe Repair", href: "/emergency-plumbing-windhoek/pipe-repair" },
  { label: "Tap Repair", href: "/services/tap-repair" },
  { label: "Drain Cleaning", href: "/drainage-services-windhoek/drain-cleaning" },
];

const warningSignItems = [
  {
    icon: Droplets,
    title: "Damp or discoloured patches on walls",
    text: "Wet spots, peeling paint, or dark stains on walls and ceilings often indicate a hidden leak behind the surface.",
  },
  {
    icon: AlertTriangle,
    title: "Musty or mouldy smell",
    text: "Persistent damp odours — especially in bathrooms, kitchens, or closed rooms — usually mean moisture is trapped somewhere it shouldn't be.",
  },
  {
    icon: Eye,
    title: "Water meter running when nothing is on",
    text: "Turn off all taps and appliances, then check your water meter. If it's still ticking, you likely have a leak somewhere in the system.",
  },
  {
    icon: Droplets,
    title: "Higher-than-normal water bills",
    text: "A sudden or gradual increase in your water bill without a change in usage is one of the most common signs of an undetected leak.",
  },
  {
    icon: AlertTriangle,
    title: "Sound of running water when pipes should be idle",
    text: "If you can hear water moving through pipes when nothing is being used, there's a good chance water is escaping somewhere.",
  },
  {
    icon: Search,
    title: "Cracked or lifting tiles and flooring",
    text: "Persistent moisture beneath floors can loosen adhesive and cause tiles to crack, lift, or feel spongy underfoot.",
  },
];

const actionSteps = [
  {
    title: "Check if the leak is visible or hidden",
    text: "Look under sinks, around toilets, near the geyser, and along exposed pipes. If you can see the source, place a bucket or towel underneath.",
  },
  {
    title: "Turn off the water supply to the affected area",
    text: "If there's an isolation valve near the leak, close it. Otherwise, shut off the main stopcock to prevent further water waste and damage.",
  },
  {
    title: "Turn off electrical appliances nearby",
    text: "Water and electricity are a dangerous combination. If water is near electrical outlets or appliances, switch off the power at the board.",
  },
  {
    title: "Document the damage with photos",
    text: "Take photos of the affected area and any water damage for insurance purposes before any cleanup or repair begins.",
  },
  {
    title: "Call 061 Plumbers on +264 85 787 5100",
    text: "Whether it's a slow drip or a serious leak, we'll get a plumber to you quickly to find the source, fix the problem, and prevent further damage.",
  },
];

const whyChooseItems = [
  {
    icon: Search,
    title: "Expert Leak Detection",
    text: "Many leaks are hidden behind walls, under floors, or underground. We use proven detection methods to find the exact source — minimising unnecessary damage to your home.",
  },
  {
    icon: Clock,
    title: "Available 24/7 for Emergencies",
    text: "A serious leak won't wait, and neither should you. Our team is available around the clock to respond to urgent leaks across all of Windhoek.",
  },
  {
    icon: Wrench,
    title: "Permanent Fixes, Not Temporary Patches",
    text: "We don't just stop the drip — we identify why the leak happened and fix the root cause so the problem doesn't come back weeks later.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Pricing & Guaranteed Work",
    text: "You'll get a clear quote before we start, and every repair is backed by our workmanship guarantee. No surprises on the bill.",
  },
];

const faqItems = [
  {
    question: "How do you find hidden leaks?",
    answer: "We use a combination of visual inspection, pressure testing, and moisture detection to pinpoint leaks behind walls, under floors, and in ceilings — without unnecessary demolition.",
  },
  {
    question: "Is a small leak really that serious?",
    answer: "Yes. Even a slow drip can waste thousands of litres of water per year, drive up your water bill, and cause structural damage, mould, and wood rot over time. It's always better to fix it early.",
  },
  {
    question: "How much does leak repair cost?",
    answer: "It depends on the location and severity of the leak. A simple exposed pipe repair is straightforward, while a hidden slab leak requires more work. We always quote upfront before starting.",
  },
  {
    question: "Can you repair leaks in old galvanised pipes?",
    answer: "Yes. We repair all pipe types including galvanised, copper, PVC, and polyethylene. If a section is too corroded, we'll recommend a replacement for a lasting solution.",
  },
  {
    question: "Will I need to leave my home during the repair?",
    answer: "In most cases, no. We work efficiently and cleanly. For major hidden leaks that require access through walls or floors, we'll discuss the process with you first so you know exactly what to expect.",
  },
  {
    question: "Do you also fix leaking taps and toilets?",
    answer: "Absolutely. Leaking taps and running toilets are some of the most common water-wasters in Windhoek homes. We carry common parts and can usually fix these on the spot.",
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
            A plumbing leak might start small, but left unchecked it can cause serious damage — from mould and rot to weakened walls and sky-high water bills. The tricky part? Many leaks are hidden behind walls, under floors, or deep in your plumbing system where you can't see them.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
            061 Plumbers specialises in finding and fixing leaks across Windhoek — from dripping taps and leaking toilets to hidden pipe leaks that have been silently causing damage for months. We locate the source, repair it properly, and make sure the problem is solved for good.
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
          Signs You May Have a Plumbing Leak
        </h2>
        <p
          className={cn(
            "mx-auto mb-10 max-w-2xl text-center text-muted-foreground transition-all duration-600 ease-out delay-100",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Leaks aren't always obvious. Watch for these common warning signs:
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

const LeakRepairPage = () => (
  <>
    <Helmet>
      <title>Plumbing Leak Repair Windhoek | 24/7 Leak Detection | 061 Plumbers</title>
      <meta
        name="description"
        content="Plumbing leak in Windhoek? 061 Plumbers offers expert leak detection and repair across all of Windhoek — 24/7. Hidden leaks, dripping taps, running toilets. Call +264 85 787 5100."
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Plumbing Leak Repair — 061 Plumbers",
          description: "Expert plumbing leak detection and repair service in Windhoek, Namibia. Available 24/7.",
          provider: {
            "@type": "LocalBusiness",
            name: "061 Plumbers",
            telephone: "+264857875100",
            areaServed: { "@type": "City", name: "Windhoek" },
          },
          serviceType: "Leak Repair",
        })}
      </script>
    </Helmet>

    <Breadcrumb items={breadcrumb} />

    <HeroSection
      emergency
      headline="Plumbing Leak Repair in Windhoek — We Find It and Fix It"
      subheadline="Hidden leak driving up your water bill? Damp patches appearing on walls? 061 Plumbers locates and repairs leaks fast — before they cause serious damage to your home."
      primaryLabel="Call Now — +264 85 787 5100"
      primaryHref="tel:+264857875100"
      secondaryLabel="Get a Free Quote"
      secondaryHref="/contact"
      backgroundImage={leakRepairHero}
    />

    <IntroSection />

    <WarningSignsSection />

    <NumberedSteps
      label="What To Do If You Suspect a Leak"
      intro="Even if you can't see the source, these steps can help limit the damage while you wait for us:"
      steps={actionSteps}
    />

    <WhyChooseUs
      heading="Why Windhoek Homeowners Trust 061 Plumbers for Leak Repairs"
      items={whyChooseItems}
    />

    <FAQSection
      heading="Leak Repair — Frequently Asked Questions"
      items={faqItems}
    />

    <RelatedServices links={relatedServices} />

    <CTABanner
      heading="Suspect a Leak? Don't Wait — Call Us Now."
      text="The longer a leak goes unrepaired, the more damage it causes. Call 061 Plumbers today for fast, professional leak detection and repair — available 24/7 across Windhoek."
      phoneLabel="Call +264 85 787 5100"
      secondaryLabel="Get a Free Quote"
    />
  </>
);

export default LeakRepairPage;
