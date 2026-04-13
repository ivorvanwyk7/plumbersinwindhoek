import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WarningSignsList from "@/components/sections/WarningSignsList";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import drainageHero from "@/assets/drainage-hero.jpg";
import { Droplets, Wrench, PipetteIcon, ShowerHead, Shovel } from "lucide-react";
import { FileText, Shield, Clock, MapPin, Users } from "lucide-react";

const drainageServices = [
  {
    label: "Drain Cleaning",
    href: "/drainage-services-windhoek/drain-cleaning",
    description: "Slow drains, bad smells, or water backing up? We use professional equipment to clear blockages fast — from kitchen sinks and shower drains to main sewer lines.",
    icon: Droplets,
  },
  {
    label: "Sewer Cleaning",
    href: "/drainage-services-windhoek/sewer-cleaning",
    description: "Sewer blockages can cause serious health risks and property damage. We locate and clear sewer line blockages using high-pressure jetting and professional drain rods.",
    icon: PipetteIcon,
  },
  {
    label: "Sewer Repair",
    href: "/drainage-services-windhoek/sewer-repair",
    description: "Cracked, collapsed, or tree-root-damaged sewer pipes? We carry out full sewer line repairs and replacements to get your drainage system working properly again.",
    icon: Wrench,
  },
  {
    label: "Outdoor Plumbing Repair",
    href: "/drainage-services-windhoek/outdoor-plumbing-repair",
    description: "From garden taps and irrigation lines to stormwater drainage — we handle all outdoor plumbing repairs across Windhoek properties.",
    icon: Shovel,
  },
  {
    label: "Toilet Unblocking",
    href: "/services/toilet-unblocking",
    description: "A blocked toilet is one of the most urgent household plumbing problems. Our team unblocks toilets fast — no mess, no fuss — and checks the cause to prevent repeat blockages.",
    icon: ShowerHead,
  },
];

const warningSigns = [
  "Water draining slowly from sinks, showers, or baths",
  "Gurgling sounds coming from your drains or toilet",
  "Foul or sewage-like smells in or around your home",
  "Water backing up into sinks, showers, or floor drains",
  "Wet patches or pooling water in your garden or yard",
  "Multiple drains in your home blocked at the same time",
  "Frequent toilet blockages despite regular use",
];

const whyChooseItems = [
  {
    icon: Clock,
    title: "Fast Response — Available 24/7",
    text: "Drainage emergencies don't wait — and neither do we. Call us any time, day or night, and we'll be there as quickly as possible.",
  },
  {
    icon: FileText,
    title: "Upfront, Honest Pricing",
    text: "We'll give you a clear quote before we start. No hidden charges, no surprises — just fair, transparent pricing you can trust.",
  },
  {
    icon: Shield,
    title: "Guaranteed Workmanship",
    text: "Every drainage job we complete is backed by our workmanship guarantee. If something isn't right, we'll come back and sort it.",
  },
  {
    icon: MapPin,
    title: "Serving All of Windhoek",
    text: "From Windhoek North to the Southern suburbs, we cover the entire city. Local, reliable, and always close by.",
  },
  {
    icon: Users,
    title: "Professional, Friendly Team",
    text: "Our plumbers are polite, punctual, and tidy. We treat your property with respect and clean up when we're done.",
  },
];

const faqItems = [
  {
    question: "What causes blocked drains?",
    answer: "The most common causes are grease and fat buildup, hair, soap residue, food scraps, tree roots growing into pipes, and foreign objects flushed down toilets. Regular maintenance helps prevent most blockages.",
  },
  {
    question: "How long does it take to clear a blocked drain?",
    answer: "Most standard blockages can be cleared within 30 minutes to an hour. More complex blockages involving tree roots or collapsed pipes may take longer and require additional repair work.",
  },
  {
    question: "Can I unblock a drain myself?",
    answer: "Minor blockages can sometimes be cleared with a plunger or drain cleaner. However, if the problem persists or multiple drains are affected, it's best to call a professional to avoid causing further damage to your pipes.",
  },
  {
    question: "How can I prevent blocked drains?",
    answer: "Avoid pouring cooking oil or grease down sinks, use drain guards to catch hair and food scraps, don't flush anything other than toilet paper, and consider regular professional drain cleaning to keep your system flowing freely.",
  },
  {
    question: "Do you offer emergency drainage services?",
    answer: "Yes — we're available 24/7 for drainage emergencies. A blocked sewer or overflowing drain needs urgent attention, so call us any time and we'll respond as quickly as possible.",
  },
];

const IntroSection = () => {
  const { ref, visible } = useScrollReveal(0.2);
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "mx-auto max-w-3xl text-center transition-all duration-700 ease-out",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Blocked drains and sewer problems are more than just an inconvenience — left untreated, they can cause water damage, health hazards, and costly repairs. At 061 Plumbers, we provide fast, professional drainage services across all of Windhoek. Whether it's a slow-draining sink, a backed-up sewer line, or a toilet that won't flush properly, our experienced team has the tools and know-how to fix it right the first time.
          </p>
        </div>
      </div>
    </section>
  );
};

const DrainagePage = () => (
  <>
    <Helmet>
      <title>Drainage Services Windhoek | Drain & Sewer Cleaning | 061 Plumbers</title>
      <meta
        name="description"
        content="Blocked drain or sewer problem in Windhoek? 061 Plumbers offers fast drain cleaning, sewer repair, and toilet unblocking. Available 24/7. Call +264 85 787 5100."
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        })}
      </script>
    </Helmet>

    <HeroSection
      backgroundImage={drainageHero}
      headline="Drainage & Sewer Services in Windhoek"
      subheadline="Blocked drains, sewer backups, and outdoor plumbing problems — sorted fast by 061 Plumbers. Professional drainage services with free quotes and guaranteed workmanship across all of Windhoek."
      primaryLabel="Call Us — +264 85 787 5100"
      primaryHref="tel:+264857875100"
      secondaryLabel="Get a Free Quote"
      secondaryHref="/contact"
    />

    <IntroSection />

    <ServicesGrid
      cards={drainageServices}
      heading="Our Drainage Services in Windhoek"
      intro="From simple blockages to full sewer line repairs, here's what we handle:"
    />

    <WarningSignsList
      heading="Signs You Have a Drainage Problem"
      intro="Not sure if you need a plumber? Here are some warning signs to watch for:"
      signs={warningSigns}
      cta="If any of these sound familiar, don't wait — drainage problems only get worse with time. Call 061 Plumbers on +264 85 787 5100 for a free assessment."
    />

    <WhyChooseUs
      heading="Why Windhoek Homeowners Trust 061 Plumbers for Drainage"
      items={whyChooseItems}
    />

    <FAQSection heading="Drainage FAQs" items={faqItems} />

    <CTABanner
      heading="Drainage Problem in Windhoek? Let Us Sort It Out."
      text="Don't let a blocked drain ruin your day. Call 061 Plumbers for fast, professional drainage services — free quotes, guaranteed workmanship, and available 24/7."
      phoneLabel="Call +264 85 787 5100"
      secondaryLabel="Get a Free Quote"
    />
  </>
);

export default DrainagePage;
