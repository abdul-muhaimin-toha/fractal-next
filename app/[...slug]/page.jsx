import { getPageData } from "@/graphql/components/getPageData";
import { getAllUris } from "@/graphql/components/getAllUris";
import { formatSeoMeta } from "@/utils/formatSeoMeta";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";
import { notFound } from "next/navigation";

// Required Catch-all Route for Static Site Generation (Home is handled in app/page.jsx)
export async function generateStaticParams() {
  const uris = await getAllUris();
  
  // Return split slugs for all available pages
  return uris.map((uri) => ({
    slug: uri.split("/"),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  // Handle path mappings
  let uri = `/${slug.join("/")}`;
  if (slug[0] === "our-works" && slug.length > 1) {
    uri = `/projects/${slug.slice(1).join("/")}`;
  }

  const data = await getPageData(uri);
  if (!data || data.length === 0) return {};

  const seoData = await formatSeoMeta(data);
  return seoData;
}

export default async function CatchAllPage({ params }) {
  const { slug } = await params;
  
  // Handle path mappings
  let uri = `/${slug.join("/")}`;
  if (slug[0] === "our-works" && slug.length > 1) {
    uri = `/projects/${slug.slice(1).join("/")}`;
  }

  const data = await getPageData(uri);

  if (!data || !data.blocks) {
    notFound();
  }

  return <RenderBlocksHelper blocks={data?.blocks} />;
}

// Revalidate every 24 hours (ISR) fallback
export const revalidate = 86400;
