import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import aboutHero from "@/assets/about-hero.jpg";
import aboutStory from "@/assets/about-story.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Shield, Clock, Award, Users, Wrench, ThumbsUp } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Honesty & Transparency",
    description: "No hidden fees, no unnecessary upselling. We give you a clear quote before any work begins.",
  },
  {
    icon: Clock,
    title: "Reliability & Punctuality",
    description: "When we say we'll be there, we show up — on time, every time. Your schedule matters to us.",
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    description: "We take pride in doing things right the first time, using quality materials and proven techniques.",
  },
  {
    icon: Users,
    title: "Customer-First Approach",
    description: "Your satisfaction is our success. We listen, advise, and deliver solutions that work for you.",
  },
  {
    icon: Wrench,
    title: "Skilled & Experienced",
    description: "Our team of qualified plumbers brings years of hands-on experience to every job, big or small.",
  },
  {
    icon: ThumbsUp,
    title: "Community Commitment",
    description: "We're proud to serve Windhoek. This is our home too, and we treat every customer like a neighbour.",
  },
];

const AboutPage = () => {
  const storyReveal = useScrollReveal();
  const valuesReveal = useScrollReveal();
  const whyReveal = useScrollReveal();

  return (
    <>
      <Helmet>
        <title>About 061 Plumbers | Trusted Plumbing Team in Windhoek</title>
        <meta
          name="description"
          content="Learn about 061 Plumbers — Windhoek's trusted plumbing team. Honest, reliable, and committed to quality workmanship for homes and businesses across Namibia's capital."
        />
      </Helmet>

      <HeroSection
        headline="About 061 Plumbers — Windhoek's Trusted Plumbing Team"
        subheadline="We're local plumbers who care about doing the job right. From small repairs to major installations, 061 Plumbers has been serving Windhoek homeowners and businesses with honesty, skill, and a smile."
        backgroundImage={aboutHero}
      />

      {/* Our Story */}
      <section
        ref={storyReveal.ref as React.RefObject<HTMLElement>}
        className={cn(
          "w-full py-16 md:py-24 transition-all duration-700",
          storyReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="container mx-auto px-4">
          <span className="mb-2 block text-center text-xs font-bold uppercase tracking-widest text-accent">
            Our Story
          </span>
          <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground md:text-4xl">
            Built on Trust, Driven by Service
          </h2>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                061 Plumbers was founded with a simple mission: to provide Windhoek with plumbing services you can actually rely on. We saw too many homeowners frustrated by no-shows, surprise bills, and shoddy work — and we decided to do things differently.
              </p>
              <p>
                From day one, we've been committed to showing up on time, giving honest quotes, and doing quality work that lasts. Whether it's a dripping tap or a full bathroom renovation, we treat every job with the same level of care and professionalism.
              </p>
              <p>
                Today, we proudly serve homes and businesses across Windhoek — from Kleine Kuppe to Khomasdal, Olympia to Eros. Our team of skilled plumbers is ready 24/7 to help, because plumbing problems don't wait for office hours.
              </p>
              <p className="font-semibold text-foreground">
                When you call 061 Plumbers, you're not just getting a plumber — you're getting a team that genuinely cares about your home.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={aboutStory}
                alt="061 Plumbers technician working on copper pipes"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section
        ref={valuesReveal.ref as React.RefObject<HTMLElement>}
        className={cn(
          "w-full bg-secondary/50 py-16 md:py-24 transition-all duration-700",
          valuesReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="container mx-auto px-4">
          <span className="mb-2 block text-center text-xs font-bold uppercase tracking-widest text-accent">
            What We Stand For
          </span>
          <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground md:text-4xl">
            Our Core Values
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Windhoek Trusts Us */}
      <section
        ref={whyReveal.ref as React.RefObject<HTMLElement>}
        className={cn(
          "w-full py-16 md:py-24 transition-all duration-700",
          whyReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="container mx-auto px-4">
          <span className="mb-2 block text-center text-xs font-bold uppercase tracking-widest text-accent">
            Why 061 Plumbers
          </span>
          <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground md:text-4xl">
            Why Windhoek Trusts Us
          </h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {[
              "24/7 availability — including weekends and holidays",
              "Transparent, upfront pricing with no hidden costs",
              "Fully equipped vehicles for faster service",
              "Experienced, qualified plumbers you can trust",
              "Serving all Windhoek suburbs and surrounding areas",
              "Thousands of satisfied customers across Namibia's capital",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                  ✓
                </div>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
};

export default AboutPage;
