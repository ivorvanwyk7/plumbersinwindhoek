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
import burstPipeHero from "@/assets/burst-pipe-hero.jpg";

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Emergency Plumbing", href: "/emergency-plumbing-windhoek" },
  { label: "Burst Pipe Repair" },
];

const relatedServices = [
  { label: "Plumbing Leak Repair", href: "/emergency-plumbing-windhoek/leak-repair" },
  { label: "Pipe Repair", href: "/emergency-plumbing-windhoek/pipe-repair" },
  { label: "Tap Repair", href: "/services/tap-repair" },
  { label: "Toilet Unblocking", href: "/services/toilet-unblocking" },
];

const warningSignItems = [
  {
    icon: Droplets,
    title: "Sudden drop in water pressure",
    text: "If taps slow to a trickle, a burst pipe upstream could be diverting your water supply.",
  },
  {
    icon: AlertTriangle,
    title: "Damp walls, ceilings, or floors",
    text: "Unexplained wet patches or bubbling paint are classic signs of a hidden burst pipe behind walls.",
  },
  {
    icon: Droplets,
    title: "Unexplained spike in water bill",
    text: "A burst pipe can waste thousands of litres silently — your bill will tell the story.",
  },
  {
    icon: AlertTriangle,
    title: "Hissing or banging sounds in pipes",
    text: "Strange noises from your plumbing usually mean water is escaping where it shouldn't be.",
  },
  {
    icon: Droplets,
    title: "Pooling water in the yard",
    text: "Soggy patches or puddles in the garden when it hasn't rained point to an underground burst.",
  },
  {
    icon: AlertTriangle,
    title: "Discoloured or rusty water",
    text: "Brownish water from taps can indicate a corroded pipe that's about to — or has already — burst.",
  },
];

const emergencySteps = [
  {
    title: "Turn off the main water supply immediately",
    text: "Find your stopcock (usually under the kitchen sink or near the water meter) and shut it off to stop water flowing to the burst pipe.",
  },
  {
    title: "Switch off your geyser and water heater",
    text: "Running a geyser without water supply can damage the element. Turn it off at the electrical board to be safe.",
  },
  {
    title: "Open taps to drain remaining water",
    text: "Opening cold taps helps drain any remaining water in the system, reducing further leakage from the burst section.",
  },
  {
    title: "Move valuables away from the water",
    text: "Protect electronics, documents, and furniture by moving them away from the affected area. Mop up standing water if safe to do so.",
  },
  {
    title: "Call 061 Plumbers on +264 85 787 5100",
    text: "We'll talk you through anything else while our nearest plumber is already heading your way — any time, day or night.",
  },
];

const whyChooseItems = [
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    text: "Burst pipes don't wait for business hours, and neither do we. Call any time — day, night, weekends, or public holidays — and we'll be on our way.",
  },
  {
    icon: Zap,
    title: "Fast Arrival Across Windhoek",
    text: "We're based locally and know every corner of Windhoek. When a burst pipe is flooding your home, every minute matters — and we don't waste yours.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Workmanship",
    text: "Every burst pipe repair is backed by our workmanship guarantee. We fix the problem properly the first time so you don't have to call again.",
  },
  {
    icon: Wrench,
    title: "Fully Equipped for Any Pipe",
    text: "Copper, PVC, galvanised, or polyethylene — we carry the tools and parts to handle any type of pipe repair on the spot.",
  },
];

const faqItems = [
  {
    question: "How quickly can you get to my home for a burst pipe?",
    answer: "We aim to reach any location in Windhoek within 30–60 minutes of your call. In urgent flooding situations, we prioritise your job and dispatch the nearest available plumber immediately.",
  },
  {
    question: "How much does burst pipe repair cost in Windhoek?",
    answer: "The cost depends on the pipe material, location of the burst, and extent of the damage. We always provide a clear, upfront quote before starting work — no hidden fees or surprise charges.",
  },
  {
    question: "Can you repair a burst pipe at night or on weekends?",
    answer: "Absolutely. We operate 24/7, including weekends and public holidays. A burst pipe is always an emergency, and we treat it as one regardless of the time.",
  },
  {
    question: "What causes pipes to burst in Windhoek?",
    answer: "Common causes include ageing or corroded pipes, high water pressure, poor-quality fittings, ground movement, and physical damage during construction or gardening. Windhoek's hard water can also accelerate pipe deterioration over time.",
  },
  {
    question: "Will you need to break walls or floors to fix the pipe?",
    answer: "Not always. We use detection methods to locate the burst as accurately as possible and aim to minimise any damage to your home. If access is needed, we'll explain exactly what's involved before we start.",
  },
  {
    question: "Do you replace the pipe or just patch it?",
    answer: "It depends on the severity. For minor bursts, a targeted repair may be sufficient. For badly corroded or repeatedly failing pipes, we'll recommend a section replacement to give you a lasting solution.",
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
            A burst pipe can cause serious damage to your home in a matter of minutes. Water flooding through ceilings, walls, and floors doesn't just ruin belongings — it can compromise the structure of your home if it's not dealt with fast.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
            At 061 Plumbers, we specialise in emergency burst pipe repairs across Windhoek. Whether it's a copper pipe that's split in the ceiling, a PVC joint that's given way under the house, or an underground main that's flooding your yard — we get there quickly, stop the water, and fix the problem properly.
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
          Warning Signs of a Burst Pipe
        </h2>
        <p
          className={cn(
            "mx-auto mb-10 max-w-2xl text-center text-muted-foreground transition-all duration-600 ease-out delay-100",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Not every burst is obvious. Here are the signs to watch for:
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

const BurstPipeRepairPage = () => (
  <>
    <Helmet>
      <title>Burst Pipe Repair Windhoek | 24/7 Emergency | 061 Plumbers</title>
      <meta
        name="description"
        content="Burst pipe in Windhoek? 061 Plumbers offers 24/7 emergency burst pipe repair across all of Windhoek. Fast response, honest pricing, guaranteed workmanship. Call +264 85 787 5100."
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Burst Pipe Repair — 061 Plumbers",
          description: "24/7 emergency burst pipe repair service in Windhoek, Namibia.",
          provider: {
            "@type": "LocalBusiness",
            name: "061 Plumbers",
            telephone: "+264857875100",
            areaServed: { "@type": "City", name: "Windhoek" },
          },
          serviceType: "Burst Pipe Repair",
        })}
      </script>
    </Helmet>

    <Breadcrumb items={breadcrumb} />

    <HeroSection
      emergency
      headline="Burst Pipe Repair in Windhoek — Fast, 24/7 Emergency Response"
      subheadline="A burst pipe can flood your home in minutes. Call 061 Plumbers now and we'll get there fast, stop the water, and fix the problem — any time of day or night."
      primaryLabel="Call Now — +264 85 787 5100"
      primaryHref="tel:+264857875100"
      secondaryLabel="Get a Free Quote"
      secondaryHref="/contact"
      backgroundImage={burstPipeHero}
    />

    <IntroSection />

    <WarningSignsSection />

    <NumberedSteps
      label="What To Do When a Pipe Bursts"
      intro="Acting quickly can prevent thousands of dollars in damage. Here's what to do while you wait for us:"
      steps={emergencySteps}
    />

    <WhyChooseUs
      heading="Why Windhoek Homeowners Call 061 Plumbers for Burst Pipes"
      items={whyChooseItems}
    />

    <FAQSection
      heading="Burst Pipe Repair — Frequently Asked Questions"
      items={faqItems}
    />

    <RelatedServices links={relatedServices} />

    <CTABanner
      heading="Burst Pipe? Call Us Right Now."
      text="Every minute counts when water is flooding your home. Call 061 Plumbers now and get an experienced plumber on the way — 24/7, across all of Windhoek."
      phoneLabel="Call +264 85 787 5100"
      secondaryLabel="Get a Free Quote"
    />
  </>
);

export default BurstPipeRepairPage;
