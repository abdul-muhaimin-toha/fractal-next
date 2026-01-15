import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";

const teamMembers = Array.from({ length: 6 }).map(() => ({
  name: "Ali Rahman",
  role: "President, Strategic Lead",
  bio: "I ensure alignment between positioning marketing assets audience expectations.",
  image: "/about-us/team/member-1.png",
}));

function FractalTeamSection() {
  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col gap-20 py-24 md:gap-25 md:py-40">
          {/* Heading */}
          <div className="flex flex-col gap-5 md:gap-10">
            <Heading variant="h1" className="text-white">
              The Fractal Team
            </Heading>
            <BodyText variant="title3" className="text-[#EBEBEBCC]/80">
              Our team brings together expertise in advertising, journalism,
              writing, media production, creative & web development,
              co-creation, mental health, stakeholder consultation and data
              analytics.
            </BodyText>
          </div>

          {/* Team Grid */}
          <div className="grid w-full grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-20 md:grid-cols-3 md:gap-y-24 lg:gap-x-5 xl:grid-cols-4 xl:gap-y-35">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex w-full flex-col gap-5">
                <div className="relative aspect-square w-full">
                  <Image
                    className="h-full w-full"
                    alt="Team member"
                    src={member.image}
                    fill
                  />
                </div>

                <div className="flex w-full flex-col">
                  <BodyText variant="title2" className="mb-2.5 text-white">
                    {member.name}
                  </BodyText>

                  <BodyText variant="body4" className="text-ocean-green mb-5">
                    {member.role}
                  </BodyText>

                  <BodyText
                    variant="body4"
                    className="text-[18px] font-normal text-white sm:text-[18px] sm:font-normal md:text-[18px] md:font-normal lg:text-[18px] lg:font-normal xl:text-[18px] xl:font-normal 2xl:text-[18px] 2xl:font-normal"
                  >
                    {member.bio}
                  </BodyText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FractalTeamSection;
