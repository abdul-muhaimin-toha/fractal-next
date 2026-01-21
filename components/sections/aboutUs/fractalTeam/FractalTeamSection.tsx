import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";

// Dynamic content extracted from the screenshot
const TEAM_MEMBERS = [
  {
    name: "Ali Rahman",
    role: "President, Strategic Lead",
    bio: "I ensure alignment between positioning marketing assets audience expectations.",
    image: "/about-us/team/member-1.png", // Update path as needed
  },
  {
    name: "Martin Horn",
    role: "Media & Analytics Lead",
    bio: "I design, execute and track campaigns, shape strategy and oversee media buys.",
    image: "/about-us/team/member-2.png", // Update path as needed
  },
  {
    name: "John Constantinides",
    role: "Account Director",
    bio: "I maintain consistency, transparency, and efficiency across project life cycles.",
    image: "/about-us/team/member-3.png", // Update path as needed
  },
  {
    name: "Melissa Taylor-Gates",
    role: "Consultations Lead",
    bio: "I foster inclusive collaboration and turn complex data into clear insights.",
    image: "/about-us/team/member-4.png", // Update path as needed
  },
  {
    name: "Nathaniel Bocabel",
    role: "Digital Specialist",
    bio: "I conduct research, digital strategies, and enhance campaign performance.",
    image: "/about-us/team/member-5.png", // Update path as needed
  },
  {
    name: "Kyle McKenna",
    role: "Creative Director",
    bio: "I turn strategies into creative solutions that engage audiences across media.",
    image: "/about-us/team/member-6.png", // Update path as needed
  },
];

function FractalTeamSection() {
  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col gap-20 py-24 md:gap-25 md:py-40">
          {/* Heading */}
          <div data-aos="fade-up" className="flex flex-col gap-5 md:gap-10">
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
          <div
            data-aos="fade-down"
            className="grid w-full grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-20 md:grid-cols-3 md:gap-y-24 lg:gap-x-5 xl:grid-cols-4 xl:gap-y-35"
          >
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="flex w-full flex-col gap-5">
                <div className="relative aspect-square w-full">
                  <Image
                    className="h-full w-full"
                    alt={`${member.name} - ${member.role}`}
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
