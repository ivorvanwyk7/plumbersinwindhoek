import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface CTABannerProps {
  showSecondary?: boolean;
  heading?: string;
  text?: string;
  phoneLabel?: string;
  secondaryLabel?: string;
  backgroundImage?: string;
}

const CTABanner = ({
  showSecondary = true,
  heading = "Need a Plumber in Windhoek? Call Us Now.",
  text = "Don't let a plumbing problem get worse. Whether it's an emergency or you just need a quote, 061 Plumbers is ready to help — day or night, across all of Windhoek.",
  phoneLabel = "Call +264 85 787 5100",
  secondaryLabel = "Get a Free Quote Online",
  backgroundImage,
}: CTABannerProps) => {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative w-full overflow-hidden py-16 md:py-24">
      {backgroundImage ? (
        <div className="absolute inset-0">
          <img src={backgroundImage} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-accent/85" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-primary" />
      )}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div
          className={cn(
            "mx-auto max-w-2xl transition-all duration-700 ease-out",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <h2 className="mb-4 text-2xl font-extrabold text-accent-foreground md:text-4xl">
            {heading}
          </h2>
          <p className="mb-8 text-lg text-accent-foreground/80">
            {text}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 bg-primary-foreground px-8 text-base font-semibold text-primary shadow-lg hover:bg-primary-foreground/90 active:scale-[0.97] transition-transform"
            >
              <a href="tel:+264857875100">
                <Phone className="mr-2 h-5 w-5" />
                {phoneLabel}
              </a>
            </Button>
            {showSecondary && (
              <Button
                asChild
                size="lg"
                className="h-14 bg-accent-foreground/15 border-2 border-accent-foreground/40 px-8 text-base font-semibold text-accent-foreground hover:bg-accent-foreground/25 backdrop-blur-sm active:scale-[0.97] transition-transform"
              >
                <Link to="/contact">
                  {secondaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
