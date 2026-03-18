const Testimonials = () => (
  <section className="w-full py-12 md:py-16">
    <div className="container mx-auto px-4">
      <span className="mb-6 block text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
        TESTIMONIALS
      </span>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg border-2 border-dashed border-border bg-card p-6">
            <div className="mb-3 rounded border border-dashed border-border bg-muted/50 p-3 text-sm italic text-muted-foreground">
              [TESTIMONIAL TEXT {i}]
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full border-2 border-dashed border-border bg-muted" />
              <div className="rounded border border-dashed border-border bg-muted/50 px-3 py-1 text-xs font-semibold text-muted-foreground">
                [NAME {i}]
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
