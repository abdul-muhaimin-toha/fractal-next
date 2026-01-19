import { BodyText } from "@/components/globals/typography/BodyText";

function TheResultsSection() {
  return (
    <section className="bg-white">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center py-25">
          <div className="flex w-full flex-col items-center justify-center gap-10">
            <BodyText variant="title1" className="w-full text-black">
              The Results
            </BodyText>
            <BodyText variant="body1" className="w-full text-black opacity-80">
              We knew from the start that this campaign was unusually authentic
              and sincere for a university brand initiative, but even we were
              surprised by the strength and consistency of the response.
            </BodyText>
            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-24">
              <div
                data-aos="fade-right"
                className="flex aspect-video h-auto w-full flex-col items-center justify-center gap-6 bg-[#74C2CA] text-center sm:aspect-square lg:col-span-7"
              >
                <BodyText variant="title4" className="text-black">
                  12.74%
                </BodyText>
                <BodyText variant="title2" className="text-black">
                  Click-through Rate
                </BodyText>
              </div>
              <div className="flex aspect-video h-full w-full flex-col items-center justify-center gap-6 bg-[#7EC4A7] text-center sm:aspect-square lg:col-span-10 lg:aspect-auto">
                <BodyText variant="title4" className="text-black">
                  1,221,284
                </BodyText>
                <BodyText variant="title2" className="text-black">
                  Video Views
                </BodyText>
              </div>
              <div
                data-aos="fade-left"
                className="flex aspect-video h-auto w-full flex-col items-center justify-center gap-6 bg-[#A6C780] text-center sm:aspect-square lg:col-span-7"
              >
                <BodyText variant="title4" className="text-black">
                  180,510
                </BodyText>
                <BodyText variant="title2" className="text-black">
                  Site Visits
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheResultsSection;
