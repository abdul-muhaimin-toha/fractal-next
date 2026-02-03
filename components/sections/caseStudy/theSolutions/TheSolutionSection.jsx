import { BodyText } from "@/components/globals/typography/BodyText";
import Image from "next/image";

function TheSolutionSection({ data }) {
  const content = data?.data;

  if (!content) return null;

  const { section_title, image, solution_details } = content;

  return (
    <section className="bg-white">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center py-25">
          <div className="flex w-full flex-col items-center justify-center gap-10">
            {section_title && (
              <BodyText variant="title1" className="w-full text-black">
                {section_title}
              </BodyText>
            )}
            <div className="grid w-full grid-cols-1 gap-20 xl:grid-cols-[1fr_562px]">
              <div className="flex h-full w-full flex-col justify-start gap-10">
                {solution_details &&
                  solution_details.map((item, idx) => (
                    <BodyText
                      key={idx}
                      variant="body1"
                      className="text-black opacity-80"
                    >
                      {item.content_text || item}
                    </BodyText>
                  ))}
              </div>
              <div className="flex h-full w-full flex-col justify-between gap-2.5 md:grid md:grid-cols-2 xl:flex xl:h-full xl:flex-col xl:justify-between">
                {image && (
                  <>
                    <Image
                      src={image}
                      alt={section_title || "Solution Image"}
                      className="h-full w-full object-contain"
                      width={562}
                      height={270}
                      unoptimized={true}
                    />
                    <Image
                      src={image}
                      alt={section_title || "Solution Image"}
                      className="h-full w-full object-contain"
                      width={562}
                      height={270}
                      unoptimized={true}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheSolutionSection;
