import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";

const WHAT_WE_DO_ICONS = [
  "/home/what-we-do/icon-(1).svg",
  "/home/what-we-do/icon-(2).svg",
  "/home/what-we-do/icon-(3).svg",
  "/home/what-we-do/icon-(4).svg",
  "/home/what-we-do/icon-(5).svg",
];

function IconItem({ src }: { src: string }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden">
      <Image src={src} alt="" fill className="h-full w-full object-contain" />
    </div>
  );
}

function IconsGrid() {
  return (
    <div className="grid w-full grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-2 md:grid-cols-5">
      <IconItem src={WHAT_WE_DO_ICONS[0]} />
      <div className="sm:hidden" />
      {WHAT_WE_DO_ICONS.slice(1).map((icon, idx) => (
        <IconItem key={idx} src={icon} />
      ))}
    </div>
  );
}

function WhatWeDoContent() {
  return (
    <div className="flex w-full flex-col gap-5 lg:mt-5 lg:gap-7.5">
      <BodyText variant="body2" className="text-black">
        Research and analysis
      </BodyText>
      <BodyText className="text-black" variant="body1">
        Through consultation, audience research, and landscape and capacity
        audits, we help organizations uncover the real: the social currents that
        shape perception, conviction, and behavior, guiding communication
        strategies grounded in understanding.
      </BodyText>
    </div>
  );
}

function WhatWeDoSection() {
  return (
    <section className="bg-gray">
      <div className="container-fractal">
        <div className="flex w-full flex-col gap-7.5 py-15 lg:gap-15 lg:py-30">
          <Heading data-aos="fade-up" className="text-black" variant="h1">
            What We Do
          </Heading>

          <IconsGrid />

          <WhatWeDoContent />
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
