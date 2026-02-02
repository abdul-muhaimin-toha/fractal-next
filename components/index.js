
import FractalTeamSection from "./sections/aboutUs/fractalTeam/FractalTeamSection";
import AboutUsHeroSection from "./sections/aboutUs/hero/HeroSection";
import BeyondTheMatrixSection from "./sections/caseStudy/beyondTheMatrix/BeyondTheMatrixSection";
import OverviewSection from "./sections/caseStudy/overview/OverviewSection";
import ProjectScope from "./sections/caseStudy/projectScope/ProjectScope";
import Resources from "./sections/caseStudy/resources/Resources";
import TheChallengeSection from "./sections/caseStudy/theChallenge/TheChallengeSection";
import TheResultsSection from "./sections/caseStudy/theResults/TheResultsSection";
import TheSolutionSection from "./sections/caseStudy/theSolutions/TheSolutionSection";
import CaseStudyWhatWeDoSection from "./sections/caseStudy/whatWeDo/WhatWeDoSection";
import ContactUsGetInTouch from "./sections/contactUs/GetInTouch";
import GetInTouch from "./sections/globals/getInTouch/GetInTouch";
import GlobalHeroSection from "./sections/globals/hero/HeroSection";
import GlobalOurWorkSection from "./sections/globals/ourWork/OurWorkSection";
import HeroSection from "./sections/home/hero/HeroSection";
import InsightsSection from "./sections/home/insights/InsightsSection";
import OurClientsSection from "./sections/home/ourclients/OurClientsSection";
import ProjectsSection from "./sections/home/projects/ProjectsSection";
import TestimonialSection from "./sections/home/testimonials/TestimonialSection";
import WhatWeDoSection from "./sections/home/whatWeDo/WhatWeDoSection";
import ArticlesSection from "./sections/insights/articlesSection/ArticlesSection";
import OurWorkSection from "./sections/ourWork/ourWorkSection/OurWorkSection";

const blockComponentsMapping = {
  // //////////////////////
  // homepage
  // //////////////////////

  "carbon-fields/hero": HeroSection,
  "carbon-fields/our-work": GlobalOurWorkSection,
  "carbon-fields/project-selected-showcase": ProjectsSection,
  "carbon-fields/insight-selected-showcase": InsightsSection,
  "carbon-fields/what-we-do": WhatWeDoSection,
  "carbon-fields/our-clients": OurClientsSection,
  "carbon-fields/testimonials": TestimonialSection,
  "carbon-fields/get-in-touch": GetInTouch,

  // //////////////////////
  // about-us
  // //////////////////////

  "carbon-fields/about-us-hero" : AboutUsHeroSection,
  "carbon-fields/team-member-showcase" : FractalTeamSection,

  // //////////////////////
  // insights
  // //////////////////////
  "carbon-fields/hero-insight" : GlobalHeroSection,
  "carbon-fields/all-insights-showcase" : ArticlesSection,

  // //////////////////////
  // our-works
  // //////////////////////
  "carbon-fields/all-projects-showcase" : OurWorkSection,

  // //////////////////////
  //  our-works details
  // //////////////////////
  "carbon-fields/project-overview" : OverviewSection,
  "carbon-fields/project-scope" : ProjectScope,
  "carbon-fields/project-challenge" : TheChallengeSection,
  "carbon-fields/project-detail-entries" : Resources,
  "carbon-fields/project-solution" : TheSolutionSection,
  "carbon-fields/what-we-did" : CaseStudyWhatWeDoSection,
  "carbon-fields/project-results" : TheResultsSection,
  "carbon-fields/project-beyond-metrics" : BeyondTheMatrixSection,

  // //////////////////////
  // contact-us
  // //////////////////////
  "carbon-fields/contact-us" : ContactUsGetInTouch,
};

export default blockComponentsMapping;