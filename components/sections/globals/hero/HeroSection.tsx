import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";

function HeroContent() {
  return (
    <div className="z-10 flex flex-col items-start justify-center gap-7.5 py-30 md:max-w-3xl md:gap-10 lg:max-w-4xl lg:gap-15 xl:max-w-268">
      <Heading
        variant="h1"
        className="from-gradient-green to-gradient-orange w-fit bg-linear-to-r bg-clip-text text-transparent"
      >
        Insights
      </Heading>
      <BodyText variant="body1" className="w-full text-white">
        The latest on what&apos;s shaping change in a mission-driven world.
      </BodyText>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-dark relative mt-20 2xl:mt-45">
      <div className="container-fractal">
        {/* Hero Content */}
        <div className="flex w-full flex-col items-start justify-center">
          <HeroContent />
        </div>

        {/* Hero Images */}
        <Image
          src="/about-us/hero/hero-mobile.svg"
          alt="Hero tree"
          width={360}
          height={606}
          className="absolute top-0 right-0 bottom-0 left-0 z-0 h-full w-full object-cover object-bottom-right sm:hidden"
        />
        <Image
          src="/insights/hero/bg-desktop.svg"
          alt="Hero tree"
          width={360}
          height={606}
          className="absolute top-0 right-0 bottom-0 left-0 z-0 hidden h-full w-full object-contain object-bottom-right sm:block"
        />
      </div>
    </section>
  );
}

export default HeroSection;
