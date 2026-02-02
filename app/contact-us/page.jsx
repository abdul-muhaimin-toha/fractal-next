
import { getPageData } from "@/graphql/components/getPageData";
import { formatSeoMeta } from "@/utils/formatSeoMeta";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const data = await getPageData("/contact-us/");
  const seoData = await formatSeoMeta(data);
  return seoData;
}

export default async function ContactUsPage() {
  const contactUsData = await getPageData("/contact-us/");
  return <RenderBlocksHelper blocks={contactUsData?.blocks} />;
}

