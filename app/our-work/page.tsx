import GetInTouch from "@/components/sections/globals/getInTouch/GetInTouch";
import HeroSection from "@/components/sections/globals/hero/HeroSection";
import OurWorkSection from "@/components/sections/ourWork/ourWorkSection/OurWorkSection";

export default function OurWorkPage() {
  return (
    <>
      <HeroSection
        title="Our Work"
        description="The latest on what's shaping change in a mission-driven world."
      />
      <OurWorkSection />
      <GetInTouch />
    </>
  );
}
