import { campusLocations, siteConfig } from "@/content/site";

const siteUrl =
  import.meta.env.VITE_SITE_URL || "https://schoolarshub.lovable.app";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: siteConfig.brandName,
  alternateName: "Scholars Hub Goa Coaching Centre",
  description: siteConfig.description,
  url: siteUrl,
  telephone: siteConfig.phones,
  email: siteConfig.email,
  foundingDate: siteConfig.foundedYear,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "40",
    bestRating: "5",
    worstRating: "1",
  },
  address: campusLocations.map((location) => ({
    "@type": "PostalAddress",
    streetAddress: location.name,
    addressLocality: location.area,
    addressRegion: "Goa",
    addressCountry: "IN",
  })),
  sameAs: [siteConfig.instagram, siteConfig.googleReviewsUrl],
};
