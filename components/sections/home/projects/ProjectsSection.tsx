"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Button } from "@/components/globals/buttons/Button";
import Image from "next/image";
import { BodyText } from "@/components/globals/typography/BodyText";
import Link from "next/link";

/* -------------------------------------------------------------------------- */
/*                               PROJECT DATA                                 */
/* -------------------------------------------------------------------------- */

const PROJECTS = [
  {
    title: "viaSport",
    subtitle: "British Columbia",
    image: "/home/our-project/project-1.png",
    href: "/our-work/details",
  },
  {
    title: "March of Dimes",
    subtitle: "Canada",
    image: "/home/our-project/project-2.png",
    href: "/our-work/details",
  },
  {
    title: "Queen’s",
    subtitle: "University",
    image: "/home/our-project/project-3.png",
    href: "/our-work/details",
  },
  {
    title: "Verve",
    subtitle: "Senior Living",
    image: "/home/our-project/project-4.png",
    href: "/our-work/details",
  },
];

/* -------------------------------------------------------------------------- */
/*                               SLIDE CARD                                   */
/* -------------------------------------------------------------------------- */

interface ProjectSlideProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

function ProjectSlide({ title, subtitle, image, href }: ProjectSlideProps) {
  return (
    <Link
      href={href}
      className="group relative flex aspect-322/310 w-full overflow-hidden"
    >
      {/* Image */}
      <Image
        src={image}
        alt={`${title} ${subtitle}`}
        width={322}
        height={310}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-linear-180 from-black/0 to-black/70" />

      {/* Text */}
      <BodyText
        variant="title2"
        className="absolute bottom-7.5 left-4.5 z-20 text-white group-hover:underline"
      >
        {title}
        <br />
        {subtitle}
      </BodyText>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*                               SLIDER                                       */
/* -------------------------------------------------------------------------- */

function ProjectsSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      loop
      className="w-full overflow-hidden"
      pagination={{
        el: ".custom-pagination-projects",
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        360: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    >
      {PROJECTS.map((project, idx) => (
        <SwiperSlide
          key={idx}
          className="flex! h-auto! cursor-grab active:cursor-grabbing"
        >
          <ProjectSlide {...project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

/* -------------------------------------------------------------------------- */
/*                              PAGINATION                                    */
/* -------------------------------------------------------------------------- */

function ProjectsPagination() {
  return (
    <div className="custom-pagination-projects flex w-full items-center justify-center gap-1 sm:gap-3 lg:justify-end" />
  );
}

/* -------------------------------------------------------------------------- */
/*                              SECTION                                       */
/* -------------------------------------------------------------------------- */

export default function ProjectsSection() {
  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center gap-7.5 py-15 lg:items-start lg:gap-12.5 lg:py-30">
          <div className="flex w-full flex-col items-center justify-center gap-7.5 lg:items-start lg:gap-12.5">
            <ProjectsSlider />
            <ProjectsPagination />
          </div>

          <Button href="/our-work" data-aos="fade-up" variant="icon">
            See All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
