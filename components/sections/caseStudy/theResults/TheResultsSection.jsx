import { BodyText } from "@/components/globals/typography/BodyText";

function TheResultsSection({ data }) {
  const content = data?.data;

  if (!content) return null;

  const { section_title, description, result_metrics_data } = content;

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
            {description && (
              <BodyText variant="body1" className="w-full text-black opacity-80">
                {description}
              </BodyText>
            )}
            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-24 overflow-hidden">
              {result_metrics_data &&
                result_metrics_data.map((result, idx) => {
                  let colSpan = "lg:col-span-7";
                  let aos = "";
                  if (idx === 1) colSpan = "lg:col-span-10";
                  if (idx === 0) aos = "fade-right";
                  if (idx === result_metrics_data.length - 1) aos = "fade-left";

                  return (
                    <div
                      key={idx}
                      data-aos={aos}
                      className={`flex aspect-video h-auto w-full flex-col items-center justify-center gap-6 text-center sm:aspect-square ${colSpan} ${
                        idx === 1 ? "lg:aspect-auto" : ""
                      }`}
                      style={{
                        backgroundColor: result.background_color || (idx === 0 ? "#74C2CA" : idx === 1 ? "#7EC4A7" : "#A6C780"),
                      }}
                    >
                      <BodyText variant="title4" className="text-black">
                        {result.number}
                      </BodyText>
                      <BodyText variant="title2" className="text-black">
                        {result.label}
                      </BodyText>
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

export default TheResultsSection;
