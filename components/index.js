import dynamic from "next/dynamic";

const blockComponentsMapping = {
  // //////////////////////
  // homepage
  // //////////////////////

  "carbon-fields/hero": dynamic(() =>
    import("./sections/home/hero/HeroSection"),
  ),
  "carbon-fields/our-work": dynamic(() =>
    import("./sections/globals/ourWork/OurWorkSection"),
  ),
  "carbon-fields/project-selected-showcase": dynamic(() =>
    import("./sections/home/projects/ProjectsSection"),
  ),
  "carbon-fields/insight-selected-showcase": dynamic(() =>
    import("./sections/home/insights/InsightsSection"),
  ),
  "carbon-fields/what-we-do": dynamic(() =>
    import("./sections/home/whatWeDo/WhatWeDoSection"),
  ),
  "carbon-fields/our-clients": dynamic(() =>
    import("./sections/home/ourclients/OurClientsSection"),
  ),
  "carbon-fields/testimonials": dynamic(() =>
    import("./sections/home/testimonials/TestimonialSection"),
  ),
  "carbon-fields/get-in-touch": dynamic(() =>
    import("./sections/globals/getInTouch/GetInTouch"),
  ),

  // //////////////////////
  // about-us
  // //////////////////////

  "carbon-fields/about-us-hero": dynamic(() =>
    import("./sections/aboutUs/hero/HeroSection"),
  ),
  "carbon-fields/team-member-showcase": dynamic(() =>
    import("./sections/aboutUs/fractalTeam/FractalTeamSection"),
  ),

  // //////////////////////
  // insights
  // //////////////////////
  "carbon-fields/hero-insight": dynamic(() =>
    import("./sections/globals/hero/HeroSection"),
  ),
  "carbon-fields/all-insights-showcase": dynamic(() =>
    import("./sections/insights/articlesSection/ArticlesSection"),
  ),

  // //////////////////////
  // our-work
  // //////////////////////
  "carbon-fields/all-projects-showcase": dynamic(() =>
    import("./sections/ourWork/ourWorkSection/OurWorkSection"),
  ),

  // //////////////////////
  //  our-work details
  // //////////////////////
  "carbon-fields/project-overview": dynamic(() =>
    import("./sections/caseStudy/overview/OverviewSection"),
  ),
  "carbon-fields/project-scope": dynamic(() =>
    import("./sections/caseStudy/projectScope/ProjectScope"),
  ),
  "carbon-fields/project-challenge": dynamic(() =>
    import("./sections/caseStudy/theChallenge/TheChallengeSection"),
  ),
  "carbon-fields/project-detail-entries": dynamic(() =>
    import("./sections/caseStudy/resources/Resources"),
  ),
  "carbon-fields/project-solution": dynamic(() =>
    import("./sections/caseStudy/theSolutions/TheSolutionSection"),
  ),
  "carbon-fields/what-we-did": dynamic(() =>
    import("./sections/caseStudy/whatWeDo/WhatWeDoSection"),
  ),
  "carbon-fields/project-results": dynamic(() =>
    import("./sections/caseStudy/theResults/TheResultsSection"),
  ),
  "carbon-fields/project-beyond-metrics": dynamic(() =>
    import("./sections/caseStudy/beyondTheMatrix/BeyondTheMatrixSection"),
  ),

  // //////////////////////
  // contact-us
  // //////////////////////
  "carbon-fields/contact-us": dynamic(() =>
    import("./sections/contactUs/GetInTouch"),
  ),

  // //////////////////////
  // thank you page
  // //////////////////////
  "carbon-fields/thank-you-hero": dynamic(() =>
    import("./sections/thankYou/HeroSection"),
  ),

  // //////////////////////
  // core blocks
  // //////////////////////
  "carbon-fields/core-paragraph": dynamic(() =>
    import("./sections/globals/paragraph/ParagraphSection"),
  ),
  "carbon-fields/stretchy-paragraph": dynamic(() =>
    import("./sections/globals/paragraph/ParagraphSection"),
  ),
  "carbon-fields/core-heading": dynamic(() =>
    import("./sections/globals/heading/HeadingSection"),
  ),
  "carbon-fields/stretchy-heading": dynamic(() =>
    import("./sections/globals/heading/HeadingSection"),
  ),
  "carbon-fields/core-list": dynamic(() =>
    import("./sections/globals/list/ListSection"),
  ),
  "carbon-fields/core-quote": dynamic(() =>
    import("./sections/globals/quote/QuoteSection"),
  ),
  "carbon-fields/core-pullquote": dynamic(() =>
    import("./sections/globals/quote/QuoteSection"),
  ),
  "carbon-fields/core-code": dynamic(() =>
    import("./sections/globals/code/CodeSection"),
  ),
  "carbon-fields/core-math": dynamic(() =>
    import("./sections/globals/math/MathSection"),
  ),
  "carbon-fields/core-preformatted": dynamic(() =>
    import("./sections/globals/preformatted/PreformattedSection"),
  ),
  "carbon-fields/core-verse": dynamic(() =>
    import("./sections/globals/verse/VerseSection"),
  ),
  "carbon-fields/core-classic": dynamic(() =>
    import("./sections/globals/paragraph/ParagraphSection"),
  ),
  "carbon-fields/core-table": dynamic(() =>
    import("./sections/globals/table/TableSection"),
  ),
  "carbon-fields/core-details": dynamic(() =>
    import("./sections/globals/details/DetailsSection"),
  ),
};

export default blockComponentsMapping;
