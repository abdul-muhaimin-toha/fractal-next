"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Button } from "@/components/globals/buttons/Button";
import Image from "next/image";
import { BodyText } from "@/components/globals/typography/BodyText";

const PROJECTS = ["", "", "", "", ""];

function ProjectSlide() {
  return (
    <div className="flex group overflow-hidden aspect-322/310 w-full flex-col items-center justify-center">
      <div className="h-full w-full">
        <Image
          src="/home/our-project/project-1.png"
          alt="Our project"
          width={322}
          height={310}
          className="h-full w-full group-hover:scale-105 duration-300 object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 h-full w-full bg-linear-180 from-black/0 to-black/70" />
      <BodyText
        variant="title2"
        className="absolute group-hover:underline bottom-7.5 left-4.5 z-20 text-white"
      >
        viaSport
        <br /> British Columbia
      </BodyText>
    </div>
  );
}

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
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      breakpoints={{
        360: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    >
      {PROJECTS.map((_, idx) => (
        <SwiperSlide
          key={idx}
          className="flex! h-auto! cursor-grab active:cursor-grabbing"
        >
          <ProjectSlide />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function ProjectsPagination() {
  return (
    <div className="custom-pagination-projects flex w-full items-center justify-center gap-1 sm:gap-3 lg:justify-end" />
  );
}

function ProjectsSection() {
  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center gap-7.5 py-15 lg:items-start lg:gap-12.5 lg:py-30">
          <div className="flex w-full flex-col items-center justify-center gap-7.5 lg:items-start lg:gap-12.5">
            <ProjectsSlider />
            <ProjectsPagination />
          </div>
          <Button data-aos="fade-up" variant="icon">
            See All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
