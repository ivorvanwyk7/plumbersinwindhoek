import { Shield, Clock, FileText, MapPin } from "lucide-react";

const badges = [
  { icon: Clock, label: "24/7 Emergency Response" },
  { icon: FileText, label: "Free Quotations" },
  { icon: Shield, label: "Guaranteed Workmanship" },
  { icon: MapPin, label: "Serving All of Windhoek" },
];

const TrustBar = () => (
  <section className="w-full border-y border-border bg-card py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {badges.map((badge) => (
          <div key={badge.label} className="flex flex-col items-center gap-2 rounded-lg bg-secondary/50 p-4 text-center">
            <badge.icon className="h-8 w-8 text-accent" />
            <span className="text-sm font-semibold text-foreground">{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
