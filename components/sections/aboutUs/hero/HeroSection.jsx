import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";

function HeroContent({ title, description }) {
  return (
    <div className="md:max-max my-30 flex flex-col items-start justify-center gap-7.5 md:gap-10 lg:max-w-6xl lg:gap-15 xl:max-w-max 2xl:max-w-268">
      {title && (
        <Heading
          variant="h1"
          className="from-gradient-green to-gradient-orange w-fit bg-linear-to-r bg-clip-text text-transparent"
        >
          {title}
        </Heading>
      )}
      {description && (
        <BodyText variant="body1" className="w-full text-white">
          {description}
        </BodyText>
      )}
    </div>
  );
}

function HeroSection({ data }) {
  const content = data?.data || {};
  const { title, description } = content;

  return (
    <section className="bg-dark relative z-10 mt-20.5 overflow-hidden lg:mt-33.5 xl:mt-43.75">
      <div className="container-fractal z-10">
        {/* Hero Content */}
        <div className="z-30 flex w-full flex-col items-start justify-center">
          <HeroContent title={title} description={description} />
        </div>
      </div>
      {/* Hero Images */}
      <Image
        src="/about-us/hero/hero-mobile.svg"
        alt="Hero tree"
        width={360}
        height={606}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom-right sm:hidden"
      />
      <Image
        src="/about-us/hero/hero-desktop.svg"
        alt="Hero tree"
        width={360}
        height={606}
        className="absolute inset-0 -z-10 hidden h-full w-full object-cover object-bottom-right sm:block"
      />
    </section>
  );
}

export default HeroSection;
