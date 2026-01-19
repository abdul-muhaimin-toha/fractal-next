import { BodyText } from "@/components/globals/typography/BodyText";

function ProjectScope() {
  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center py-25">
          <div className="flex w-full flex-col items-center justify-center gap-10 border-y border-y-[#EBEBEB]/40 py-25">
            <BodyText variant="title1" className="w-full">
              Project Scope
            </BodyText>
            <div className="grid w-full grid-cols-1 gap-18.5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-18.5">
              <div className="flex w-full flex-col gap-2.5">
                <BodyText variant="title2" className="text-ocean-green">
                  Objectives
                </BodyText>
                <BodyText variant="body1" className="text-white opacity-60">
                  Brand Transformation
                </BodyText>
                <BodyText variant="body1" className="text-white opacity-60">
                  Brand Awareness
                </BodyText>
                <BodyText variant="body1" className="text-white opacity-60">
                  Student Recruitment
                </BodyText>
              </div>
              <div className="flex w-full flex-col gap-2.5">
                <BodyText variant="title2" className="text-ocean-green">
                  Objectives
                </BodyText>
                <BodyText variant="body1" className="text-white opacity-60">
                  Video Production
                </BodyText>
                <BodyText variant="body1" className="text-white opacity-60">
                  Creative Development
                </BodyText>
                <BodyText variant="body1" className="text-white opacity-60">
                  Copy & Content Writing
                </BodyText>
                <BodyText variant="body1" className="text-white opacity-60">
                  Campaign Strategy
                </BodyText>
                <BodyText variant="body1" className="text-white opacity-60">
                  Campaign Execution (Media Buying, Optimization)
                </BodyText>
              </div>
              <div className="flex w-full flex-col gap-2.5">
                <BodyText variant="title2" className="text-ocean-green">
                  Objectives
                </BodyText>
                <BodyText variant="body1" className="text-white opacity-60">
                  Spring-Summer 2025
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectScope;
