interface WhyChooseUsProps {
  count?: number;
}

const WhyChooseUs = ({ count = 5 }: WhyChooseUsProps) => (
  <section className="w-full bg-secondary/50 py-12 md:py-16">
    <div className="container mx-auto px-4">
      <span className="mb-6 block text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
        WHY CHOOSE US
      </span>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="rounded-lg border-2 border-dashed border-border bg-card p-6 text-center">
            <div className="mx-auto mb-3 h-10 w-10 rounded-full border-2 border-dashed border-border bg-muted" />
            <div className="mb-2 rounded border border-dashed border-border bg-muted/50 p-2 text-sm font-bold text-muted-foreground">
              [FEATURE HEADING {i + 1}]
            </div>
            <div className="rounded border border-dashed border-border bg-muted/50 p-2 text-xs text-muted-foreground">
              [FEATURE TEXT {i + 1}]
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
