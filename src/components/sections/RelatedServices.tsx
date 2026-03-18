import { Link } from "react-router-dom";

interface RelatedServicesProps {
  links: { label: string; href: string }[];
}

const RelatedServices = ({ links }: RelatedServicesProps) => (
  <section className="w-full py-12 md:py-16">
    <div className="container mx-auto max-w-3xl px-4">
      <span className="mb-4 block text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
        RELATED SERVICES
      </span>
      <div className="flex flex-wrap justify-center gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="rounded-lg border-2 border-dashed border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default RelatedServices;
