import { SEO_CONSTANTS } from "./constants";

export const formatSeoMeta = async (data = {}) => {

  const { seo = {} } = data;
  const {
    title: rawTitle,
    metaDesc: rawMetaDesc,
    metaKeywords: rawMetaKeywords,
    canonical: rawCanonical,
    opengraphImage = {},
    featuredImage = {},
  } = seo;

  const title = rawTitle || SEO_CONSTANTS.title;
  const metaDesc = rawMetaDesc || SEO_CONSTANTS.metaDesc;
  const metaKeywords = rawMetaKeywords || SEO_CONSTANTS.metaKeywords;
  const canonical = rawCanonical || SEO_CONSTANTS.canonical;

  // Use defaultImageUrl or fall back to featured or opengraph image
  const ogImageUrl =
    opengraphImage?.mediaItemUrl ||
    featuredImage?.node?.mediaItemUrl ||
    SEO_CONSTANTS.defaultImageUrl;

  return {
    title,
    description: metaDesc,
    keywords: metaKeywords,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title,
      description: metaDesc,
      images: ogImageUrl ? [{ url: ogImageUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDesc,
      images: ogImageUrl ? [ogImageUrl] : [SEO_CONSTANTS.twitterImageUrl],
    },
  };
};
