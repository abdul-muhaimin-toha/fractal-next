import ArrowRightIcon from "@/components/globals/icons/ArrowRightIcon";
import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";
import Link from "next/link";

function OurWorkContent() {
  return (
    <div className="mb-9.5 flex flex-col gap-4 sm:max-w-2xl lg:mb-22.5 lg:max-w-3xl lg:gap-7.5 xl:max-w-232">
      <BodyText variant="title1">
        Human Intelligence for a Human Future
      </BodyText>
      <BodyText variant="body3">
        See how we helped the University of Ottawa Faculty of Arts transform
        their brand into a bold statement for the future of arts education.
      </BodyText>
      <Link href="/" className="mt-1 lg:mt-0">
        <ArrowRightIcon className="size-7.5 xl:size-10" />
      </Link>
    </div>
  );
}

function OurWorkSection() {
  return (
    <section className="bg-black">
      <div className="flex w-full flex-col">
        {/* Heading */}
        <div className="container-fractal">
          <div className="flex w-full flex-col items-start justify-start py-14 xl:py-15">
            <Heading className="from-gradient-green to-gradient-orange w-fit bg-linear-to-r bg-clip-text text-transparent">
              Our Work
            </Heading>
          </div>
        </div>

        <div className="relative aspect-360/440 w-full sm:aspect-1920/882">
          <Image
            src="/home/our-work/our-work-bg.png"
            alt="Our work"
            fill
            className="absolute w-full object-cover"
          />
          <div className="absolute inset-0">
            <div className="container-fractal h-full">
              <div className="flex h-full w-full flex-col justify-end">
                <OurWorkContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurWorkSection;
