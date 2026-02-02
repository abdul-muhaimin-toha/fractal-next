import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";

function HeroContent({ title, description }) {
  return (
    <div
      data-aos="fade-up"
      className="z-10 flex flex-col items-start justify-center gap-7.5 py-30 md:max-w-3xl md:gap-10 lg:max-w-4xl lg:gap-15 xl:max-w-268"
    >
      {title && (
        <Heading
          variant="h1"
          className="from-gradient-green to-gradient-orange w-fit bg-linear-to-r bg-clip-text text-transparent"
          >{title}
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
  const content = data?.data;

  if (!content) return null;

  const { title, description } = content;

  return (
    <section className="bg-dark relative mt-20.5 overflow-hidden lg:mt-33.5 xl:mt-43.75">
      <div className="container-fractal">
        {/* Hero Content */}
        <div className="flex w-full flex-col items-start justify-center">
          <HeroContent title={title} description={description} />
        </div>

        {/* Hero Images */}
        <Image
          data-aos="fade-left"
          src="/about-us/hero/hero-mobile.svg"
          alt="Hero tree"
          width={360}
          height={606}
          className="absolute inset-0 z-0 h-full w-full object-cover object-bottom-right sm:hidden"
        />
        <Image
          data-aos="fade-left"
          src="/insights/hero/bg-desktop.svg"
          alt="Hero tree"
          width={360}
          height={606}
          className="absolute inset-0 z-0 hidden h-full w-full object-contain object-bottom-right sm:block"
        />
      </div>
    </section>
  );
}

export default HeroSection;
