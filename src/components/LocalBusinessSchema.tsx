import JsonLd from "./JsonLd";

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "061 Plumbers",
  description:
    "24/7 emergency plumbing services in Windhoek, Namibia. From leaky taps and blocked drains to geyser installations and bathroom renovations.",
  url: "https://061plumbers.com",
  telephone: "+264857875100",
  email: "info@061plumbers.com",
  image: "https://061plumbers.com/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Windhoek",
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
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plumbing Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "HVAC & Geyser Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Geyser Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Geyser Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Geyser Plumbing" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Drainage Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Cleaning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewer Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Toilet Unblocking" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Emergency Plumbing",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Burst Pipe Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leak Repair" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Kitchen & Bathroom",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tap Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tap Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Renovation" } },
        ],
      },
    ],
  },
};

const LocalBusinessSchema = () => <JsonLd data={localBusinessData} />;

export default LocalBusinessSchema;
