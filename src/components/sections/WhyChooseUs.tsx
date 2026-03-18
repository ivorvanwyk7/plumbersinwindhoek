import { Clock, FileText, Shield, MapPin, Users } from "lucide-react";

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

const WhyChooseUs = ({ heading = "Why Windhoek Homeowners Choose 061 Plumbers", items = defaultItems }: WhyChooseUsProps) => (
  <section className="w-full bg-secondary/50 py-12 md:py-16">
    <div className="container mx-auto px-4">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
        {heading}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div key={i} className="rounded-lg border border-border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <item.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-2 text-base font-bold text-foreground">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
