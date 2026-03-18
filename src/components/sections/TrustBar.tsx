const TrustBar = () => (
  <section className="w-full border-y border-border bg-card py-8">
    <div className="container mx-auto px-4">
      <span className="mb-4 block text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
        TRUST BAR
      </span>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-2 rounded-lg border-2 border-dashed border-border bg-muted/50 p-4">
            <div className="h-10 w-10 rounded-full border-2 border-dashed border-border bg-muted" />
            <span className="text-xs font-semibold text-muted-foreground">[BADGE {i}]</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
