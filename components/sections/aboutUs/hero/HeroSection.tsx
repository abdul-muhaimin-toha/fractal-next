import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";

function HeroContent() {
  return (
    <div className="md:max-max my-30 flex flex-col items-start justify-center gap-7.5 md:gap-10 lg:max-w-6xl lg:gap-15 xl:max-w-max 2xl:max-w-268">
      <Heading
        variant="h1"
        className="from-gradient-green to-gradient-orange w-fit bg-linear-to-r bg-clip-text text-transparent"
      >
        We help you
        <br />
        promote real change.
      </Heading>
      <BodyText variant="body1" className="w-full text-white">
        We are a strategic communications agency with over ten years of
        experience across the public, nonprofit, and private sectors. We
        specialize in solving complex communications challenges, particularly
        when the goal is to shift not only individual behaviour but broader
        societal norms and expectations. We combine research, creativity, and
        technical precision to help organizations understand the real conditions
        they face and build communications that move people to act.
      </BodyText>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-dark relative z-10 overflow-hidden mt-20.5 lg:mt-33.5 xl:mt-43.75">
      <div className="container-fractal z-10">
        {/* Hero Content */}
        <div
          data-aos="fade-up"
          className="flex w-full z-30 flex-col items-start justify-center"
        >
          <HeroContent />
        </div>
      </div>
      {/* Hero Images */}
      <Image
        data-aos="fade-left"
        src="/about-us/hero/hero-mobile.svg"
        alt="Hero tree"
        width={360}
        height={606}
        className="absolute top-0 right-0 bottom-0 left-0 -z-10 h-full w-full object-cover object-bottom-right sm:hidden"
      />
      <Image
        data-aos="fade-left"
        src="/about-us/hero/hero-desktop.svg"
        alt="Hero tree"
        width={360}
        height={606}
        className="absolute top-0 right-0 bottom-0 left-0 -z-10 hidden h-full w-full object-cover object-bottom-right sm:block"
      />
    </section>
  );
}

export default HeroSection;
