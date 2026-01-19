import { BodyText } from "@/components/globals/typography/BodyText";
import Image from "next/image";

function TheSolutionSection() {
  return (
    <section className="bg-white">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center py-25">
          <div className="flex w-full flex-col items-center justify-center gap-10">
            <BodyText variant="title1" className="w-full text-black">
              やめてください
            </BodyText>
            <div className="grid w-full grid-cols-1 gap-20 xl:grid-cols-[1fr_562px]">
              <div className="flex h-full w-full flex-col justify-between gap-10">
                <BodyText variant="body1" className="text-black opacity-80">
                  Instead of telling people that arts education can help them
                  compete in the face of AI, we wanted to show them that it can
                  help them take back control of the game - to write their own
                  future.
                </BodyText>
                <BodyText variant="body1" className="text-black opacity-80">
                  We introduced the concept of “Human Intelligence” as a central
                  campaign platform, celebrating the distinctly human qualities
                  fostered by arts education: critical thinking, empathy,
                  creativity, adaptability, and agency. The campaign redefined
                  the Faculty’s value proposition in terms of its relevance to
                  shaping the future, rather than simply surviving it.
                </BodyText>
              </div>
              <div className="flex h-full w-full flex-col justify-between gap-2.5 md:grid md:grid-cols-2 xl:flex xl:h-full xl:flex-col xl:justify-between">
                <Image
                  src="/our-work/the-solution/solution.png"
                  alt="Challenges"
                  className="h-full w-full object-contain"
                  width={562}
                  height={270}
                />
                <Image
                  src="/our-work/the-solution/solution.png"
                  alt="Challenges"
                  className="h-full w-full object-contain"
                  width={562}
                  height={270}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheSolutionSection;
