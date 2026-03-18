interface NumberedStepsProps {
  label?: string;
  count?: number;
}

const NumberedSteps = ({ label = "WHAT TO DO", count = 5 }: NumberedStepsProps) => (
  <section className="w-full bg-secondary/50 py-12 md:py-16">
    <div className="container mx-auto max-w-3xl px-4">
      <span className="mb-4 block text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <ol className="space-y-3">
        {Array.from({ length: count }).map((_, i) => (
          <li key={i} className="flex items-center gap-4 rounded-lg border-2 border-dashed border-border bg-card p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <span className="text-sm text-muted-foreground">[STEP {i + 1} PLACEHOLDER]</span>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default NumberedSteps;
