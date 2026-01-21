import { BodyText } from "@/components/globals/typography/BodyText";

function Resources() {
  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center pt-25">
          <div className="flex w-full flex-col items-center justify-center gap-15 border-t border-t-[#EBEBEB]/40 py-25">
            <div
              data-aos="fade-up"
              className="items-top flex w-full flex-col justify-between gap-10 lg:flex-row"
            >
              <BodyText
                className="max-w-full grow lg:max-w-94 xl:max-w-99"
                variant="title4"
              >
                Squeezed Resources
              </BodyText>
              <BodyText
                className="max-w-full grow opacity-80 lg:max-w-150 xl:max-w-200"
                variant="body1"
              >
                International student caps, tuition freezes, rising costs,
                shrinking revenues. Universities are experiencing financial
                precarity.
              </BodyText>
            </div>
            <div
              data-aos="fade-up"
              className="items-top flex w-full flex-col justify-between gap-10 lg:flex-row"
            >
              <BodyText
                className="max-w-full grow lg:max-w-94 xl:max-w-99"
                variant="title4"
              >
                Uncertain Futures
              </BodyText>
              <BodyText
                className="max-w-full grow opacity-80 lg:max-w-150 xl:max-w-200"
                variant="body1"
              >
                AI threatening jobs, political and economic uncertainty, trust
                in higher education eroding (especially in arts)
              </BodyText>
            </div>
            <div
              data-aos="fade-up"
              className="items-top flex w-full flex-col justify-between gap-10 lg:flex-row"
            >
              <BodyText
                className="max-w-full grow lg:max-w-94 xl:max-w-99"
                variant="title4"
              >
                Saturated Lansdscape
              </BodyText>
              <BodyText
                className="max-w-full grow opacity-80 lg:max-w-150 xl:max-w-200"
                variant="body1"
              >
                Increased competition among universities, focus on developing
                career skills, prioritizing hard skills (STEM)
              </BodyText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resources;
