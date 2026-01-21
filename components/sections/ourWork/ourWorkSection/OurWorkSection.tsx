import { BodyText } from "@/components/globals/typography/BodyText";
import Image from "next/image";
import Link from "next/link";

// Dynamic content extracted from the screenshot
const WORK_ITEMS = [
  {
    id: 1,
    category: "Signed Sealed Delivered",
    title:
      "Protecting Canada’s Iconic Landscapes by Sending A warning About Climate Inaction",
    image: "/our-work/works/work-1.png",
  },
  {
    id: 2,
    category: "Taxopoly",
    title: "Turning A Rigged Housing Market Into A Rigged Board Game",
    image: "/our-work/works/work-2.png",
  },
  {
    id: 3,
    category: "Signed Sealed Delivered",
    title:
      "Protecting Canada’s Iconic Landscapes by Sending A warning About Climate Inaction",
    image: "/our-work/works/work-3.png",
  },
  {
    id: 4,
    category: "Taxopoly",
    title: "Turning A Rigged Housing Market Into A Rigged Board Game",
    image: "/our-work/works/work-4.png",
  },
  {
    id: 5,
    category: "Signed Sealed Delivered",
    title:
      "Protecting Canada’s Iconic Landscapes by Sending A warning About Climate Inaction",
    image: "/our-work/works/work-5.png",
  },
  {
    id: 6,
    category: "Taxopoly",
    title: "Turning A Rigged Housing Market Into A Rigged Board Game",
    image: "/our-work/works/work-6.png",
  },
  {
    id: 7,
    category: "Signed Sealed Delivered",
    title:
      "Protecting Canada’s Iconic Landscapes by Sending A warning About Climate Inaction",
    image: "/our-work/works/work-7.png",
  },
  {
    id: 8,
    category: "Taxopoly",
    title: "Turning A Rigged Housing Market Into A Rigged Board Game",
    image: "/our-work/works/work-8.png",
  },
];

function OurWorkSection() {
  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="grid w-full grid-cols-1 gap-14 py-30 md:grid-cols-2 md:gap-x-5 md:gap-y-20 md:py-40">
          {WORK_ITEMS.map((item) => (
            <Link
              key={item.id}
              href="/our-work/details"
              data-aos="fade-up"
              className="group flex w-full flex-col gap-5"
            >
              <div className="relative aspect-664/500 w-full overflow-hidden">
                <Image
                  className="h-full w-full object-cover duration-200 group-hover:scale-105"
                  src={item.image}
                  alt={item.title}
                  fill
                />
              </div>
              <div className="flex w-full flex-col gap-2.5">
                <BodyText variant="body4" className="text-ocean-green">
                  {item.category}
                </BodyText>
                <BodyText
                  variant="title2"
                  className="line-clamp-2 group-hover:underline"
                >
                  {item.title}
                </BodyText>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurWorkSection;
