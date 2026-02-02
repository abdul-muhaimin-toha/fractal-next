"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { BodyText } from "@/components/globals/typography/BodyText";
import Link from "next/link";

function ProjectSlide({ title, subtitle, image, href }) {
  if (!href) return null;

  return (
    <Link
      href={`/our-works/${href}`}
      className="group relative flex aspect-322/310 w-full overflow-hidden"
    >
      {image && (
        <Image
          src={image}
          alt={title || "Project image"}
          width={322}
          height={310}
          unoptimized={true}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-linear-180 from-black/0 to-black/70" />

      {/* Text */}
      <BodyText
        variant="title2"
        className="absolute line-clamp-2 bottom-7.5 left-4.5 right-4.5 z-20 text-white group-hover:underline"
      >
        {title}
        {subtitle && (
          <>
            <br />
            {subtitle}
          </>
        )}
      </BodyText>
    </Link>
  );
}

function ProjectsPagination() {
  return (
    <div className="custom-pagination-projects flex w-full items-center justify-center gap-1 sm:gap-3 lg:justify-end" />
  );
}

export default function ProjectsSliderContainer({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="flex w-full flex-col items-center justify-center gap-7.5 lg:items-start lg:gap-12.5">
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
        {projects.map((project, idx) => {
          const title = project?.title;
          const image = project?.featuredImage?.node?.sourceUrl;
          const href = project?.slug;

          return (
            <SwiperSlide
              key={project?.databaseId || idx}
              className="flex! h-auto! cursor-grab active:cursor-grabbing"
            >
              <ProjectSlide
                title={title}
                image={image}
                href={href}
                subtitle={project?.subtitle}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ProjectsPagination />
    </div>
  );
}
