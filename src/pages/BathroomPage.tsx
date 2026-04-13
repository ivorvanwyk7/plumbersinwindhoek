import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WarningSignsList from "@/components/sections/WarningSignsList";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import bathroomHero from "@/assets/bathroom-hero.jpg";
import { ShowerHead, Wrench, Settings, Droplets, Bath, Disc } from "lucide-react";
import { FileText, Shield, Clock, MapPin, Users } from "lucide-react";

const bathroomServices = [
  {
    label: "Shower Installation",
    href: "/bathroom-renovations-windhoek/shower-installation",
    description: "Upgrading your shower or fitting one from scratch? We install all types — walk-in showers, shower-over-bath combos, and full enclosures — with clean, professional finishes.",
    icon: ShowerHead,
  },
  {
    label: "Shower Repair",
    href: "/bathroom-renovations-windhoek/shower-repair",
    description: "Leaking shower? Low pressure? Temperature problems? We diagnose and repair shower issues quickly so you can get back to your daily routine.",
    icon: Wrench,
  },
  {
    label: "Toilet Installation",
    href: "/bathroom-renovations-windhoek/toilet-installation",
    description: "Whether you're replacing an old toilet or fitting one in a new bathroom, we handle the full installation — secure mounting, proper plumbing connections, and a watertight seal.",
    icon: Bath,
  },
  {
    label: "Toilet Repair",
    href: "/bathroom-renovations-windhoek/toilet-repair",
    description: "Running toilet? Weak flush? Cracked cistern? We repair all common toilet problems and can replace internal mechanisms to extend the life of your existing toilet.",
    icon: Settings,
  },
  {
    label: "Tap Installation",
    href: "/services/tap-installation",
    description: "New basin taps, bath taps, or mixer taps — we install them all neatly and professionally, making sure everything is sealed and connected correctly.",
    icon: Disc,
  },
  {
    label: "Tap Repair",
    href: "/services/tap-repair",
    description: "Dripping or stiff bathroom taps waste water and can damage your basin or vanity over time. We carry common parts and usually fix the problem in one visit.",
    icon: Droplets,
  },
];

const warningSigns = [
  "Persistent dripping from shower heads, taps, or toilet cisterns",
  "Water stains or damp patches on walls, floors, or ceilings",
  "Low water pressure in the shower or basin taps",
  "Toilet running constantly or not flushing properly",
  "Mould or mildew appearing around shower or bath areas",
  "Cracks or leaks in the toilet bowl or cistern",
  "Grouting deterioration allowing water behind tiles",
];

const whyChooseItems = [
  {
    icon: Clock,
    title: "Fast, Reliable Service",
    text: "We know your bathroom is essential. That's why we respond quickly and aim to complete most repairs and installations the same day.",
  },
  {
    icon: FileText,
    title: "Free, No-Obligation Quotes",
    text: "We'll assess the job and give you a clear, honest quote before any work begins. No pressure, no hidden fees.",
  },
  {
    icon: Shield,
    title: "Guaranteed Workmanship",
    text: "Every bathroom job we do is backed by our workmanship guarantee. If something isn't right, we come back and fix it at no extra cost.",
  },
  {
    icon: MapPin,
    title: "Serving All of Windhoek",
    text: "Wherever you are in Windhoek — North, East, West, Central, or the Southern suburbs — we've got you covered.",
  },
  {
    icon: Users,
    title: "Clean, Respectful Workmanship",
    text: "We treat your bathroom with care. Our plumbers are tidy, professional, and always leave the space clean when the job is done.",
  },
];

const faqItems = [
  {
    question: "How long does a bathroom renovation take?",
    answer: "It depends on the scope. A simple tap or toilet replacement can be done in a few hours. A full bathroom plumbing renovation — including shower, toilet, and basin work — typically takes 2 to 4 days. We'll give you a clear timeline when we quote.",
  },
  {
    question: "Can you work with my existing tiles and fittings?",
    answer: "Yes — we can work around existing tiles and fixtures wherever possible to minimise disruption and cost. If modifications are needed, we'll discuss options with you before starting.",
  },
  {
    question: "Do you supply the fixtures or do I need to buy them?",
    answer: "Either way works for us. If you've already bought your shower, toilet, or taps, we'll install them. If you'd like recommendations, we're happy to suggest reliable brands and suppliers in Windhoek.",
  },
  {
    question: "What's causing my toilet to run constantly?",
    answer: "A running toilet is usually caused by a faulty flapper valve, worn-out fill valve, or an issue with the float mechanism. These are common repairs that we can fix quickly and affordably.",
  },
  {
    question: "Can you install a shower in a bathroom that doesn't have one?",
    answer: "In most cases, yes. We can plumb in a new shower where one doesn't exist, provided there's access to water supply and drainage. We'll assess your bathroom and advise on the best solution.",
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
            Your bathroom should be a space that works beautifully — from the shower to the toilet to every tap in between. At 061 Plumbers, we handle all aspects of bathroom plumbing, whether you're renovating from scratch, upgrading a tired bathroom, or just need a quick repair. Professional, tidy, and always guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
};

const BathroomPage = () => (
  <>
    <Helmet>
      <title>Bathroom Renovations Windhoek | Shower & Toilet Plumbing | 061 Plumbers</title>
      <meta
        name="description"
        content="Bathroom renovations, shower installation, toilet fitting, and tap repairs in Windhoek. 061 Plumbers offers professional bathroom plumbing with free quotes. Call +264 85 787 5100."
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
      backgroundImage={bathroomHero}
      headline="Bathroom Plumbing & Renovations in Windhoek"
      subheadline="Shower installations, toilet fitting, tap repairs, and full bathroom plumbing renovations — done professionally by 061 Plumbers. Free quotes and guaranteed workmanship across Windhoek."
      primaryLabel="Call Us — +264 85 787 5100"
      primaryHref="tel:+264857875100"
      secondaryLabel="Get a Free Quote"
      secondaryHref="/contact"
    />

    <IntroSection />

    <ServicesGrid
      cards={bathroomServices}
      heading="Our Bathroom Plumbing Services"
      intro="Whether it's a new installation or a repair, here's what we offer:"
    />

    <WarningSignsList
      heading="Signs Your Bathroom Plumbing Needs Attention"
      intro="Keep an eye out for these common warning signs:"
      signs={warningSigns}
      cta="Noticed any of these? Don't ignore them — bathroom leaks and faults can cause serious damage over time. Call 061 Plumbers on +264 85 787 5100 for a free assessment."
    />

    <WhyChooseUs
      heading="Why Windhoek Homeowners Choose 061 Plumbers for Bathroom Work"
      items={whyChooseItems}
    />

    <FAQSection heading="Bathroom Plumbing FAQs" items={faqItems} />

    <CTABanner
      heading="Planning a Bathroom Project in Windhoek?"
      text="Whether it's a full renovation or a simple repair, 061 Plumbers is ready to help. Give us a call for a free, no-obligation quote — we'll take it from there."
      phoneLabel="Call +264 85 787 5100"
      secondaryLabel="Get a Free Quote"
    />
  </>
);

export default BathroomPage;
