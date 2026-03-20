import { MapPin } from "lucide-react";

interface CoverageAreaProps {
  heading?: string;
  intro?: string;
  areas?: string[];
}

const CoverageArea = ({ heading = "Coverage Area", intro, areas }: CoverageAreaProps) => (
  <section className="w-full py-12 md:py-16">
    <div className="container mx-auto max-w-3xl px-4">
      <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">
        {heading}
      </h2>
      {intro && (
        <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">{intro}</p>
      )}
      {areas ? (
        <ul className="space-y-2">
          {areas.map((area) => (
            <li key={area} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-sm">
              <MapPin className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-sm font-medium text-foreground">{area}</span>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i} className="rounded border border-dashed border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
              [AREA {i} PLACEHOLDER]
            </li>
          ))}
        </ul>
      )}
    </div>
  </section>
);

export default CoverageArea;
