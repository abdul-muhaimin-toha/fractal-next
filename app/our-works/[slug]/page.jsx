import { getPageData } from "@/graphql/components/getPageData";
import { formatSeoMeta } from "@/utils/formatSeoMeta";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getPageData(`/projects/${slug}`);
  const seoData = await formatSeoMeta(data);
  return seoData;
}

export default async function OurWorkDetailsPage({ params }) {
  const { slug } = await params;
  const ourWorkDetailsData = await getPageData(`/projects/${slug}`);
  return <RenderBlocksHelper blocks={ourWorkDetailsData?.blocks} />;
}
