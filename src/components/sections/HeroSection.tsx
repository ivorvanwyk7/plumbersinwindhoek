import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  emergency?: boolean;
  headline?: string;
  subheadline?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const HeroSection = ({
  emergency,
  headline = "Your Trusted Plumbers in Windhoek — Available 24/7",
  subheadline = "Got a plumbing problem? 061 Plumbers is here to help. From leaky taps and blocked drains to full bathroom renovations and emergency burst pipes — we've got Windhoek homeowners covered, any time of day or night.",
  primaryLabel = "Call Us Now — +264 85 787 5100",
  primaryHref = "tel:+264857875100",
  secondaryLabel = "Get a Free Quote",
  secondaryHref = "/contact",
}: HeroSectionProps) => (
  <section
    className={cn(
      "w-full py-16 md:py-24",
      emergency ? "bg-destructive/10" : "bg-primary/5"
    )}
  >
    <div className="container mx-auto px-4 text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-3xl font-bold leading-tight text-foreground md:text-5xl">
          {headline}
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          {subheadline}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          {primaryHref.startsWith("tel:") ? (
            <Button asChild size="lg" variant={emergency ? "destructive" : "default"}>
              <a href={primaryHref}>
                <Phone className="mr-2 h-4 w-4" />
                {primaryLabel}
              </a>
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
