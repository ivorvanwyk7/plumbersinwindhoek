import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface CTABannerProps {
  showSecondary?: boolean;
  heading?: string;
  text?: string;
  phoneLabel?: string;
  secondaryLabel?: string;
}

const CTABanner = ({
  showSecondary = true,
  heading = "Need a Plumber in Windhoek? Call Us Now.",
  text = "Don't let a plumbing problem get worse. Whether it's an emergency or you just need a quote, 061 Plumbers is ready to help — day or night, across all of Windhoek.",
  phoneLabel = "Call +264 85 787 5100",
  secondaryLabel = "Get a Free Quote Online",
}: CTABannerProps) => (
  <section className="w-full bg-primary py-12 md:py-16">
    <div className="container mx-auto px-4 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-3 text-2xl font-bold text-primary-foreground md:text-3xl">
          {heading}
        </h2>
        <p className="mb-6 text-primary-foreground/80">
          {text}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <a href="tel:+264857875100">
              <Phone className="mr-2 h-4 w-4" />
              {phoneLabel}
            </a>
          </Button>
          {showSecondary && (
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">{secondaryLabel}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
