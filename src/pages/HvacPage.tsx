import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WarningSignsList from "@/components/sections/WarningSignsList";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import hvacHero from "@/assets/hvac-hero.jpg";
import { Flame, Wrench, Sun, Thermometer, Settings, Container, Droplets } from "lucide-react";
import { FileText, Shield, MessageSquare, Clock, MapPin } from "lucide-react";

const hvacServices = [
  {
    label: "Geyser Installation",
    href: "/hvac-geyser-services-windhoek/geyser-installation",
    description: "Installing a new geyser is a job that needs to be done right the first time. Our plumbers handle the full installation — from positioning and mounting to connecting the pipework and pressure valves — so your geyser is safe, compliant, and ready to go.",
    icon: Flame,
  },
  {
    label: "Geyser Repairs",
    href: "/hvac-geyser-services-windhoek/geyser-repairs",
    description: "Is your geyser leaking, not heating water, or making strange noises? We diagnose geyser problems quickly and carry out repairs that last. Most common geyser faults — including element replacements, thermostat issues, and pressure valve failures — can be fixed in a single visit.",
    icon: Wrench,
  },
  {
    label: "Solar Geyser Plumbing",
    href: "/hvac-geyser-services-windhoek/solar-geyser-plumbing",
    description: "Thinking about switching to solar? Smart move — solar geysers can dramatically cut your electricity bill. We handle the plumbing side of solar geyser installations, connecting your solar panels to your existing water system efficiently and correctly.",
    icon: Sun,
  },
  {
    label: "Water Heater Installation",
    href: "/hvac-geyser-services-windhoek/water-heater-installation",
    description: "Need a new water heater installed? We work with all major types and brands, and we'll help you choose the right unit for your home's size and hot water needs before we fit it. Leave the heavy lifting — and the compliance — to us.",
    icon: Thermometer,
  },
  {
    label: "Water Heater Repair",
    href: "/hvac-geyser-services-windhoek/water-heater-repair",
    description: "A faulty water heater doesn't always need to be replaced — often a repair is all it takes to get it working like new again. We'll assess yours honestly and give you a straightforward recommendation so you can make the best decision for your home and budget.",
    icon: Settings,
  },
  {
    label: "Water Tank Installation",
    href: "/hvac-geyser-services-windhoek/water-tank-installation",
    description: "We install water storage tanks for homes looking to improve water security or reduce reliance on the municipal supply. We'll advise on the right tank size and placement, and connect it to your existing plumbing with minimal disruption.",
    icon: Container,
  },
  {
    label: "Water Tank Repair",
    href: "/hvac-geyser-services-windhoek/water-tank-repair",
    description: "Leaking tank? Damaged fittings? We carry out repairs to all types of water storage tanks and can replace components to extend the life of your existing system.",
    icon: Droplets,
  },
];

const warningSigns = [
  "Your water is not getting hot, or it runs out faster than it used to",
  "There's water pooling around the base of your geyser or tank",
  "You can hear rumbling, banging, or hissing sounds coming from your geyser",
  "Your geyser's pressure relief valve is dripping or releasing water frequently",
  "Your hot water has a rusty or discoloured tint",
  "Your electricity bill has gone up unexpectedly — a faulty element works harder and uses more power",
  "Your geyser or water heater is more than 10 years old and hasn't been serviced",
];

const whyChooseItems = [
  {
    icon: FileText,
    title: "Free, No-Obligation Quotes",
    text: "We'll come out, assess your system, and give you a clear quote before any work begins. You decide — no pressure, no obligation.",
  },
  {
    icon: Shield,
    title: "Guaranteed Workmanship",
    text: "Every installation and repair we carry out comes with our workmanship guarantee. If something isn't right, we'll come back and fix it at no extra cost.",
  },
  {
    icon: MessageSquare,
    title: "Honest Advice You Can Trust",
    text: "We'll always tell you whether a repair or a replacement makes more sense for your situation. We're not here to sell you something you don't need.",
  },
  {
    icon: Clock,
    title: "Available 24/7 for Emergencies",
    text: "Geyser burst at 2am? We're available around the clock for genuine emergencies so your home doesn't take more damage than it has to.",
  },
  {
    icon: MapPin,
    title: "Serving All of Windhoek",
    text: "From Windhoek North to the Southern suburbs, we cover the whole city. Local, reliable, and always close by.",
  },
];

const faqItems = [
  {
    question: "How long does a geyser installation take?",
    answer: "Most standard geyser installations take between 2 and 4 hours, depending on the type of geyser and the complexity of the existing pipework. We'll give you a realistic time estimate when we quote.",
  },
  {
    question: "How long do geysers last in Windhoek?",
    answer: "A well-maintained geyser typically lasts between 8 and 12 years. Windhoek's water can be quite hard, which means scale buildup can shorten that lifespan — regular servicing helps.",
  },
  {
    question: "Is it worth repairing an old geyser or should I replace it?",
    answer: "It depends on the age and the fault. If your geyser is under 8 years old and the repair is straightforward, fixing it usually makes sense. If it's older and has multiple issues, a replacement often works out cheaper in the long run. We'll always give you an honest answer.",
  },
  {
    question: "Can you install a solar geyser for me?",
    answer: "We handle the plumbing and pipework side of solar geyser installations — connecting the solar collector panels to your water system. Get in touch and we'll talk through what's involved for your home.",
  },
  {
    question: "What size geyser do I need for my home?",
    answer: "As a general guide, a 100-litre geyser suits 1–2 people, 150 litres works for 2–3 people, and 200 litres is more appropriate for a family of 4 or more. We'll help you choose the right size when we come out to quote.",
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
            There are few things more frustrating than turning on the tap and getting nothing but cold water — especially on a chilly Windhoek morning. At 061 Plumbers, we specialise in the installation, repair, and maintenance of geysers, water heaters, and water tanks for homeowners across Windhoek. Whether your geyser has packed up without warning, you're looking to upgrade to a solar system, or you just need a reliable plumber to install a new water heater, our team handles it all. We've been doing this for years, and we know what Windhoek homes need.
          </p>
        </div>
      </div>
    </section>
  );
};

const HvacPage = () => (
  <>
    <Helmet>
      <title>Geyser Installation & HVAC Services Windhoek | 061 Plumbers</title>
      <meta
        name="description"
        content="Need a geyser installation, repair, or water heater service in Windhoek? 061 Plumbers offers expert HVAC and geyser plumbing with free quotes and guaranteed workmanship. Call +264 85 787 5100."
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
      backgroundImage={hvacHero}
      headline="Our HVAC & Water Heating Services in Windhoek"
      subheadline="From geyser installations and solar water heating to water heater repairs and tank replacements — 061 Plumbers keeps your hot water running reliably all year round. Friendly service, guaranteed workmanship, and free quotes across all of Windhoek."
      primaryLabel="Call Us — +264 85 787 5100"
      primaryHref="tel:+264857875100"
      secondaryLabel="Get a Free Quote"
      secondaryHref="/contact"
    />

    <IntroSection />

    <ServicesGrid
      cards={hvacServices}
      heading="Our HVAC & Water Heating Services"
      intro="Here's a full look at what we offer:"
    />

    <WarningSignsList
      heading="Signs Your Geyser or Water Heater Needs Attention"
      intro="Not sure if you need a plumber? Here are some telltale signs it's time to give us a call:"
      signs={warningSigns}
      cta="If any of these sound familiar, don't wait — small geyser problems can turn into big, expensive ones fast. Call 061 Plumbers on +264 85 787 5100 for a free assessment."
    />

    <WhyChooseUs
      heading="Why Windhoek Homeowners Choose 061 Plumbers for Geyser & HVAC Work"
      items={whyChooseItems}
    />

    <FAQSection
      heading="Geyser & Water Heater FAQs"
      items={faqItems}
    />

    <CTABanner
      heading="Need a Geyser or Water Heater Plumber in Windhoek?"
      text="Whether it's an installation, a repair, or you're just not sure what the problem is — give 061 Plumbers a call. We'll come out, take a look, and give you a free, honest quote. No jargon, no hidden fees, just reliable plumbing you can count on."
      phoneLabel="Call +264 85 787 5100"
      secondaryLabel="Get a Free Quote"
    />
  </>
);

export default HvacPage;
