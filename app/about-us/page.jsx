import FractalTeamSection from "@/components/sections/aboutUs/fractalTeam/FractalTeamSection";
import HeroSection from "@/components/sections/aboutUs/hero/HeroSection";
import GetInTouch from "@/components/sections/globals/getInTouch/GetInTouch";
import { getPageData } from "@/graphql/components/getPageData";
import { formatSeoMeta } from "@/utils/formatSeoMeta";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const data = await getPageData("/about-us/");
  const seoData = await formatSeoMeta(data);
  return seoData;
}

export default async function AboutUsPage() {
  const aboutUsData = await getPageData("/about-us/");
  return <RenderBlocksHelper blocks={aboutUsData?.blocks} />;
}
