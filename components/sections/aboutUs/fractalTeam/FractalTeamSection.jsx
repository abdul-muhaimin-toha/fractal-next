import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";
import { getAllTeamMembers } from "@/graphql/components/getAllTeamMembers";

export default async function FractalTeamSection({ data }) {
  const content = data?.data || {};
  const { section_title, description } = content;

  const memberList = await getAllTeamMembers();

  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col gap-20 py-24 md:gap-25 md:py-40">
          {/* Heading */}
          <div data-aos="fade-up" className="flex flex-col gap-5 md:gap-10">
            {section_title && (
              <Heading variant="h1" className="text-white">
                {section_title}
              </Heading>
            )}
            {description && (
              <BodyText variant="title3" className="text-[#EBEBEBCC]/80">
                {description}
              </BodyText>
            )}
          </div>

          {/* Team Grid */}
          {memberList.length > 0 && (
            <div
              data-aos="fade-down"
              className="grid w-full grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-20 md:grid-cols-3 md:gap-y-24 lg:gap-x-5 xl:grid-cols-4 xl:gap-y-35"
            >
              {memberList.map((member, index) => {
                const name = member.title;
                const role = member.designation;
                const bio = member.whatHeDo;
                const image = member.featuredImage?.node?.sourceUrl;

                return (
                  <div key={member.id || index} className="flex w-full flex-col gap-5">
                    <div className="relative aspect-square w-full p-1 from-gradient-orange to-gradient-green bg-linear-to-r p-1">
                      {image && (
                        <Image
                          className="h-full w-full object-cover"
                          alt={`${name} - ${role}`}
                          src={image}
                          width={320}
                          height={320}
                          unoptimized={true}
                          
                        />
                      )}
                    </div>

                    <div className="flex w-full flex-col">
                      {name && (
                        <BodyText variant="title2" className="mb-2.5 text-white">
                          {name}
                        </BodyText>
                      )}

                      {role && (
                        <BodyText variant="body4" className="text-ocean-green mb-5">
                          {role}
                        </BodyText>
                      )}

                      {bio && (
                        <BodyText
                          variant="body4"
                          className="text-[18px] font-normal text-[rgba(235,235,235,0.80)]"
                        >
                          {bio}
                        </BodyText>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
