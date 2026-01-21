import GetInTouch from "@/components/sections/globals/getInTouch/GetInTouch";
import ArticlesSection from "@/components/sections/insights/articlesSection/ArticlesSection";
import HeroSection from "@/components/sections/globals/hero/HeroSection";

export default function InsightsPage() {
  return (
    <>
      <HeroSection
        title="Insights"
        description="The latest on what's shaping change in a mission-driven world."
      />
      <ArticlesSection />
      <GetInTouch />
    </>
  );
}
