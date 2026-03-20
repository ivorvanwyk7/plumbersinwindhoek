import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    text: "Fast response, sorted our burst pipe within the hour. Highly recommend!",
    name: "Maria T.",
    location: "Windhoek North",
  },
  {
    text: "Very professional, gave us a quote on the spot and stuck to it. Will definitely use again.",
    name: "Johan K.",
    location: "Windhoek Central",
  },
  {
    text: "Called at 11pm for an emergency, they were there within 45 minutes. Lifesavers!",
    name: "Selma N.",
    location: "Windhoek West",
  },
];

const Testimonials = () => {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2
          className={cn(
            "mb-12 text-center text-2xl font-extrabold text-foreground md:text-4xl transition-all duration-600 ease-out",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          What Our Customers Say
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={cn(
                "relative rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-500 ease-out hover:shadow-lg",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: visible ? `${100 + i * 100}ms` : "0ms" }}
            >
              <Quote className="mb-4 h-8 w-8 text-accent/20" />
              <div className="mb-4 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-6 text-base leading-relaxed text-foreground/80">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
