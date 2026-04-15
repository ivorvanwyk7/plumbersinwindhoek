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
import toiletHero from "@/assets/toilet-unblocking-hero.jpg";

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Drainage Services", href: "/drainage-services-windhoek" },
  { label: "Toilet Unblocking" },
];

const relatedServices = [
  { label: "Drain Cleaning", href: "/drainage-services-windhoek/drain-cleaning" },
  { label: "Sewer Cleaning", href: "/drainage-services-windhoek/sewer-cleaning" },
  { label: "Emergency Plumbing", href: "/emergency-plumbing-windhoek" },
  { label: "Leak Repair", href: "/emergency-plumbing-windhoek/leak-repair" },
];

const warningSignItems = [
  {
    icon: Droplets,
    title: "Water rises instead of draining",
    text: "When you flush and the water level rises toward the rim instead of flowing away, you have a blockage that needs professional attention.",
  },
  {
    icon: AlertTriangle,
    title: "Slow or weak flush",
    text: "A toilet that takes ages to empty or barely moves water is partially blocked — it'll only get worse if left.",
  },
  {
    icon: Droplets,
    title: "Gurgling sounds from the drain",
    text: "Bubbling or gurgling noises when you flush indicate trapped air caused by a blockage further down the pipe.",
  },
  {
    icon: AlertTriangle,
    title: "Bad smells from the toilet or drains",
    text: "Persistent foul odours coming from the toilet bowl or nearby drains suggest waste is trapped and decomposing in the pipe.",
  },
  {
    icon: Droplets,
    title: "Water backing up in other fixtures",
    text: "If flushing the toilet causes water to rise in the shower or basin, the blockage is likely in the main drain line.",
  },
  {
    icon: AlertTriangle,
    title: "Repeated blockages",
    text: "If your toilet blocks more than once a month, there's likely a deeper issue — tree roots, a collapsed pipe, or a buildup that plunging won't fix.",
  },
];

const stepsData = [
  {
    title: "Stop flushing immediately",
    text: "Flushing again when a toilet is blocked will only push the water level higher and risk an overflow. Leave the handle alone.",
  },
  {
    title: "Try a plunger (if you have one)",
    text: "Use a flange plunger to create a seal over the drain hole. Push and pull firmly for 15–20 seconds. If it doesn't clear, don't force it.",
  },
  {
    title: "Turn off the water supply to the toilet",
    text: "Look for the isolation valve behind or below the cistern and turn it clockwise. This stops more water from entering the bowl.",
  },
  {
    title: "Don't use chemical drain cleaners",
    text: "Harsh chemicals can damage your pipes and are dangerous to handle. They rarely work on solid blockages and make the job harder for plumbers.",
  },
  {
    title: "Call 061 Plumbers on +264 85 787 5100",
    text: "We'll get a plumber to you quickly with the right equipment to clear the blockage safely and check the drain line for deeper issues.",
  },
];

const whyChooseItems = [
  {
    icon: Clock,
    title: "Same-Day Service",
    text: "A blocked toilet can't wait. We prioritise toilet unblocking calls and aim to have a plumber at your door the same day — often within the hour.",
  },
  {
    icon: Zap,
    title: "Professional Equipment",
    text: "We use drain snakes, high-pressure jetters, and CCTV cameras to clear blockages and identify the root cause — not just a plunger.",
  },
  {
    icon: ShieldCheck,
    title: "Clean & Respectful Service",
    text: "We know it's not a glamorous job. Our plumbers work cleanly, protect your bathroom, and leave everything hygienic and tidy.",
  },
  {
    icon: Wrench,
    title: "We Fix the Cause, Not Just the Symptom",
    text: "We don't just clear the blockage — we check the drain line to find out why it happened and prevent it from recurring.",
  },
];

const faqItems = [
  {
    question: "How much does toilet unblocking cost in Windhoek?",
    answer: "A standard toilet unblocking typically costs between N$350 and N$800, depending on the severity and location of the blockage. We always provide a clear quote before starting — no surprises.",
  },
  {
    question: "Can I unblock a toilet myself?",
    answer: "A plunger can fix minor blockages. But if the toilet keeps blocking, if water backs up into other drains, or if the plunger doesn't work — call a professional. Forcing it can damage the toilet or push the blockage deeper.",
  },
  {
    question: "What causes toilets to block?",
    answer: "The most common causes are excessive toilet paper, wet wipes (even the 'flushable' kind), sanitary products, children's toys, and foreign objects. In older Windhoek homes, tree root intrusion and ageing clay pipes are also common culprits.",
  },
  {
    question: "Do you offer emergency toilet unblocking?",
    answer: "Yes. If your only toilet is blocked or there's a risk of overflow, call us and we'll treat it as an emergency. We're available 24/7 across Windhoek.",
  },
  {
    question: "Will you need to remove the toilet?",
    answer: "In most cases, no. We can clear the blockage through the drain with a snake or jetter. If the blockage is severe or the toilet itself is damaged, we'll explain the options before doing anything.",
  },
  {
    question: "How can I prevent my toilet from blocking?",
    answer: "Only flush toilet paper and human waste. Keep a small bin in the bathroom for wipes, cotton buds, and sanitary products. If your home has old clay pipes, consider a preventive CCTV drain inspection once a year.",
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
            A blocked toilet is one of the most stressful plumbing problems a homeowner can face — especially when it's your only one. Whether it's a stubborn blockage that won't shift with a plunger or an overflowing toilet threatening your bathroom floor, you need it sorted fast.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
            At 061 Plumbers, we handle toilet unblocking across Windhoek every day. We arrive with the right tools, clear the blockage properly, and check the line to make sure it won't happen again next week.
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
          Signs Your Toilet Needs Professional Unblocking
        </h2>
        <p
          className={cn(
            "mx-auto mb-10 max-w-2xl text-center text-muted-foreground transition-all duration-600 ease-out delay-100",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Don't ignore these warning signs — a small blockage today can become a sewage backup tomorrow:
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

const ToiletUnblockingPage = () => (
  <>
    <Helmet>
      <title>Toilet Unblocking Windhoek | Same-Day Service | 061 Plumbers</title>
      <meta
        name="description"
        content="Blocked toilet in Windhoek? 061 Plumbers offers fast, same-day toilet unblocking across Windhoek. Professional equipment, honest pricing. Call +264 85 787 5100."
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Toilet Unblocking — 061 Plumbers",
          description: "Professional toilet unblocking service in Windhoek, Namibia. Same-day service available.",
          provider: {
            "@type": "LocalBusiness",
            name: "061 Plumbers",
            telephone: "+264857875100",
            areaServed: { "@type": "City", name: "Windhoek" },
          },
          serviceType: "Toilet Unblocking",
        })}
      </script>
    </Helmet>

    <Breadcrumb items={breadcrumb} />

    <HeroSection
      headline="Toilet Unblocking in Windhoek — Fast, Same-Day Service"
      subheadline="Blocked toilet? Don't panic. 061 Plumbers will get to you fast with the right equipment to clear the blockage properly — no mess, no fuss, no call-out surprises."
      primaryLabel="Call Now — +264 85 787 5100"
      primaryHref="tel:+264857875100"
      secondaryLabel="Get a Free Quote"
      secondaryHref="/contact"
      backgroundImage={toiletHero}
    />

    <IntroSection />

    <WarningSignsSection />

    <NumberedSteps
      label="What To Do When Your Toilet Is Blocked"
      intro="Before you call us, here's how to prevent the situation from getting worse:"
      steps={stepsData}
    />

    <WhyChooseUs
      heading="Why Windhoek Homeowners Trust 061 Plumbers for Toilet Unblocking"
      items={whyChooseItems}
    />

    <FAQSection
      heading="Toilet Unblocking — Frequently Asked Questions"
      items={faqItems}
    />

    <RelatedServices links={relatedServices} />

    <CTABanner
      heading="Blocked Toilet? We'll Sort It Today."
      text="Don't spend another hour with a blocked toilet. Call 061 Plumbers now and get a professional plumber at your door — same day, across all of Windhoek."
      phoneLabel="Call +264 85 787 5100"
      secondaryLabel="Get a Free Quote"
    />
  </>
);

export default ToiletUnblockingPage;
