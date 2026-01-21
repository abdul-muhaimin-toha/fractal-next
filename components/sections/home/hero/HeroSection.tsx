import { Button } from "@/components/globals/buttons/Button";
import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";

function HeroContent() {
  return (
    <div
      data-aos="fade-up"
      className="z-10 my-30.5 flex flex-col items-start justify-center gap-7.5 sm:max-w-2xl md:gap-10 lg:max-w-3xl xl:max-w-223 2xl:mt-85 2xl:mb-50"
    >
      <Heading variant="h2" className="w-full text-white">
        Embracing the real to create change.
      </Heading>
      <BodyText variant="body1" className="text-ocean-orange w-full">
        We help organizations find strength in their complexity and
        contradictions, turning insight into practical strategy and storytelling
        that move people to act.
      </BodyText>
      <Button href="/about-us" variant="icon" className="md:mt-2.5">
        More about us
      </Button>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-dark relative mt-20.5 lg:mt-33.5 xl:mt-43.75">
      <div className="container-fractal">
        {/* Hero Content */}
        <div className="flex w-full flex-col items-start justify-center">
          <HeroContent />
        </div>

        {/* Hero Images */}
        <Image
          src="/home/hero-banner/fractal-tree-mobile.svg"
          alt="Hero tree"
          width={360}
          height={606}
          className="absolute top-0 right-0 bottom-0 left-0 z-0 h-full w-full object-cover object-bottom-right sm:object-top-right md:hidden"
        />
        <Image
          src="/home/hero-banner/fractal-tree-desktop.svg"
          alt="Hero tree"
          width={360}
          height={606}
          className="absolute top-0 right-0 bottom-0 left-0 z-0 hidden h-full w-full object-cover object-top-right md:block"
        />
      </div>
    </section>
  );
}

export default HeroSection;
