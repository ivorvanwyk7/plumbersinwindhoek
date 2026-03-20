import { Shield, Clock, FileText, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const badges = [
  { icon: Clock, label: "24/7 Emergency Response" },
  { icon: FileText, label: "Free Quotations" },
  { icon: Shield, label: "Guaranteed Workmanship" },
  { icon: MapPin, label: "Serving All of Windhoek" },
];

const TrustBar = () => {
  const { ref, visible } = useScrollReveal(0.3);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full bg-card py-10 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {badges.map((badge, i) => (
            <div
              key={badge.label}
              className={cn(
                "flex flex-col items-center gap-3 rounded-xl border border-border/60 bg-background p-5 text-center transition-all duration-600 ease-out",
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <badge.icon className="h-6 w-6 text-accent" />
              </div>
              <span className="text-sm font-bold text-foreground">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
