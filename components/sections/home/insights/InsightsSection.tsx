import { Button } from "@/components/globals/buttons/Button";
import ArrowRightIcon from "@/components/globals/icons/ArrowRightIcon";
import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";
import Link from "next/link";

/* -------------------------------------------------------------------------- */
/*                               INSIGHTS DATA                                */
/* -------------------------------------------------------------------------- */

const INSIGHTS = [
  {
    title: "Algorithmic Determinism",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Reflections from the Black Box",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Open vs. Closed Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

/* -------------------------------------------------------------------------- */
/*                               INSIGHT ITEM                                 */
/* -------------------------------------------------------------------------- */

function InsightItem({ title, description }) {
  return (
    <Link
      href="/insights"
      className="group flex w-full cursor-pointer flex-col gap-5 sm:gap-6"
    >
      <BodyText variant="title1">{title}</BodyText>

      <div className="flex w-full flex-col gap-5 sm:flex-row sm:items-end sm:gap-9.5">
        <BodyText variant="body3" className="text-gray grow">
          {description}
        </BodyText>

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

/* -------------------------------------------------------------------------- */
/*                               INSIGHTS LIST                                */
/* -------------------------------------------------------------------------- */

function InsightsList() {
  return (
    <div className="z-10 flex w-full flex-col items-center justify-center gap-12.5">
      {INSIGHTS.map((insight, idx) => (
        <InsightItem
          key={idx}
          title={insight.title}
          description={insight.description}
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               SECTION                                      */
/* -------------------------------------------------------------------------- */

function InsightsSection() {
  return (
    <section className="bg-dark relative overflow-hidden">
      <div className="container-fractal">
        <div className="z-10 flex w-full max-w-251.5 flex-col items-center justify-center gap-12.5 py-15 lg:py-30">
          {/* Heading */}
          <div className="z-10 mb-7.5 flex w-full flex-col gap-5">
            <Heading
              variant="h1"
              className="from-gradient-green to-gradient-orange w-fit bg-linear-to-r bg-clip-text text-transparent"
            >
              Insights
            </Heading>

            <BodyText variant="body3" className="text-gray w-full">
              The latest on what’s shaping change in a mission-driven world.
            </BodyText>
          </div>

          {/* Insights List */}
          <InsightsList />

          {/* CTA */}
          <Button
            href="/insights"
            variant="icon"
            className="z-10 md:self-start"
          >
            Browse All Insights
          </Button>
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

export default InsightsSection;
