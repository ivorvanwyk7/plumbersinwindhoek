import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Fast response, sorted our burst pipe within the hour. Highly recommend!",
    name: "Customer Review",
    location: "Windhoek",
  },
  {
    text: "Very professional, gave us a quote on the spot and stuck to it. Will definitely use again.",
    name: "Customer Review",
    location: "Windhoek",
  },
  {
    text: "Called at 11pm for an emergency, they were there within 45 minutes. Lifesavers!",
    name: "Customer Review",
    location: "Windhoek",
  },
];

const Testimonials = () => (
  <section className="w-full py-12 md:py-16">
    <div className="container mx-auto px-4">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
        What Our Customers Say
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="mb-3 flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="mb-4 text-sm italic text-muted-foreground">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">— {t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
