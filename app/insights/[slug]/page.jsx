import { getPageData } from "@/graphql/components/getPageData";
import { formatSeoMeta } from "@/utils/formatSeoMeta";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getPageData(`/insights/${slug}`);
  const seoData = await formatSeoMeta(data);
  return seoData;
}

export default async function InsightsDetailsPage({ params }) {
  const { slug } = await params;
  const insightsDetailsData = await getPageData(`/insights/${slug}`);
  return <RenderBlocksHelper blocks={insightsDetailsData?.blocks} />;
}
