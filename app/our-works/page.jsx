import { getPageData } from "@/graphql/components/getPageData";
import { formatSeoMeta } from "@/utils/formatSeoMeta";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const data = await getPageData("/our-works");
  const seoData = await formatSeoMeta(data);
  return seoData;
}

export default async function OurWorkPage() {
  const ourWorksData = await getPageData("/our-works");
  return <RenderBlocksHelper blocks={ourWorksData?.blocks} />;
}
