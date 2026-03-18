// HVAC service page configs
const hvacBase = "/hvac-geyser-services-windhoek";
const hvacServices = [
  { slug: "geyser-installation", label: "[GEYSER INSTALLATION]" },
  { slug: "geyser-repairs", label: "[GEYSER REPAIRS]" },
  { slug: "solar-geyser-plumbing", label: "[SOLAR GEYSER PLUMBING]" },
  { slug: "water-heater-installation", label: "[WATER HEATER INSTALLATION]" },
  { slug: "water-heater-repair", label: "[WATER HEATER REPAIR]" },
  { slug: "water-tank-installation", label: "[WATER TANK INSTALLATION]" },
  { slug: "water-tank-repair", label: "[WATER TANK REPAIR]" },
];

export const getHvacServiceConfig = (slug: string) => {
  const current = hvacServices.find((s) => s.slug === slug);
  return {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "HVAC & Geysers", href: hvacBase },
      { label: current?.label || `[${slug}]` },
    ],
    relatedServices: hvacServices
      .filter((s) => s.slug !== slug)
      .map((s) => ({ label: s.label, href: `${hvacBase}/${s.slug}` })),
  };
};

// Drainage service page configs
const drainageBase = "/drainage-services-windhoek";
const drainageServices = [
  { slug: "drain-cleaning", label: "[DRAIN CLEANING]" },
  { slug: "sewer-cleaning", label: "[SEWER CLEANING]" },
  { slug: "sewer-repair", label: "[SEWER REPAIR]" },
  { slug: "outdoor-plumbing-repair", label: "[OUTDOOR PLUMBING REPAIR]" },
];

export const getDrainageServiceConfig = (slug: string) => {
  const current = drainageServices.find((s) => s.slug === slug);
  return {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Drainage", href: drainageBase },
      { label: current?.label || `[${slug}]` },
    ],
    relatedServices: drainageServices
      .filter((s) => s.slug !== slug)
      .map((s) => ({ label: s.label, href: `${drainageBase}/${s.slug}` })),
  };
};

// Bathroom service page configs
const bathroomBase = "/bathroom-renovations-windhoek";
const bathroomServices = [
  { slug: "shower-installation", label: "[SHOWER INSTALLATION]" },
  { slug: "shower-repair", label: "[SHOWER REPAIR]" },
  { slug: "toilet-installation", label: "[TOILET INSTALLATION]" },
  { slug: "toilet-repair", label: "[TOILET REPAIR]" },
];

export const getBathroomServiceConfig = (slug: string) => {
  const current = bathroomServices.find((s) => s.slug === slug);
  return {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bathroom", href: bathroomBase },
      { label: current?.label || `[${slug}]` },
    ],
    relatedServices: bathroomServices
      .filter((s) => s.slug !== slug)
      .map((s) => ({ label: s.label, href: `${bathroomBase}/${s.slug}` })),
  };
};

// Emergency service page configs
const emergencyBase = "/emergency-plumbing-windhoek";
const emergencyServices = [
  { slug: "pipe-repair", label: "[PIPE REPAIR]" },
  { slug: "leak-repair", label: "[LEAK REPAIR]" },
  { slug: "burst-pipe-repair", label: "[BURST PIPE REPAIR]" },
];

export const getEmergencyServiceConfig = (slug: string) => {
  const current = emergencyServices.find((s) => s.slug === slug);
  return {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Emergency Plumbing", href: emergencyBase },
      { label: current?.label || `[${slug}]` },
    ],
    emergency: true,
    showWhyChooseUs: false as const,
    showWhatToDo: 3,
    relatedServices: emergencyServices
      .filter((s) => s.slug !== slug)
      .map((s) => ({ label: s.label, href: `${emergencyBase}/${s.slug}` })),
  };
};

// Shared service configs
export const sharedServiceConfigs = {
  "tap-installation": {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Kitchen", href: "/kitchen-plumbing-windhoek" },
      { label: "[TAP INSTALLATION]" },
    ],
    relatedServices: [
      { label: "[Kitchen Plumbing]", href: "/kitchen-plumbing-windhoek" },
      { label: "[Bathroom Renovations]", href: "/bathroom-renovations-windhoek" },
    ],
  },
  "tap-repair": {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Kitchen", href: "/kitchen-plumbing-windhoek" },
      { label: "[TAP REPAIR]" },
    ],
    relatedServices: [
      { label: "[Kitchen Plumbing]", href: "/kitchen-plumbing-windhoek" },
      { label: "[Bathroom Renovations]", href: "/bathroom-renovations-windhoek" },
      { label: "[Emergency Plumbing]", href: "/emergency-plumbing-windhoek" },
    ],
  },
  "toilet-unblocking": {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Drainage", href: "/drainage-services-windhoek" },
      { label: "[TOILET UNBLOCKING]" },
    ],
    relatedServices: [
      { label: "[Drainage Services]", href: "/drainage-services-windhoek" },
      { label: "[Emergency Plumbing]", href: "/emergency-plumbing-windhoek" },
    ],
  },
};
