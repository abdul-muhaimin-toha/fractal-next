import { BodyText } from "@/components/globals/typography/BodyText";
import Image from "next/image";

function TheChallengeSection({ data }) {
  const content = data?.data;

  if (!content) return null;

  const { section_title, image, content_entries } = content;

  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center gap-10">
            {section_title && (
              <BodyText variant="title1" className="w-full">
                {section_title}
              </BodyText>
            )}
            <div className="grid w-full grid-cols-1 gap-20 xl:grid-cols-[1fr_562px]">
              <div className="flex h-full w-full flex-col justify-start gap-10">
                {content_entries &&
                  content_entries.map((item, idx) => (
                    <BodyText
                      key={idx}
                      variant="body1"
                      className="text-white opacity-80"
                    >
                      {item.content_text || item}
                    </BodyText>
                  ))}
              </div>
              {image && (
                <div className="aspect-video h-full w-full xl:aspect-562/630">
                  <Image
                    src={image}
                    alt={section_title || "Project Challenge"}
                    className="h-full w-full object-cover"
                    width={562}
                    height={630}
                    unoptimized={true}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheChallengeSection;
