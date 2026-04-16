import { Link } from "react-router-dom";
import JsonLd from "@/components/JsonLd";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const BASE_URL = "https://061plumbers.com";

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? `${BASE_URL}${item.href}` : undefined,
    })),
  };

  return (
    <nav className="container mx-auto px-4 py-3">
      <JsonLd data={breadcrumbSchema} />
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-1">
          {i > 0 && <span className="mx-1">→</span>}
          {item.href ? (
            <Link to={item.href} className="hover:text-primary hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-foreground">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
  );
};

export default Breadcrumb;
