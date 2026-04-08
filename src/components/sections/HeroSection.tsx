import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  emergency?: boolean;
  headline?: string;
  subheadline?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  emergency,
  headline = "Your Trusted Plumbers in Windhoek — Available 24/7",
  subheadline = "Got a plumbing problem? 061 Plumbers is here to help. From leaky taps and blocked drains to full bathroom renovations and emergency burst pipes — we've got Windhoek homeowners covered, any time of day or night.",
  primaryLabel = "Call Us Now — +264 85 787 5100",
  primaryHref = "tel:+264857875100",
  secondaryLabel = "Get a Free Quote",
  secondaryHref = "/contact",
  backgroundImage,
}: HeroSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden",
        emergency ? "py-16 md:py-24" : "py-20 md:py-32"
      )}
    >
      {/* Background */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div
            className={cn(
              "absolute inset-0",
              emergency
                ? "bg-gradient-to-r from-black/85 via-black/70 to-destructive/40"
                : "bg-primary/80"
            )}
          />
        </div>
      )}
      {!backgroundImage && (
        <div
          className={cn(
            "absolute inset-0",
            emergency
              ? "bg-gradient-to-br from-destructive/10 via-destructive/5 to-background"
              : "bg-gradient-to-br from-primary via-primary/95 to-accent/80"
          )}
        />
      )}

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className={cn(
              "mb-6 text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl transition-all duration-700 ease-out",
              backgroundImage
                ? "text-primary-foreground"
                : emergency
                  ? "text-foreground"
                  : "text-primary-foreground",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            {headline}
          </h1>
          <p
            className={cn(
              "mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl transition-all duration-700 ease-out delay-150",
              backgroundImage
                ? "text-primary-foreground/80"
                : emergency
                  ? "text-muted-foreground"
                  : "text-primary-foreground/80",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            {subheadline}
          </p>
          <div
            className={cn(
              "flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 ease-out delay-300",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            {primaryHref.startsWith("tel:") ? (
              <Button
                asChild
                size="lg"
                className={cn(
                  "h-14 px-8 text-base font-semibold shadow-lg active:scale-[0.97] transition-transform",
                  emergency
                    ? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    : "bg-accent text-accent-foreground hover:bg-accent/90"
                )}
              >
                <a href={primaryHref}>
                  <Phone className="mr-2 h-5 w-5" />
                  {primaryLabel}
                </a>
              </Button>
            ) : (
              <Button
                asChild
                size="lg"
                className={cn(
                  "h-14 px-8 text-base font-semibold shadow-lg active:scale-[0.97] transition-transform",
                  emergency
                    ? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    : "bg-accent text-accent-foreground hover:bg-accent/90"
                )}
              >
                <Link to={primaryHref}>{primaryLabel}</Link>
              </Button>
            )}
            <Button
              asChild
              size="lg"
              className={cn(
                "h-14 px-8 text-base font-semibold active:scale-[0.97] transition-transform",
                backgroundImage
                  ? "bg-primary-foreground/15 border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/25 backdrop-blur-sm"
                  : emergency
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    : "bg-primary-foreground/15 border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/25 backdrop-blur-sm"
              )}
            >
              <Link to={secondaryHref}>
                {secondaryLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
