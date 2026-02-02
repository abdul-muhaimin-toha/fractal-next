import { getPageData } from "@/graphql/components/getPageData";
import { formatSeoMeta } from "@/utils/formatSeoMeta";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const data = await getPageData("/insights-lists/");
  const seoData = await formatSeoMeta(data);
  return seoData;
}

export default async function InsightsPage() {
  const insightsData = await getPageData("/insights-lists/");
  return <RenderBlocksHelper blocks={insightsData?.blocks} />;
}
