import { BodyText } from "@/components/globals/typography/BodyText";
import Image from "next/image";

function BeyondTheMatrixSection({ data }) {
  const content = data?.data;

  if (!content) return null;

  const {
    section_title,
    quote_text,
    person_name,
    person_designation,
    person_image,
    beyond_narrative,
  } = content;

  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center py-25">
          <div
            data-aos="fade-down"
            className="flex w-full flex-col items-center justify-center gap-10"
          >
            {section_title && (
              <BodyText variant="title1" className="w-full text-white">
                {section_title}
              </BodyText>
            )}
            {beyond_narrative &&
              beyond_narrative.map((item, idx) => (
                <BodyText
                  key={idx}
                  variant="body1"
                  className="w-full text-white opacity-80"
                >
                  {item.content_text}
                </BodyText>
              ))}
            <div className="mt-10 flex w-full flex-col items-start justify-center gap-10 lg:flex-row lg:items-center 2xl:gap-20">
              {person_image && (
                <Image
                  className="aspect-square w-full shrink-0 object-cover sm:w-60 xl:w-77.5"
                  alt={person_name}
                  src={person_image}
                  width={310}
                  height={310}
                  unoptimized={true}
                />
              )}
              <div className="flex flex-col items-center justify-center gap-6 xl:gap-17.5">
                {quote_text && (
                  <BodyText variant="title3" className="text-white opacity-80">
                    {quote_text}
                  </BodyText>
                )}
                {(person_name || person_designation) && (
                  <div className="flex w-full flex-col gap-2">
                    {person_name && (
                      <BodyText variant="title4">{person_name}</BodyText>
                    )}
                    {person_designation && (
                      <BodyText variant="body3" className="text-gray">
                        {person_designation}
                      </BodyText>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeyondTheMatrixSection;
