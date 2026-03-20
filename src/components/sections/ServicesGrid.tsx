import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface ServiceCard {
  label: string;
  href: string;
  description?: string;
  icon?: React.ElementType;
  image?: string;
}

interface ServicesGridProps {
  cards: ServiceCard[];
  heading?: string;
  intro?: string;
}

const ServicesGrid = ({ cards, heading, intro }: ServicesGridProps) => {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        {heading && (
          <h2
            className={cn(
              "mb-3 text-center text-2xl font-extrabold text-foreground md:text-4xl transition-all duration-600 ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {heading}
          </h2>
        )}
        {intro && (
          <p
            className={cn(
              "mx-auto mb-12 max-w-2xl text-center text-muted-foreground transition-all duration-600 ease-out delay-100",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {intro}
          </p>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Link
              key={card.href}
              to={card.href}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: visible ? `${150 + i * 80}ms` : "0ms" }}
            >
              {card.image && (
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                {card.icon && !card.image && (
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <card.icon className="h-6 w-6 text-accent" />
                  </div>
                )}
                <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                  {card.label}
                </h3>
                {card.description && (
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                )}
                <span className="inline-flex items-center text-sm font-semibold text-accent opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
