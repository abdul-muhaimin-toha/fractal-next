import { Button } from "@/components/globals/buttons/Button";
import ArrowRightIcon from "@/components/globals/icons/ArrowRightIcon";
import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";
import Link from "next/link";
import { getUriByDbId } from "@/graphql/components/getUriByDbId";
import { getInsightById } from "@/graphql/components/getInsightById";

function InsightItem({ title, description, slug }) {
  return (
    <Link
      href={`/insights/${slug}`}
      className="group flex w-full cursor-pointer flex-col gap-5 sm:gap-6"
    >
      <BodyText variant="title1">{title}</BodyText>

      <div className="flex w-full flex-col gap-5 sm:flex-row sm:items-end sm:gap-9.5">
        <p 
          className="text-gray grow text-sm sm:text-base xl:text-lg 2xl:text-xl line-clamp-2"
          
        >{description}</p>

        <ArrowRightIcon className="group-hover:text-ocean-orange size-7.5 duration-300 sm:size-8.5" />
      </div>

      {/* Gradient Divider */}
      <div className="group relative flex h-1.5 w-full overflow-hidden md:h-2.5">
        <div className="from-gradient-orange to-gradient-green h-1.5 w-full bg-linear-to-r md:h-2.5" />
        <div className="from-gradient-green to-gradient-orange h-1.5 w-0 bg-linear-to-r transition-all duration-500 ease-out group-hover:w-full md:h-2.5" />
      </div>
    </Link>
  );
}

export default async function InsightsSection({ data }) {
  const content = data?.data || {};
  const { 
    button_page, 
    insights, 
    open_in_new_tab, 
    section_description, 
    section_title, 
  } = content;

  let buttonHref = "/";
  if (Array.isArray(button_page) && button_page.length > 0) {
    const pageId = button_page[0]?.id;
    if (pageId) {
      buttonHref = await getUriByDbId(pageId);
    }
  }

  const insightIds = insights || [];
  const fetchedInsights = await Promise.all(
    insightIds.map(async (i) => {
      const id = i.id || i;
      return await getInsightById(id);
    })
  );

  const cleanInsights = fetchedInsights.filter(Boolean);

  return (
    <section className="bg-dark relative overflow-hidden">
      <div className="container-fractal">
        <div className="z-10 flex w-full max-w-251.5 flex-col items-center justify-center gap-12.5 py-15 lg:py-30">
          {/* Heading */}
          <div className="z-10 mb-7.5 flex w-full flex-col gap-5">
            {section_title && (
              <Heading
                variant="h1"
                className="from-gradient-green to-gradient-orange w-fit bg-linear-to-r bg-clip-text text-transparent"
              >
                {section_title}
              </Heading>
            )}

            {section_description && (
              <BodyText variant="body3" className="text-gray w-full">
                {section_description}
              </BodyText>
            )}
          </div>

          {/* Insights List */}
          {cleanInsights.length > 0 && (
            <div className="z-10 flex w-full flex-col items-center justify-center gap-12.5">
              {cleanInsights.map((insight, idx) => (
                <InsightItem
                  key={insight.databaseId || idx}
                  title={insight.title}
                  description={insight.insightDescription}
                  slug={insight.slug}
                />
              ))}
            </div>
          )}

          {/* CTA */}
          {button_page && (
            <Button
              href={buttonHref}
              target={open_in_new_tab ? "_blank" : "_self"}
              variant="icon"
              className="z-10 md:self-start"
            />
          )}
        </div>

        {/* Background Images */}
        <Image
          data-aos="fade-left"
          src="/home/our-insights/bg-mobile.svg"
          alt="Insights background"
          width={360}
          height={606}
          className="absolute inset-0 z-0 h-full w-full object-cover object-bottom-right sm:hidden"
        />

        <Image
          data-aos="fade-left"
          src="/home/our-insights/bg-desktop.svg"
          alt="Insights background"
          width={360}
          height={606}
          className="absolute inset-0 z-0 hidden h-full w-full object-cover object-bottom-right sm:block"
        />
      </div>
    </section>
  );
}



