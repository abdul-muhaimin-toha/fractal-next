import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";

// Array of client logos
const CLIENT_LOGOS = Array.from({ length: 30 }).map(
  () => `/home/our-clients/client-1.png`,
);

function ClientLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-148/87 w-full bg-red-300">
      <Image
        className="absolute h-full w-full object-contain"
        fill
        alt={alt}
        src={src}
      />
    </div>
  );
}

function OurClientsSection() {
  return (
    <section className="bg-dark">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center gap-7.5 py-15 md:items-start md:gap-20 md:py-30">
          <Heading
            data-aos="fade-down"
            className="from-gradient-green to-gradient-orange w-fit bg-linear-90 bg-clip-text text-transparent"
            variant="h1"
          >
            Our Clients
          </Heading>

          <div
            data-aos="fade-up"
            className="grid w-full grid-cols-2 gap-x-8.75 gap-y-2 sm:grid-cols-3 sm:gap-2.5 md:grid-cols-4 lg:grid-cols-6"
          >
            {CLIENT_LOGOS.map((logo, idx) => (
              <ClientLogo key={idx} src={logo} alt={`Client ${idx + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClientsSection;
