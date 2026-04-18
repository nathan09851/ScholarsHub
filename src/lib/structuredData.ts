import { campusLocations, siteConfig, subjects } from "@/content/site";

const siteUrl =
  import.meta.env.VITE_SITE_URL || "https://schoolarshub.lovable.app";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: siteConfig.brandName,
  alternateName: [
    "Scholars Hub Goa",
    "Schoolars Hub Coaching Centre",
    "Scholars Hub Coaching Centre Goa",
  ],
  description: siteConfig.description,
  url: siteUrl,
  telephone: siteConfig.phones,
  email: siteConfig.email,
  foundingDate: siteConfig.foundedYear,
  priceRange: "₹700–₹1000/month",
  currenciesAccepted: "INR",
  paymentAccepted: "UPI, Cash",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 15.4,
      longitude: 73.9,
    },
    geoRadius: "50000",
  },
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "15:00",
      closes: "18:30",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tuition Subjects",
    itemListElement: subjects.map((subject) => ({
      "@type": "EducationalOccupationalProgram",
      name: `${subject.title} Tuition`,
      description: subject.description,
      educationalCredentialAwarded: subject.grades,
    })),
  },
  sameAs: [siteConfig.instagram, siteConfig.googleReviewsUrl],
};

export const breadcrumbJsonLd = (
  items: Array<{ name: string; url: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteUrl}${item.url}`,
  })),
});
