import { BodyText } from "@/components/globals/typography/BodyText";

function OverviewSection({data}) {
const content = data?.data;

  if (!content) return null;

  const { section_title, description_one, description_two } = content;

  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div
          data-aos="fade-up"
          className="flex w-full flex-col items-center justify-center gap-10 pt-40"
        >
          {section_title && (
            <BodyText variant="title1" className="w-full">
              {section_title}
            </BodyText>
          )}
          {description_one && (
            <BodyText variant="title3" className="w-full opacity-80">
              {description_one}
            </BodyText>
          )}
          {description_two && (
            <BodyText variant="title3" className="w-full opacity-80">
              {description_two}
            </BodyText>
          )}
        </div>
      </div>
    </section>
  );
}

export default OverviewSection;
