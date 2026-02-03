import { getPageData } from "@/graphql/components/getPageData";
import { formatSeoMeta } from "@/utils/formatSeoMeta";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const data = await getPageData("/");
  if (!data || data.length === 0) return {};

  const seoData = await formatSeoMeta(data);
  return seoData;
}

export default async function HomePage() {
  const data = await getPageData("/");

  if (!data || !data.blocks) {
    notFound();
  }

  return <RenderBlocksHelper blocks={data?.blocks} />;
}

// Revalidate every 24 hours (ISR) fallback
export const revalidate = 86400;
