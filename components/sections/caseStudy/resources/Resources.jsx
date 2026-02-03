import { BodyText } from "@/components/globals/typography/BodyText";

function Resources({ data }) {
  const content = data?.data;

  if (!content) return null;

  const { detail_entries } = content;

  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center pt-25">
          <div className="flex w-full flex-col items-center justify-center gap-15 border-t border-t-[#EBEBEB]/40 py-25">
            {detail_entries &&
              detail_entries.map((entry, idx) => (
                <div
                  key={idx}
                  className="items-top flex w-full flex-col justify-between gap-10 lg:flex-row"
                >
                  <BodyText
                    className="max-w-full grow lg:max-w-94 xl:max-w-99"
                    variant="title4"
                  >
                    {entry.entry_title}
                  </BodyText>
                  <BodyText
                    className="max-w-full grow opacity-80 lg:max-w-150 xl:max-w-200"
                    variant="body1"
                  >
                    {entry.entry_description}
                  </BodyText>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resources;
