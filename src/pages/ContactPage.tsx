import HeroSection from "@/components/sections/HeroSection";
import PlaceholderBlock from "@/components/sections/PlaceholderBlock";
import CTABanner from "@/components/sections/CTABanner";

const ContactPage = () => (
  <>
    <HeroSection primaryHref="/contact" primaryLabel="[CALL US]" secondaryHref="/contact" secondaryLabel="[EMAIL US]" />

    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4">
        <span className="mb-6 block text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
          CONTACT BLOCK
        </span>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["PHONE NUMBER", "EMAIL", "ADDRESS", "OPERATING HOURS"].map((item) => (
            <PlaceholderBlock key={item} label={item}>
              <span className="text-muted-foreground">[{item} PLACEHOLDER]</span>
            </PlaceholderBlock>
          ))}
        </div>
      </div>
    </section>

    <section className="w-full bg-secondary/50 py-12 md:py-16">
      <div className="container mx-auto max-w-2xl px-4">
        <span className="mb-6 block text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
          CONTACT FORM
        </span>
        <div className="rounded-lg border-2 border-dashed border-border bg-card p-6">
          <div className="space-y-4">
            {["NAME", "PHONE", "EMAIL"].map((field) => (
              <div key={field}>
                <label className="mb-1 block text-xs font-semibold text-muted-foreground">[{field} FIELD]</label>
                <div className="rounded border border-dashed border-border bg-muted/50 p-3 text-sm text-muted-foreground">[{field} INPUT PLACEHOLDER]</div>
              </div>
            ))}
            <div>
              <label className="mb-1 block text-xs font-semibold text-muted-foreground">[SERVICE NEEDED DROPDOWN]</label>
              <div className="rounded border border-dashed border-border bg-muted/50 p-3 text-sm text-muted-foreground">[DROPDOWN PLACEHOLDER]</div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-muted-foreground">[MESSAGE FIELD]</label>
              <div className="rounded border border-dashed border-border bg-muted/50 p-3 text-sm text-muted-foreground min-h-[100px]">[MESSAGE INPUT PLACEHOLDER]</div>
            </div>
            <div className="rounded bg-primary p-3 text-center text-sm font-semibold text-primary-foreground">
              [SUBMIT BUTTON PLACEHOLDER]
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4">
        <span className="mb-4 block text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
          MAP
        </span>
        <PlaceholderBlock label="MAP EMBED" className="flex min-h-[300px] items-center justify-center">
          <span className="text-muted-foreground">[MAP EMBED PLACEHOLDER]</span>
        </PlaceholderBlock>
      </div>
    </section>

    <CTABanner showSecondary={false} />
  </>
);

export default ContactPage;
