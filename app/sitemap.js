import { getAllUris } from "@/graphql/components/getAllUris";

export const revalidate = 60;

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";
  const uris = await getAllUris();

  console.log(`Generating sitemap with ${uris.length} URIs. BaseURL: ${baseUrl}`);

  // Add the home page
  const allPaths = ["", ...uris];

  const sitemapItems = allPaths
    .filter(path => typeof path === "string")
    .map((path) => {
      const url = `${baseUrl}/${path}`.replace(/\/$/, "");
      return {
        url: url,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily",
        priority: path === "" ? 1 : 0.7,
      };
    });

  return sitemapItems;
}
