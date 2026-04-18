import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

const SITE_URL =
  import.meta.env.VITE_SITE_URL ||
  (typeof window !== "undefined"
    ? window.location.origin
    : "https://schoolarshub.lovable.app");

const SITE_NAME = "Schoolars Hub";

const SEO = ({ title, description, canonical, image, jsonLd, noindex = false }: SEOProps) => {
  const url = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${SITE_URL}${canonical}`
    : SITE_URL;
  const ogImage = image || `${SITE_URL}/og-image.jpg`;

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{title}</title>
      <meta content={description} name="description" />

      {/* Indexing control */}
      <meta content={noindex ? "noindex, nofollow" : "index, follow"} name="robots" />

      {/* Open Graph */}
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content="website" property="og:type" />
      <meta content={url} property="og:url" />
      <meta content={ogImage} property="og:image" />
      <meta content={SITE_NAME} property="og:site_name" />
      <meta content="en_IN" property="og:locale" />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />

      {/* Twitter */}
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={ogImage} name="twitter:image" />

      {/* Geo / local SEO */}
      <meta content="IN-GA" name="geo.region" />
      <meta content="Goa, India" name="geo.placename" />
      <meta content="15.4;73.9" name="geo.position" />
      <meta content="15.4;73.9" name="ICBM" />

      {/* Technical */}
      <meta
        content="width=device-width, initial-scale=1, viewport-fit=cover"
        name="viewport"
      />
      <meta content="#f4ece1" name="theme-color" />
      <meta content="telephone=no" name="format-detection" />

      <link href={url} rel="canonical" />

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
};

export default SEO;
