interface WarningSignsListProps {
  count?: number;
}

const WarningSignsList = ({ count = 7 }: WarningSignsListProps) => (
  <section className="w-full py-12 md:py-16">
    <div className="container mx-auto max-w-3xl px-4">
      <span className="mb-4 block text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
        WARNING SIGNS
      </span>
      <ul className="space-y-3">
        {Array.from({ length: count }).map((_, i) => (
          <li key={i} className="flex items-center gap-3 rounded-lg border-2 border-dashed border-border bg-muted/50 p-4">
            <div className="h-8 w-8 shrink-0 rounded-full border-2 border-dashed border-border bg-muted" />
            <span className="text-sm text-muted-foreground">[WARNING SIGN {i + 1} PLACEHOLDER]</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WarningSignsList;
