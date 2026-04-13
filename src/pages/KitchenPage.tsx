import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WarningSignsList from "@/components/sections/WarningSignsList";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import kitchenHero from "@/assets/kitchen-hero.jpg";
import { Wrench, Settings } from "lucide-react";
import { FileText, Shield, Clock, MapPin, Users } from "lucide-react";

const kitchenServices = [
  {
    label: "Tap Installation",
    href: "/services/tap-installation",
    description: "Upgrading your kitchen tap or fitting one in a new kitchen? We install all types and brands — mixer taps, pull-out sprays, and traditional taps — neatly and professionally.",
    icon: Settings,
  },
  {
    label: "Tap Repair",
    href: "/services/tap-repair",
    description: "Dripping tap driving you mad? A leaking kitchen tap wastes water and money. We carry common replacement parts and can usually fix it in a single visit.",
    icon: Wrench,
  },
];

const warningSigns = [
  "A tap that drips constantly, even when fully closed",
  "Low water pressure at the kitchen sink",
  "Difficulty turning the tap on or off",
  "Water pooling under the sink or around the base of the tap",
  "Rust or discolouration on the tap or fittings",
  "Strange noises when you turn the tap on",
];

const whyChooseItems = [
  {
    icon: Clock,
    title: "Quick, Same-Day Service",
    text: "Kitchen plumbing problems can't wait. We aim to get to you the same day you call, so you're not left without a working kitchen sink.",
  },
  {
    icon: FileText,
    title: "Free Quotes, No Hidden Costs",
    text: "We'll assess the job and give you a clear price before we start. What we quote is what you pay — no surprises.",
  },
  {
    icon: Shield,
    title: "Guaranteed Workmanship",
    text: "Every tap we install or repair comes with our workmanship guarantee. If it's not right, we'll come back and fix it.",
  },
  {
    icon: MapPin,
    title: "Covering All of Windhoek",
    text: "From Windhoek North to the Southern suburbs, we're local and always nearby. Fast response, friendly service.",
  },
  {
    icon: Users,
    title: "Neat, Respectful Plumbers",
    text: "We treat your kitchen with care — no mess left behind, no damage to your countertops or cabinetry.",
  },
];

const faqItems = [
  {
    question: "How long does a kitchen tap installation take?",
    answer: "A straightforward tap replacement usually takes about 30 to 60 minutes. If we need to adjust pipework or fittings, it may take a little longer — we'll let you know upfront.",
  },
  {
    question: "Can you install any brand of tap?",
    answer: "Yes — we work with all major tap brands and types. If you've already bought your tap, we'll fit it for you. If you need advice on what to buy, we're happy to recommend options that suit your budget and kitchen.",
  },
  {
    question: "Why is my kitchen tap dripping?",
    answer: "The most common causes are worn-out washers, damaged O-rings, or a faulty cartridge. These are usually quick and affordable to repair — and it's worth fixing early to avoid wasting water.",
  },
  {
    question: "Do you also fix kitchen sink drainage issues?",
    answer: "Absolutely. If your kitchen sink is draining slowly or is completely blocked, we can clear the blockage and check the drain for any underlying issues. Check out our drainage services for more details.",
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
            Your kitchen is the heart of your home — and when the plumbing isn't working properly, everything grinds to a halt. Whether you need a new tap installed, an old one repaired, or just a professional opinion on what's going wrong under the sink, 061 Plumbers is here to help. We provide neat, reliable kitchen plumbing services across Windhoek.
          </p>
        </div>
      </div>
    </section>
  );
};

const KitchenPage = () => (
  <>
    <Helmet>
      <title>Kitchen Plumbing Windhoek | Tap Installation & Repair | 061 Plumbers</title>
      <meta
        name="description"
        content="Need a kitchen tap installed or repaired in Windhoek? 061 Plumbers offers fast, professional kitchen plumbing services with free quotes. Call +264 85 787 5100."
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
      backgroundImage={kitchenHero}
      headline="Kitchen Plumbing Services in Windhoek"
      subheadline="From tap installations and repairs to sink plumbing — 061 Plumbers keeps your kitchen running smoothly. Professional service, free quotes, and guaranteed workmanship."
      primaryLabel="Call Us — +264 85 787 5100"
      primaryHref="tel:+264857875100"
      secondaryLabel="Get a Free Quote"
      secondaryHref="/contact"
    />

    <IntroSection />

    <ServicesGrid
      cards={kitchenServices}
      heading="Our Kitchen Plumbing Services"
      intro="Here's what we can do for your kitchen:"
    />

    <WarningSignsList
      heading="Signs Your Kitchen Tap Needs Attention"
      intro="Not sure if you need a plumber? Watch out for these signs:"
      signs={warningSigns}
      cta="Noticed any of these? Don't put it off — a small kitchen plumbing issue can quickly become a bigger problem. Call 061 Plumbers on +264 85 787 5100."
    />

    <WhyChooseUs
      heading="Why Windhoek Homeowners Choose 061 Plumbers for Kitchen Plumbing"
      items={whyChooseItems}
    />

    <FAQSection heading="Kitchen Plumbing FAQs" items={faqItems} />

    <CTABanner
      heading="Need a Kitchen Plumber in Windhoek?"
      text="Whether it's a dripping tap, a new installation, or something else — give 061 Plumbers a call. Free quotes, guaranteed workmanship, and a friendly team that treats your home with care."
      phoneLabel="Call +264 85 787 5100"
      secondaryLabel="Get a Free Quote"
    />
  </>
);

export default KitchenPage;
