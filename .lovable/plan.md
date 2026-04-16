

## Plan: Add Structured Data Schemas + Sitemap

This plan replicates the SEO enhancements from the Netlify version and adds a sitemap for crawler discoverability.

### What we're building

1. **JsonLd helper component** — A reusable component that injects JSON-LD `<script>` tags via `react-helmet-async`, keeping schema markup DRY across the site.

2. **LocalBusinessSchema component** — Full `Plumber`/`LocalBusiness` structured data (name, phone, email, service area, 24/7 hours, geo-coordinates, service catalog). Rendered in `Layout.tsx` so it appears on every page.

3. **FAQPage schema in FAQSection** — Enhance the existing `FAQSection` component to automatically emit `FAQPage` structured data from its FAQ items, enabling Google FAQ rich results on all 9+ service pages.

4. **BreadcrumbList schema in Breadcrumb** — Enhance the existing `Breadcrumb` component to emit `BreadcrumbList` structured data from its items, helping search engines display breadcrumb trails.

5. **WebSite schema on HomePage** — Add `WebSite` schema to the homepage for sitelinks eligibility.

6. **Static sitemap.xml** — Create `public/sitemap.xml` listing all current routes with the published URL (`https://plumbersinwindhoek.lovable.app`). Update `robots.txt` to reference it.

### Files to create/modify

| File | Action |
|------|--------|
| `src/components/JsonLd.tsx` | Create — reusable JSON-LD injection component |
| `src/components/LocalBusinessSchema.tsx` | Create — site-wide LocalBusiness schema |
| `src/components/Layout.tsx` | Modify — import and render `LocalBusinessSchema` |
| `src/components/sections/FAQSection.tsx` | Modify — add FAQPage schema output |
| `src/components/sections/Breadcrumb.tsx` | Modify — add BreadcrumbList schema output |
| `src/pages/HomePage.tsx` | Modify — add WebSite schema |
| `public/sitemap.xml` | Create — all routes listed |
| `public/robots.txt` | Modify — add `Sitemap:` directive |

### Technical details

**JsonLd component**: Accepts a `data` prop (any object), renders `<Helmet><script type="application/ld+json">{JSON.stringify(data)}</script></Helmet>`.

**LocalBusinessSchema**: Outputs a `@type: ["Plumber", "LocalBusiness"]` with:
- Name: 061 Plumbers
- Phone: +264 85 787 5100
- Area: Windhoek, Khomas Region, Namibia
- Hours: Mo-Su 00:00-23:59
- Geo: -22.5609, 17.0658
- Services: geyser/HVAC, drainage, emergency, kitchen, bathroom

**FAQSection schema**: Generates `@type: FAQPage` with `mainEntity` array of `Question`/`Answer` pairs from the existing `items` prop.

**Breadcrumb schema**: Generates `@type: BreadcrumbList` with `itemListElement` from the existing `items` prop, using the published URL as base.

**Sitemap**: Static XML file covering all 16 routes currently defined in `App.tsx`.

