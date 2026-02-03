import { BodyText } from "@/components/globals/typography/BodyText";
import Image from "next/image";

function WhatWeDoSection({ data }) {
  const content = data?.data;

  if (!content) return null;

  const { section_title, did_entries } = content;

  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center py-25">
          <div className="flex w-full flex-col items-center justify-center gap-17.5">
            {section_title && (
              <BodyText variant="title1" className="w-full text-white">
                {section_title}
              </BodyText>
            )}
            <div className="flex w-full flex-col gap-25">
              {did_entries &&
                did_entries.map((item, idx) => {
                  if (item._type === "grid") {
                    return (
                      <div
                        key={idx}
                        className="grid w-full grid-cols-2 gap-5 lg:grid-cols-4"
                      >
                        {item.grid_images &&
                          item.grid_images.map((img, imgIdx) => (
                            <Image
                              key={imgIdx}
                              src={img.image}
                              alt={section_title}
                              className="aspect-322/310 h-auto w-full object-cover"
                              width={322}
                              height={310}
                              unoptimized={true}
                            />
                          ))}
                      </div>
                    );
                  }

                  return (
                    <div
                      key={idx}
                      className="grid w-full grid-cols-1 items-center justify-center gap-20 xl:grid-cols-[1fr_562px]"
                    >
                      <div className="flex h-full w-full flex-col justify-start gap-5">
                        {item.title && (
                          <BodyText
                            variant="title2"
                            className="text-ocean-green"
                          >
                            {item.title}
                          </BodyText>
                        )}
                        {item.description && (
                          <BodyText
                            variant="body1"
                            className="text-white opacity-80"
                          >
                            {item.description}
                          </BodyText>
                        )}
                      </div>
                      <div className="flex h-full w-full flex-col items-center justify-center">
                        {item.media_type === "video" ? (
                          <div className="flex aspect-video h-full w-full flex-col items-center justify-center bg-red-200">
                            <iframe
                              className="block h-full w-full object-cover"
                              width="560"
                              height="316"
                              src={item.video_url}
                              title={item.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            ></iframe>
                          </div>
                        ) : (
                          item.image && (
                            <Image
                              src={item.image}
                              alt={item.title}
                              className="aspect-562/454 h-auto w-full object-cover"
                              width={562}
                              height={454}
                              unoptimized={true}
                            />
                          )
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
