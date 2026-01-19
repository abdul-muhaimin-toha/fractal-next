import { BodyText } from "@/components/globals/typography/BodyText";

function OverviewSection() {
  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div
          data-aos="fade-up"
          className="flex w-full flex-col items-center justify-center gap-10 pt-40"
        >
          <BodyText variant="title1" className="w-full">
            Overview
          </BodyText>
          <BodyText variant="title3" className="w-full opacity-80">
            When the uOttawa Faculty of Arts came to us with the challenge of
            revitalizing their brand, we proposed a campaign with a bold
            message: instead of telling people that arts education can help them
            compete in the face of AI, we wanted to show them that it can help
            them take back control of the game - to write their own future.
          </BodyText>
          <BodyText variant="title3" className="w-full opacity-80">
            The key to this is harnessing human intelligence: the capacity to
            think critically, to be creative, to empathize, collaborate, and
            adapt. Arts education naturally helps foster human intelligence.
            Most people understand that. This campaign is about getting people
            to really feel it. We’re not just selling courses, we’re selling
            humanness.
          </BodyText>
        </div>
      </div>
    </section>
  );
}

export default OverviewSection;
