import { BodyText } from "@/components/globals/typography/BodyText";
import Image from "next/image";

function WhatWeDoSection() {
  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center py-25">
          <div className="flex w-full flex-col items-center justify-center gap-17.5">
            <BodyText variant="title1" className="w-full text-white">
              What We Did
            </BodyText>
            <div className="flex w-full flex-col gap-25">
              <div
                data-aos="fade-up"
                className="grid w-full grid-cols-1 items-center justify-center gap-20 xl:grid-cols-[1fr_562px]"
              >
                <div className="flex h-full w-full flex-col justify-start gap-5">
                  <BodyText variant="title2" className="text-ocean-green">
                    Video Production
                  </BodyText>
                  <BodyText variant="body1" className="text-white opacity-80">
                    To illustrate the concept of Human Intelligence, we filmed
                    actual uOttawa students reading scripts foretelling their
                    futures and captured their spontaneous, authentic reactions
                    in an on-camera experiment.  We explored the real anxieties,
                    hopes, and desires of this core audience to create an
                    emotionally resonant statement that made a bold impact.
                  </BodyText>
                </div>
                <div className="flex aspect-video h-full w-full flex-col items-center justify-center bg-red-200">
                  <iframe
                    className="block h-full w-full object-cover"
                    width="560"
                    height="316"
                    src="https://www.youtube.com/embed/N3cpll5yF_w?si=KigU-zJVgjftOEz5"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="grid w-full grid-cols-1 items-center justify-center gap-20 xl:grid-cols-[1fr_562px]"
              >
                <div className="flex h-full w-full flex-col justify-start gap-5">
                  <BodyText variant="title2" className="text-ocean-green">
                    Still Image Ads
                  </BodyText>
                  <BodyText variant="body1" className="text-white opacity-80">
                    Ads featuring photos of real students were used on social
                    media to drive further engagement with the brand. Ads were
                    created in both English and French.
                  </BodyText>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <Image
                    src="/our-work/ads/ad.png"
                    alt="Challenges"
                    className="aspect-562/454 h-auto w-full object-cover"
                    width={562}
                    height={454}
                  />
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="grid w-full grid-cols-2 gap-5 lg:grid-cols-4"
              >
                <Image
                  src="/our-work/grid-cards/item-1.png"
                  alt="Card"
                  className="aspect-322/310 h-auto w-full object-cover"
                  width={322}
                  height={310}
                />
                <Image
                  src="/our-work/grid-cards/item-1.png"
                  alt="Card"
                  className="aspect-322/310 h-auto w-full object-cover"
                  width={322}
                  height={310}
                />
                <Image
                  src="/our-work/grid-cards/item-1.png"
                  alt="Card"
                  className="aspect-322/310 h-auto w-full object-cover"
                  width={322}
                  height={310}
                />
                <Image
                  src="/our-work/grid-cards/item-1.png"
                  alt="Card"
                  className="aspect-322/310 h-auto w-full object-cover"
                  width={322}
                  height={310}
                />
              </div>
              <div
                data-aos="fade-up"
                className="grid w-full grid-cols-1 items-center justify-center gap-20 xl:grid-cols-[1fr_562px]"
              >
                <div className="flex h-full w-full flex-col justify-start gap-5">
                  <BodyText variant="title2" className="text-ocean-green">
                    Web Content
                  </BodyText>
                  <BodyText variant="body1" className="text-white opacity-80">
                    We designed and wrote copy for landing pages for the
                    campaign, and crafted blog articles on topics related to the
                    idea of Human Intelligence and the value of an arts
                    education. all content was aligned through a visual identity
                    and content strategy designed for cross-platform continuity.
                    All ad copy and web pages were produced in both English and
                    French.
                  </BodyText>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <Image
                    src="/our-work/ads/ad.png"
                    alt="Challenges"
                    className="aspect-562/454 h-auto w-full object-cover"
                    width={562}
                    height={454}
                  />
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="grid w-full grid-cols-1 items-center justify-center gap-20 xl:grid-cols-[1fr_562px]"
              >
                <div className="flex h-full w-full flex-col justify-start gap-5">
                  <BodyText variant="title2" className="text-ocean-green">
                    Podcast Advertising
                  </BodyText>
                  <BodyText variant="body1" className="text-white opacity-80">
                    We created an audio ad that left a (literal) blank space for
                    audiences to insert their own answers, and respond to the
                    campaign with their thoughts and feelings.
                  </BodyText>
                </div>
                <div className="flex aspect-video h-full w-full flex-col items-center justify-center bg-red-200">
                  <iframe
                    className="block h-full w-full object-cover"
                    width="560"
                    height="316"
                    src="https://www.youtube.com/embed/N3cpll5yF_w?si=KigU-zJVgjftOEz5"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
