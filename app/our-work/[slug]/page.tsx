import BeyondTheMatrixSection from "@/components/sections/caseStudy/beyondTheMatrix/BeyondTheMatrixSection";
import OverviewSection from "@/components/sections/caseStudy/overview/OverviewSection";
import ProjectScope from "@/components/sections/caseStudy/projectScope/ProjectScope";
import Resources from "@/components/sections/caseStudy/resources/Resources";
import TheChallengeSection from "@/components/sections/caseStudy/theChallenge/TheChallengeSection";
import TheResultsSection from "@/components/sections/caseStudy/theResults/TheResultsSection";
import TheSolutionSection from "@/components/sections/caseStudy/theSolutions/TheSolutionSection";
import WhatWeDoSection from "@/components/sections/caseStudy/whatWeDo/WhatWeDoSection";
import GetInTouch from "@/components/sections/globals/getInTouch/GetInTouch";

export default function OurWorkDetailsPage() {
  return (
    <>
      <OverviewSection />
      <ProjectScope />
      <TheChallengeSection />
      <Resources />
      <TheSolutionSection />
      <WhatWeDoSection />
      <TheResultsSection />
      <BeyondTheMatrixSection />
      <GetInTouch />
    </>
  );
}
