'use client'

import { useState } from "react";
import { BodyText } from "@/components/globals/typography/BodyText";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/globals/buttons/Button";

function ProjectCard({ project }) {
  const category = project.projectCategories?.nodes?.[0]?.name || "";
  const title = project.title;
  const image = project.featuredImage?.node?.sourceUrl;
  const slug = project.slug;

  return (
    <Link
      href={`/our-works/${slug}`}
      data-aos="fade-up"
      className="group flex w-full flex-col gap-5"
    >
      <div className="relative aspect-664/500 w-full overflow-hidden">
        {image && (
          <Image
            className="h-full w-full object-cover duration-200 group-hover:scale-105"
            src={image}
            alt={title}
            fill
            unoptimized={true}
          />
        )}
      </div>
      <div className="flex w-full flex-col gap-2.5">
        {category && (
          <BodyText variant="body4" className="text-ocean-green">
            {category}
          </BodyText>
        ) }
        <BodyText
          variant="title2"
          className="line-clamp-2 group-hover:underline"
        >
          {title}
        </BodyText>
      </div>
    </Link>
  );
}

const ITEMS_PER_PAGE = 8;

export default function OurWorkSectionClient({ projects }) {
  const [currentPage, setCurrentPage] = useState(1);

  const safeProjects = Array.isArray(projects) ? projects : [];
  const totalPages = Math.ceil(safeProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = safeProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <div className="flex w-full flex-col gap-20 py-30 md:py-40">
      <div className="grid w-full grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-5 md:gap-y-20">
        {paginatedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex w-full items-center justify-center gap-10">
          {currentPage > 1 && (
            <Button
              variant="border"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Prev
            </Button>
          )}
          {currentPage < totalPages && (
            <Button
              variant="border"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              Next
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
