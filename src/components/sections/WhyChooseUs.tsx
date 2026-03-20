import { Clock, FileText, Shield, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface WhyChooseUsProps {
  count?: number;
  heading?: string;
  items?: { icon: React.ElementType; title: string; text: string }[];
}

const defaultItems = [
  {
    icon: Clock,
    title: "We're Available When You Need Us Most",
    text: "Plumbing emergencies don't follow business hours. That's why we're available 24 hours a day, 7 days a week — including weekends and public holidays.",
  },
  {
    icon: FileText,
    title: "Free Quotes, No Surprises",
    text: "We give you a clear, honest quote before any work begins. No hidden costs, no nasty surprises on the bill.",
  },
  {
    icon: Shield,
    title: "Workmanship You Can Count On",
    text: "We stand behind everything we do. Our guaranteed workmanship means that if something isn't right, we'll come back and fix it — no questions asked.",
  },
  {
    icon: MapPin,
    title: "Local and Familiar",
    text: "We're based right here in Windhoek and know the city inside out. When you call 061 Plumbers, you're supporting a local business that genuinely cares about the community it serves.",
  },
  {
    icon: Users,
    title: "Friendly, Professional Team",
    text: "Our plumbers are polite, punctual, and tidy. We treat your home with respect and make sure the job site is clean when we're done.",
  },
];

const WhyChooseUs = ({ heading = "Why Windhoek Homeowners Choose 061 Plumbers", items = defaultItems }: WhyChooseUsProps) => {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2
          className={cn(
            "mb-12 text-center text-2xl font-extrabold text-primary-foreground md:text-4xl transition-all duration-600 ease-out",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {heading}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-7 backdrop-blur-sm transition-all duration-500 ease-out hover:bg-primary-foreground/10",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: visible ? `${100 + i * 80}ms` : "0ms" }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-primary-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/70">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
