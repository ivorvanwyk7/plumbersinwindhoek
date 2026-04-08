import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface WarningSignsListProps {
  count?: number;
  heading?: string;
  intro?: string;
  signs?: string[];
  cta?: string;
}

const WarningSignsList = ({ count = 7, heading, intro, signs, cta }: WarningSignsListProps) => {
  const { ref, visible } = useScrollReveal(0.15);
  const items = signs || Array.from({ length: count }, (_, i) => `[WARNING SIGN ${i + 1} PLACEHOLDER]`);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        {heading && (
          <h2
            className={cn(
              "mb-3 text-center text-2xl font-extrabold text-foreground md:text-4xl transition-all duration-600 ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {heading}
          </h2>
        )}
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
        <ul className="space-y-3">
          {items.map((sign, i) => (
            <li
              key={i}
              className={cn(
                "flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-500 ease-out",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: visible ? `${150 + i * 60}ms` : "0ms" }}
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                <AlertTriangle className="h-4 w-4 text-destructive" />
              </div>
              <span className="text-sm leading-relaxed text-foreground">{sign}</span>
            </li>
          ))}
        </ul>
        {cta && (
          <p
            className={cn(
              "mt-8 text-center text-sm font-medium text-muted-foreground transition-all duration-600 ease-out",
              visible ? "opacity-100" : "opacity-0"
            )}
          >
            {cta}
          </p>
        )}
      </div>
    </section>
  );
};

export default WarningSignsList;
