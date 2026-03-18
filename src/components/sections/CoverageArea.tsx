const CoverageArea = () => (
  <section className="w-full py-12 md:py-16">
    <div className="container mx-auto max-w-3xl px-4">
      <span className="mb-4 block text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
        COVERAGE AREA
      </span>
      <div className="mb-4 rounded-lg border-2 border-dashed border-border bg-muted/50 p-4 text-center text-muted-foreground">
        [COVERAGE PARAGRAPH PLACEHOLDER]
      </div>
      <ul className="space-y-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i} className="rounded border border-dashed border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
            [AREA {i} PLACEHOLDER]
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default CoverageArea;
