import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface CoverageAreaProps {
  heading?: string;
  intro?: string;
  areas?: string[];
}

const CoverageArea = ({ heading = "Coverage Area", intro, areas }: CoverageAreaProps) => {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <h2
          className={cn(
            "mb-3 text-center text-2xl font-extrabold text-foreground md:text-4xl transition-all duration-600 ease-out",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {heading}
        </h2>
        {intro && (
          <p
            className={cn(
              "mx-auto mb-10 max-w-2xl text-center text-muted-foreground transition-all duration-600 ease-out delay-100",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {intro}
          </p>
        )}
        {areas ? (
          <ul className="space-y-3">
            {areas.map((area, i) => (
              <li
                key={area}
                className={cn(
                  "flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-sm transition-all duration-500 ease-out",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: visible ? `${150 + i * 60}ms` : "0ms" }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <span className="text-base font-medium text-foreground">{area}</span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i} className="rounded border border-dashed border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
                [AREA {i} PLACEHOLDER]
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default CoverageArea;
