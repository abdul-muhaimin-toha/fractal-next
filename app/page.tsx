import GetInTouch from "@/components/sections/globals/getInTouch/GetInTouch";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import InsightsSection from "@/components/sections/home/insights/InsightsSection";
import OurClientsSection from "@/components/sections/home/ourclients/OurClientsSection";
import OurWorkSection from "@/components/sections/globals/ourWork/OurWorkSection";
import ProjectsSection from "@/components/sections/home/projects/ProjectsSection";
import TestimonialSection from "@/components/sections/home/testimonials/TestimonialSection";
import WhatWeDoSection from "@/components/sections/home/whatWeDo/WhatWeDoSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OurWorkSection />
      <ProjectsSection />
      <InsightsSection />
      <WhatWeDoSection />
      <OurClientsSection />
      <TestimonialSection />
      <GetInTouch />
    </>
  );
}
