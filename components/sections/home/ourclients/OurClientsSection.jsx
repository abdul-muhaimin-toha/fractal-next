import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";
import { getAllClients } from "@/graphql/components/getAllClients";

function ClientLogo({ src, alt }) {
  return (
    <div className="relative aspect-148/87 w-full">
      <Image
        className="absolute h-full w-full object-contain"
        fill
        alt={alt || "Client logo"}
        src={src}
        unoptimized={true}
      />
    </div>
  );
}

async function OurClientsSection({ data }) {
  const content = data?.data || {};
  const { section_title } = content;

  const clients = await getAllClients();

  return (
    <section className="bg-dark">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center gap-7.5 py-15 md:items-start md:gap-20 md:py-30">
          {section_title && (
            <Heading
              className="from-gradient-green to-gradient-orange w-fit bg-linear-90 bg-clip-text text-transparent"
              variant="h1"
            >
              {section_title}
            </Heading>
          )}

          {clients.length > 0 && (
            <div className="grid w-full grid-cols-2 gap-x-8.75 gap-y-2 sm:grid-cols-3 sm:gap-2.5 md:grid-cols-4 lg:grid-cols-6">
              {clients.map((client) => {
                const logo = client?.featuredImage?.node?.sourceUrl;
                if (!logo) return null;

                return (
                  <ClientLogo key={client.id} src={logo} alt={client.title} />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default OurClientsSection;
