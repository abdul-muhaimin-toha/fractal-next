import { Button } from "@/components/globals/buttons/Button";
import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";
import { getUriByDbId } from "@/graphql/components/getUriByDbId";

function HeroContent({
  title,
  description,
  buttonText,
  buttonHref,
  open_in_new_tab,
}) {
  return (
    <div className="z-10 my-30.5 flex flex-col items-start justify-center gap-7.5 sm:max-w-2xl md:gap-10 lg:max-w-3xl xl:max-w-223 2xl:my-50">
      {title && (
        <Heading variant="h2" className="w-full text-white">
          {title}
        </Heading>
      )}
      {description && (
        <BodyText variant="body1" className="text-ocean-orange w-full">
          {description}
        </BodyText>
      )}
      {buttonText && buttonHref && (
        <Button
          href={buttonHref}
          target={open_in_new_tab ? "_blank" : "_self"}
          variant="icon"
          className="md:mt-2.5"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
}

export default async function HeroSection({ data }) {
  const content = data?.data || {};
  const { title, description, button_text, button_page, open_in_new_tab } =
    content;

  let buttonHref = "/";
  if (Array.isArray(button_page) && button_page.length > 0) {
    const pageId = button_page[0]?.id;
    if (pageId) {
      buttonHref = await getUriByDbId(pageId);
    }
  }

  return (
    <section className="bg-dark relative mt-20.5 lg:mt-33.5 xl:mt-43.75">
      <div className="container-fractal">
        {/* Hero Content */}
        <div className="flex w-full flex-col items-start justify-center">
          {(title || description || button_text) && (
            <HeroContent
              title={title}
              description={description}
              buttonText={button_text}
              buttonHref={buttonHref}
              open_in_new_tab={open_in_new_tab}
            />
          )}
        </div>

        {/* Hero Images */}
        <Image
          src="/home/hero-banner/fractal-tree-mobile.svg"
          alt="Hero tree"
          width={360}
          height={606}
          className="absolute top-0 right-0 bottom-0 left-0 z-0 h-full w-full object-cover object-bottom-right sm:object-top-right md:hidden"
        />
        <Image
          src="/home/hero-banner/fractal-tree-desktop.svg"
          alt="Hero tree"
          width={360}
          height={606}
          className="absolute top-0 right-0 bottom-0 left-0 z-0 hidden h-full w-full object-cover object-top-right md:block"
        />
      </div>
    </section>
  );
}
