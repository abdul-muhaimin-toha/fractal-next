import { getSitemap } from "@/graphql/components/getSitemap";

export default async function sitemap() {
  const sitemapData = await getSitemap();

  const sitemapItems = sitemapData.customSitemapUrls.map((item) => ({
    url: item.url,
    lastModified: item.lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  return [...sitemapItems];
}
