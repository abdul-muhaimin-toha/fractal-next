import { BodyText } from "@/components/globals/typography/BodyText";
import Image from "next/image";

function BeyondTheMatrixSection() {
  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center py-25">
          <div className="flex w-full flex-col items-center justify-center gap-10">
            <BodyText variant="title1" className="w-full text-white">
              The Results
            </BodyText>
            <BodyText variant="body1" className="w-full text-white opacity-80">
              The campaign achieved something more rare: a unifying cultural
              moment within the higher-education community. Students, educators
              and administrators across the country rallied behind the message
              while receiving coverage in national academic media.
            </BodyText>
            <BodyText variant="body1" className="w-full text-white opacity-80">
              The campaign has helped re-establish the Faculty’s voice in the
              public conversation, and demonstrates the power of strategic,
              emotionally intelligent marketing.
            </BodyText>
            <div className="mt-10 flex w-full flex-col items-start justify-center gap-10 lg:flex-row lg:items-center 2xl:gap-20">
              <Image
                className="aspect-square w-full shrink-0 object-cover sm:w-60 xl:w-77.5"
                alt="Avatar"
                src="/our-work/beyond-matrix/client-1.png"
                width={310}
                height={310}
              />
              <div className="flex flex-col items-center justify-center gap-6 xl:gap-17.5">
                <BodyText variant="title3" className="text-white opacity-80">
                  Fractal is my go-to-fixer; for marketing problems, research
                  gaps, and strategic brainstorming. They never let me down.
                </BodyText>
                <div className="flex w-full flex-col gap-2">
                  <BodyText variant="title4">Kevin Kee</BodyText>
                  <BodyText variant="body3" className="text-gray">
                    Dean, University of Ottawa, Faculty of Arts
                  </BodyText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeyondTheMatrixSection;
