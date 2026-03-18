import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  emergency?: boolean;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const HeroSection = ({
  emergency,
  primaryLabel = "[PRIMARY CTA]",
  primaryHref = "tel:placeholder",
  secondaryLabel = "[SECONDARY CTA]",
  secondaryHref = "/contact",
}: HeroSectionProps) => (
  <section
    className={cn(
      "w-full py-16 md:py-24",
      emergency ? "bg-destructive/10" : "bg-primary/5"
    )}
  >
    <div className="container mx-auto px-4 text-center">
      <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
        HERO SECTION
      </span>
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 rounded border-2 border-dashed border-border bg-muted/50 p-4 text-lg font-bold text-muted-foreground">
          [HEADLINE PLACEHOLDER]
        </div>
        <div className="mb-8 rounded border-2 border-dashed border-border bg-muted/50 p-3 text-muted-foreground">
          [SUBHEADLINE PLACEHOLDER]
        </div>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          {primaryHref.startsWith("tel:") ? (
            <Button asChild size="lg" variant={emergency ? "destructive" : "default"}>
              <a href={primaryHref}>{primaryLabel}</a>
            </Button>
          ) : (
            <Button asChild size="lg" variant={emergency ? "destructive" : "default"}>
              <Link to={primaryHref}>{primaryLabel}</Link>
            </Button>
          )}
          <Button asChild size="lg" variant="outline">
            <Link to={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
