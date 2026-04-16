import JsonLd from "./JsonLd";

const LocalBusinessSchema = () => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": ["Plumber", "LocalBusiness"],
      name: "061 Plumbers",
      telephone: "+264857875100",
      email: "info@061plumbers.com",
      url: "https://plumbersinwindhoek.lovable.app",
      logo: "https://plumbersinwindhoek.lovable.app/logo.png",
      image: "https://plumbersinwindhoek.lovable.app/logo.png",
      description:
        "Professional plumbing services in Windhoek, Namibia. 24/7 emergency plumbing, geyser repairs, drainage, kitchen and bathroom plumbing.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Windhoek",
        addressRegion: "Khomas Region",
        addressCountry: "NA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -22.5609,
        longitude: 17.0658,
      },
      areaServed: {
        "@type": "City",
        name: "Windhoek",
        "@id": "https://www.wikidata.org/wiki/Q3926",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Plumbing Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Geyser & HVAC Services" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drainage Services" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Plumbing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Plumbing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Renovations" } },
        ],
      },
    }}
  />
);

export default LocalBusinessSchema;
