import { BodyText } from "@/components/globals/typography/BodyText";
import Image from "next/image";

function TheChallengeSection() {
  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center gap-10">
            <BodyText variant="title1" className="w-full">
              The Challenge
            </BodyText>
            <div className="grid w-full grid-cols-1 gap-20 xl:grid-cols-[1fr_562px]">
              <div className="flex h-full w-full flex-col justify-between gap-10">
                <BodyText variant="body1" className="text-white opacity-80">
                  How do we communicate the value of an arts education in 2025
                  and position the Faculty as bold and innovative in the face of
                  AI and algorithmic determinism?
                </BodyText>
                <BodyText variant="body1" className="text-white opacity-80">
                  In response to this climate of uncertainty and rapid change,
                  most universities are repeating some version of the same
                  marketing message: improve your skills to better compete. 
                </BodyText>
                <BodyText variant="body1" className="text-white opacity-80">
                  We believe that message isn’t connecting because it doesn't
                  address a core feeling of our moment: that our future is being
                  determined for us, not by us. And that feeling is preventing
                  us from even imagining what kind of future we might want.
                </BodyText>
              </div>
              <div className="aspect-video h-full w-full bg-red-400 xl:aspect-562/630">
                <Image
                  src="/our-work/the-challenge/challenge.png"
                  alt="Challenges"
                  className="h-full w-full object-cover"
                  width={562}
                  height={630}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheChallengeSection;
