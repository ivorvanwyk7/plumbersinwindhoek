import { Link } from "react-router-dom";
import { Flame, Droplets, CookingPot, Bath, AlertTriangle } from "lucide-react";

interface ServiceCard {
  label: string;
  href: string;
  description?: string;
  icon?: React.ElementType;
}

interface ServicesGridProps {
  cards: ServiceCard[];
  heading?: string;
  intro?: string;
}

const ServicesGrid = ({ cards, heading, intro }: ServicesGridProps) => (
  <section className="w-full py-12 md:py-16">
    <div className="container mx-auto px-4">
      {heading && (
        <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">
          {heading}
        </h2>
      )}
      {intro && (
        <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
          {intro}
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            to={card.href}
            className="group rounded-lg border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-accent hover:shadow-md"
          >
            {card.icon && (
              <div className="mb-3 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <card.icon className="h-6 w-6 text-accent" />
              </div>
            )}
            <h3 className="mb-2 text-base font-semibold text-foreground group-hover:text-accent">
              {card.label}
            </h3>
            {card.description && (
              <p className="text-sm text-muted-foreground">{card.description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
