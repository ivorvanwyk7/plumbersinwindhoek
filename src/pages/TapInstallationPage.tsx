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
import { CheckCircle, Droplets, ShieldCheck, Clock, Wrench, Sparkles } from "lucide-react";
import tapInstallationHero from "@/assets/tap-installation-hero.jpg";

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Kitchen Plumbing", href: "/kitchen-plumbing-windhoek" },
  { label: "Tap Installation" },
];

const relatedServices = [
  { label: "Tap Repair", href: "/services/tap-repair" },
  { label: "Kitchen Plumbing", href: "/kitchen-plumbing-windhoek" },
  { label: "Bathroom Renovations", href: "/bathroom-renovations-windhoek" },
  { label: "Leak Repair", href: "/emergency-plumbing-windhoek/leak-repair" },
];

const benefitItems = [
  {
    icon: Droplets,
    title: "Better water efficiency",
    text: "Modern taps use aerators and ceramic disc cartridges that reduce water waste while maintaining strong flow — saving you money every month.",
  },
  {
    icon: CheckCircle,
    title: "Improved kitchen or bathroom look",
    text: "A new tap instantly upgrades the look of your kitchen or bathroom. We help you choose a style that suits your space and budget.",
  },
  {
    icon: ShieldCheck,
    title: "No more leaks or corrosion",
    text: "Old taps develop internal corrosion and worn seals that cause persistent drips. A new installation eliminates the problem entirely.",
  },
  {
    icon: Sparkles,
    title: "Better water quality",
    text: "Corroded or ageing taps can taint your water with rust particles. A new tap delivers clean, fresh water every time you turn it on.",
  },
  {
    icon: Wrench,
    title: "Proper fit and connection",
    text: "Incorrect installation causes leaks behind walls and under countertops. Our plumbers ensure every connection is watertight from day one.",
  },
  {
    icon: Clock,
    title: "Warranty-backed installation",
    text: "We guarantee our workmanship on every tap installation. If anything isn't right, we'll come back and fix it — no charge.",
  },
];

const stepsData = [
  {
    title: "Choose your tap style",
    text: "Decide whether you want a mixer tap, pillar taps, or a pull-out spray tap. Not sure? We'll help you choose based on your sink type and water pressure.",
  },
  {
    title: "We inspect and prepare the site",
    text: "Our plumber checks your existing plumbing connections, water pressure, and sink cut-out to make sure the new tap will fit and function correctly.",
  },
  {
    title: "Old tap removal",
    text: "We carefully disconnect and remove the old tap, clean the mounting area, and check for any corrosion or damage to the supply lines.",
  },
  {
    title: "New tap installation",
    text: "We fit the new tap securely, connect the hot and cold supply lines, and ensure all seals and joints are watertight.",
  },
  {
    title: "Testing and clean-up",
    text: "We run the tap through its full range, check for leaks at every connection, and clean up the work area. You're left with a perfectly working tap and a tidy space.",
  },
];

const whyChooseItems = [
  {
    icon: Clock,
    title: "Quick, Clean Installations",
    text: "Most tap installations take under an hour. We work cleanly, protect your surfaces, and leave the area spotless when we're done.",
  },
  {
    icon: Wrench,
    title: "All Tap Types & Sink Configurations",
    text: "Single-hole, three-hole, wall-mounted, deck-mounted — we install all tap types across every kitchen and bathroom configuration in Windhoek.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Workmanship",
    text: "Every installation comes with our workmanship guarantee. If a connection leaks or a fitting loosens, we'll fix it free of charge.",
  },
  {
    icon: Sparkles,
    title: "Expert Advice on Tap Selection",
    text: "Not sure which tap suits your setup? We'll recommend the right style, brand, and mechanism based on your water pressure, sink type, and budget.",
  },
];

const faqItems = [
  {
    question: "How much does tap installation cost in Windhoek?",
    answer: "A standard tap installation typically costs between N$350 and N$800, depending on the tap type and complexity of the plumbing. If we need to modify existing pipework, we'll quote that separately upfront.",
  },
  {
    question: "Can you install a tap I've already bought?",
    answer: "Absolutely. We're happy to install any tap you've purchased — just make sure it's compatible with your sink cut-out and water supply. If you're not sure, send us a photo and we'll confirm before your appointment.",
  },
  {
    question: "How long does a tap installation take?",
    answer: "Most standard installations take 30–60 minutes. If we need to replace supply hoses or modify the plumbing, it may take a little longer — we'll let you know upfront.",
  },
  {
    question: "Do I need to buy the tap myself, or can you supply one?",
    answer: "Either way works. You can buy your own tap, or we can source a quality tap for you at a competitive price. Just tell us your preference and budget.",
  },
  {
    question: "Can you install a mixer tap where I currently have pillar taps?",
    answer: "Yes, in most cases. We may need to add a small adapter plate to cover the extra hole, or adjust the plumbing connections. We'll assess your setup and explain the options.",
  },
  {
    question: "Do you install outdoor taps?",
    answer: "Yes. We install garden taps, yard taps, and hose connections. We'll run the supply line from the nearest internal pipe and fit an isolation valve for easy control.",
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
            Whether you're upgrading a tired kitchen tap, fitting out a new bathroom, or adding an outdoor garden tap — getting the installation right matters. A poorly fitted tap leaks, wobbles, and costs you money in water damage.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
            061 Plumbers installs all types of taps across Windhoek — mixer taps, pillar taps, pull-out sprays, wall-mounted taps, and more. We ensure every connection is watertight, every fitting is secure, and every tap works perfectly from the moment we leave.
          </p>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
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
          Why Install a New Tap?
        </h2>
        <p
          className={cn(
            "mx-auto mb-10 max-w-2xl text-center text-muted-foreground transition-all duration-600 ease-out delay-100",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          A new tap isn't just cosmetic — here's what a professional installation gives you:
        </p>
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefitItems.map((item, i) => (
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

const TapInstallationPage = () => (
  <>
    <Helmet>
      <title>Tap Installation Windhoek | New Taps Fitted | 061 Plumbers</title>
      <meta
        name="description"
        content="Need a new tap installed in Windhoek? 061 Plumbers fits kitchen, bathroom & outdoor taps — all brands, all types. Quick, clean, guaranteed. Call +264 85 787 5100."
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Tap Installation — 061 Plumbers",
          description: "Professional tap installation service in Windhoek, Namibia. We install kitchen, bathroom, and outdoor taps — all brands and types.",
          provider: {
            "@type": "LocalBusiness",
            name: "061 Plumbers",
            telephone: "+264857875100",
            areaServed: { "@type": "City", name: "Windhoek" },
          },
          serviceType: "Tap Installation",
        })}
      </script>
    </Helmet>

    <Breadcrumb items={breadcrumb} />

    <HeroSection
      headline="Tap Installation in Windhoek — Fitted Right, First Time"
      subheadline="New kitchen tap, bathroom upgrade, or outdoor fitting — 061 Plumbers installs all tap types with watertight connections and a clean finish. Every time."
      primaryLabel="Call Now — +264 85 787 5100"
      primaryHref="tel:+264857875100"
      secondaryLabel="Get a Free Quote"
      secondaryHref="/contact"
      backgroundImage={tapInstallationHero}
    />

    <IntroSection />

    <BenefitsSection />

    <NumberedSteps
      label="How We Install Your New Tap"
      intro="Here's what to expect when you book a tap installation with 061 Plumbers:"
      steps={stepsData}
    />

    <WhyChooseUs
      heading="Why Windhoek Homeowners Choose 061 Plumbers for Tap Installations"
      items={whyChooseItems}
    />

    <FAQSection
      heading="Tap Installation — Frequently Asked Questions"
      items={faqItems}
    />

    <RelatedServices links={relatedServices} />

    <CTABanner
      heading="Ready for a New Tap? Let's Get It Fitted."
      text="From kitchen mixers to outdoor garden taps — 061 Plumbers installs it all. Call now for a quick, clean installation anywhere in Windhoek."
      phoneLabel="Call +264 85 787 5100"
      secondaryLabel="Get a Free Quote"
    />
  </>
);

export default TapInstallationPage;
