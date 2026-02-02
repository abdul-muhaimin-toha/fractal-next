import { getPageData } from "@/graphql/components/getPageData";
import { formatSeoMeta } from "@/utils/formatSeoMeta";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const data = await getPageData("/");
  const seoData = await formatSeoMeta(data);
  return seoData;
}

export default async function HomePage() {
  const homepageData = await getPageData("/");
  return <RenderBlocksHelper blocks={homepageData?.blocks} />;
}
