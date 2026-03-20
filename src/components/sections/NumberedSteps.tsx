interface Step {
  title: string;
  text: string;
}

interface NumberedStepsProps {
  label?: string;
  intro?: string;
  count?: number;
  steps?: Step[];
}

const NumberedSteps = ({ label = "WHAT TO DO", intro, count = 5, steps }: NumberedStepsProps) => (
  <section className="w-full bg-secondary/50 py-12 md:py-16">
    <div className="container mx-auto max-w-3xl px-4">
      <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">
        {label}
      </h2>
      {intro && (
        <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">{intro}</p>
      )}
      <ol className="space-y-3">
        {steps
          ? steps.map((step, i) => (
              <li key={i} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))
          : Array.from({ length: count }).map((_, i) => (
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
