import { Link } from "react-router-dom";

interface ServiceCard {
  label: string;
  href: string;
}

interface ServicesGridProps {
  cards: ServiceCard[];
}

const ServicesGrid = ({ cards }: ServicesGridProps) => (
  <section className="w-full py-12 md:py-16">
    <div className="container mx-auto px-4">
      <span className="mb-6 block text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
        SERVICES GRID
      </span>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            to={card.href}
            className="group rounded-lg border-2 border-dashed border-border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-primary/5"
          >
            <div className="mb-3 mx-auto h-12 w-12 rounded-full border-2 border-dashed border-border bg-muted" />
            <span className="text-sm font-semibold text-foreground group-hover:text-primary">
              {card.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
