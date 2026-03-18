import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  showSecondary?: boolean;
}

const CTABanner = ({ showSecondary = true }: CTABannerProps) => (
  <section className="w-full bg-primary py-12 md:py-16">
    <div className="container mx-auto px-4 text-center">
      <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary-foreground/60">
        CTA BANNER
      </span>
      <div className="mx-auto max-w-2xl">
        <div className="mb-3 rounded border-2 border-dashed border-primary-foreground/30 p-4 text-lg font-bold text-primary-foreground/50">
          [CTA HEADING PLACEHOLDER]
        </div>
        <div className="mb-6 rounded border-2 border-dashed border-primary-foreground/30 p-3 text-primary-foreground/50">
          [CTA TEXT PLACEHOLDER]
        </div>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <a href="tel:placeholder">[CALL NOW]</a>
          </Button>
          {showSecondary && (
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">[CONTACT US]</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
