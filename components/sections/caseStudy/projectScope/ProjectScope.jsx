import { BodyText } from "@/components/globals/typography/BodyText";

function ProjectScope({data}) {
  const content = data?.data;

  if (!content) return null;

  const { section_title, scope_columns } = content;
  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center py-25">
          <div
            data-aos="fade-down"
            className="flex w-full flex-col items-center justify-center gap-10 border-y border-y-[#EBEBEB]/40 py-25"
          >
            {section_title && (
              <BodyText variant="title1" className="w-full">
                {section_title}
              </BodyText>
            )}
            <div className="grid w-full grid-cols-1 gap-18.5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-18.5">
              {scope_columns &&
                scope_columns.map((col, idx) => (
                  <div key={idx} className="flex w-full flex-col gap-2.5">
                    {col.column_title && (
                      <BodyText variant="title2" className="text-ocean-green">
                        {col.column_title}
                      </BodyText>
                    )}
                    {col.column_items &&
                      col.column_items.map((item, itemIdx) => (
                        <BodyText
                          key={itemIdx}
                          variant="body1"
                          className="text-white opacity-60"
                        >
                          {item.item_text}
                        </BodyText>
                      ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectScope;
