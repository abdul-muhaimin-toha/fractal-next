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
import DetailsSection from "./sections/globals/details/DetailsSection";
import HeadingSection from "./sections/globals/heading/HeadingSection";
import GlobalHeroSection from "./sections/globals/hero/HeroSection";
import ListSection from "./sections/globals/list/ListSection";
import ParagraphSection from "./sections/globals/paragraph/ParagraphSection";
import QuoteSection from "./sections/globals/quote/QuoteSection";
import CodeSection from "./sections/globals/code/CodeSection";
import MathSection from "./sections/globals/math/MathSection";
import PreformattedSection from "./sections/globals/preformatted/PreformattedSection";
import VerseSection from "./sections/globals/verse/VerseSection";
import RichContentSection from "./sections/globals/richContent/RichContentSection";
import TableSection from "./sections/globals/table/TableSection";
import GlobalOurWorkSection from "./sections/globals/ourWork/OurWorkSection";
import HeroSection from "./sections/home/hero/HeroSection";
import InsightsSection from "./sections/home/insights/InsightsSection";
import OurClientsSection from "./sections/home/ourclients/OurClientsSection";
import ProjectsSection from "./sections/home/projects/ProjectsSection";
import TestimonialSection from "./sections/home/testimonials/TestimonialSection";
import WhatWeDoSection from "./sections/home/whatWeDo/WhatWeDoSection";
import ArticlesSection from "./sections/insights/articlesSection/ArticlesSection";
import OurWorkSection from "./sections/ourWork/ourWorkSection/OurWorkSection";
import ThankYouHeroSection from "./sections/thankYou/HeroSection";

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

  "carbon-fields/about-us-hero": AboutUsHeroSection,
  "carbon-fields/team-member-showcase": FractalTeamSection,

  // //////////////////////
  // insights
  // //////////////////////
  "carbon-fields/hero-insight": GlobalHeroSection,
  "carbon-fields/all-insights-showcase": ArticlesSection,

  // //////////////////////
  // our-work
  // //////////////////////
  "carbon-fields/all-projects-showcase": OurWorkSection,

  // //////////////////////
  //  our-work details
  // //////////////////////
  "carbon-fields/project-overview": OverviewSection,
  "carbon-fields/project-scope": ProjectScope,
  "carbon-fields/project-challenge": TheChallengeSection,
  "carbon-fields/project-detail-entries": Resources,
  "carbon-fields/project-solution": TheSolutionSection,
  "carbon-fields/what-we-did": CaseStudyWhatWeDoSection,
  "carbon-fields/project-results": TheResultsSection,
  "carbon-fields/project-beyond-metrics": BeyondTheMatrixSection,

  // //////////////////////
  // contact-us
  // //////////////////////
  "carbon-fields/contact-us": ContactUsGetInTouch,

  // //////////////////////
  // thank you page
  // //////////////////////
  "carbon-fields/thank-you-hero": ThankYouHeroSection,

  // //////////////////////
  // core blocks
  // //////////////////////
  "carbon-fields/core-paragraph": ParagraphSection,
  "carbon-fields/stretchy-paragraph": ParagraphSection,
  "carbon-fields/core-heading": HeadingSection,
  "carbon-fields/stretchy-heading": HeadingSection,
  "carbon-fields/core-list": ListSection,
  "carbon-fields/core-quote": QuoteSection,
  "carbon-fields/core-pullquote": QuoteSection,
  "carbon-fields/core-code": CodeSection,
  "carbon-fields/core-math": MathSection,
  "carbon-fields/core-preformatted": PreformattedSection,
  "carbon-fields/core-verse": VerseSection,
  "carbon-fields/core-classic": ParagraphSection,
  "carbon-fields/core-table": TableSection,
  "carbon-fields/core-details": DetailsSection,
};

export default blockComponentsMapping;
