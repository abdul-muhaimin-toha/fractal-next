import ArrowRightIcon from "@/components/globals/icons/ArrowRightIcon";
import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";
import { getUriByDbId } from "@/graphql/components/getUriByDbId";
import Link from "next/link";

function OurWorkContent({
  bodyTitle,
  bodyDescription,
  buttonHref,
  openInNewTab,
}) {
  return (
    <div className="mb-9.5 flex flex-col gap-4 sm:max-w-2xl lg:mb-22.5 lg:max-w-3xl lg:gap-7.5 xl:max-w-232">
      {bodyTitle && <BodyText variant="title1">{bodyTitle}</BodyText>}
      {bodyDescription && (
        <BodyText variant="body3">{bodyDescription}</BodyText>
      )}
      {buttonHref && (
        <Link
          href={buttonHref}
          target={openInNewTab ? "_blank" : "_self"}
          className="hover:text-ocean-orange mt-1 duration-300 lg:mt-0"
        >
          <ArrowRightIcon className="size-7.5 xl:size-10" />
        </Link>
      )}
    </div>
  );
}

export default async function OurWorkSection({ data }) {
  const content = data?.data || {};
  const {
    background_image,
    body_description,
    body_title,
    button_page,
    open_in_new_tab,
    section_title,
    style_version,
  } = content;

  let buttonHref = "/";
  if (Array.isArray(button_page) && button_page.length > 0) {
    const pageId = button_page[0]?.id;
    if (pageId) {
      buttonHref = await getUriByDbId(pageId);
    }
  }

  return (
    <section
      className={`bg-black ${style_version === "v2" ? "mt-20.5 lg:mt-33.5 xl:mt-43.75" : ""}`}
    >
      <div className="flex w-full flex-col">
        {/* Heading */}
        {style_version === "v1" && section_title && (
          <div className="container-fractal">
            <div className="flex w-full flex-col items-start justify-start py-14 xl:py-15">
              <Heading className="from-gradient-green to-gradient-orange w-fit bg-linear-to-r bg-clip-text text-transparent">
                {section_title}
              </Heading>
            </div>
          </div>
        )}

        <div className="relative aspect-360/440 w-full overflow-hidden sm:aspect-1920/882">
          {background_image && (
            <Image
              src={background_image}
              alt={section_title || "Our work background"}
              unoptimized={true}
              fill
              className="absolute w-full object-cover object-[25%_80%] sm:object-center"
            />
          )}
          <div className="absolute inset-0 bg-linear-180 from-black/0 to-black/70">
            <div className="container-fractal h-full">
              <div className="flex h-full w-full flex-col justify-end">
                {(body_title || body_description || button_page) && (
                  <OurWorkContent
                    bodyTitle={body_title}
                    bodyDescription={body_description}
                    buttonHref={buttonHref}
                    openInNewTab={open_in_new_tab}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
