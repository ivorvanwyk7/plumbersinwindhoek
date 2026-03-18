import HeroSection from "@/components/sections/HeroSection";
import PlaceholderBlock from "@/components/sections/PlaceholderBlock";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

const AboutPage = () => (
  <>
    <HeroSection primaryHref="/contact" primaryLabel="[CONTACT US]" secondaryHref="/contact" secondaryLabel="[GET A QUOTE]" />
    
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4">
        <span className="mb-4 block text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
          OUR STORY
        </span>
        <div className="grid gap-6 md:grid-cols-2">
          <PlaceholderBlock label="STORY TEXT" className="min-h-[200px]">
            <span className="text-muted-foreground">[OUR STORY TEXT PLACEHOLDER]</span>
          </PlaceholderBlock>
          <PlaceholderBlock label="IMAGE" className="flex min-h-[200px] items-center justify-center">
            <span className="text-muted-foreground">[IMAGE PLACEHOLDER]</span>
          </PlaceholderBlock>
        </div>
      </div>
    </section>

    <section className="w-full bg-secondary/50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <span className="mb-6 block text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
          OUR TEAM
        </span>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border-2 border-dashed border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full border-2 border-dashed border-border bg-muted" />
              <div className="mb-2 rounded border border-dashed border-border bg-muted/50 p-2 text-sm font-bold text-muted-foreground">
                [TEAM MEMBER {i} NAME]
              </div>
              <div className="rounded border border-dashed border-border bg-muted/50 p-2 text-xs text-muted-foreground">
                [ROLE PLACEHOLDER]
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Testimonials />
    <CTABanner />
  </>
);

export default AboutPage;
