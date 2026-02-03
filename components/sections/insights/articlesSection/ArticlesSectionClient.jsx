"use client";

import { useState, useEffect } from "react";
import ArrowRightIcon from "@/components/globals/icons/ArrowRightIcon";
import { BodyText } from "@/components/globals/typography/BodyText";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/globals/buttons/Button";

function CategoryTabs({ categories, activeCategory, onChange }) {
  return (
    <div className="flex w-full flex-row items-center justify-start gap-5 overflow-auto pb-3 lg:justify-center">
      <button
        onClick={() => onChange("all")}
        className="group relative inline-flex h-13 cursor-pointer items-center justify-center gap-3 border px-6 py-3 font-semibold text-transparent duration-300 xl:h-13.5"
        style={{
          borderImage:
            activeCategory === "all"
              ? "linear-gradient(to right, #51aea6, #e6ca2f) 1"
              : "linear-gradient(to right, #ffffff, #ffffff) 1",
        }}
      >
        <span
          className={
            activeCategory === "all"
              ? "from-gradient-green to-gradient-orange relative z-10 bg-linear-to-r bg-clip-text text-xl font-semibold text-nowrap text-transparent xl:text-2xl"
              : "relative z-10 text-xl font-semibold text-nowrap text-white xl:text-2xl"
          }
        >
          All article
        </span>
      </button>

      {categories.map((category) => {
        const isActive = activeCategory === category.slug;

        return (
          <button
            key={category.id}
            onClick={() => onChange(category.slug)}
            className="group relative inline-flex h-13 cursor-pointer items-center justify-center gap-3 border px-6 py-3 font-semibold text-transparent duration-300 xl:h-13.5"
            style={{
              borderImage: isActive
                ? "linear-gradient(to right, #51aea6, #e6ca2f) 1"
                : "linear-gradient(to right, #ffffff, #ffffff) 1",
            }}
          >
            <span
              className={
                isActive
                  ? "from-gradient-green to-gradient-orange relative z-10 bg-linear-to-r bg-clip-text text-xl font-semibold text-nowrap text-transparent xl:text-2xl"
                  : "relative z-10 text-xl font-semibold text-nowrap text-white xl:text-2xl"
              }
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ArticleItem({ article }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group flex w-full flex-col-reverse items-center gap-6 md:flex-row md:gap-4 lg:gap-14 xl:gap-45"
    >
      {/* Content */}
      <div className="flex w-full grow">
        <div className="group flex w-full flex-col gap-5 sm:gap-6 md:gap-3 lg:gap-4">
          <BodyText variant="title1">{article.title}</BodyText>

          <div className="flex w-full flex-col gap-5 sm:flex-row sm:items-end sm:gap-9.5 md:flex-col md:items-start md:gap-5 lg:flex-row lg:items-end lg:gap-3">
            <BodyText variant="body3" className="text-gray grow">
              {article.insightDescription}
            </BodyText>
            <ArrowRightIcon className="group-hover:text-ocean-orange size-7.5 duration-300 sm:size-8.5" />
          </div>

          {/* Hover line */}
          <div className="group relative flex h-1.5 w-full overflow-hidden md:h-2.5">
            <div className="from-gradient-orange to-gradient-green h-full w-full bg-linear-to-r" />
            <div className="from-gradient-green to-gradient-orange absolute top-0 left-0 h-full w-0 bg-linear-to-r transition-all duration-500 ease-out group-hover:w-full" />
          </div>
        </div>
      </div>

      {/* Image */}
      {article.featuredImage?.node?.sourceUrl && (
        <div className="relative aspect-230/230 w-full shrink-0 overflow-hidden md:w-57.5">
          <Image
            src={article.featuredImage.node.sourceUrl}
            alt={article.title}
            fill
            unoptimized={true}
            className="object-cover duration-300 group-hover:scale-105"
          />
        </div>
      )}
    </Link>
  );
}

const ITEMS_PER_PAGE = 3;

export default function ArticlesSectionClient({ insights, categories }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const filteredArticles =
    activeCategory === "all"
      ? insights
      : insights?.filter((a) =>
          a.insightCategories?.nodes?.some((c) => c.slug === activeCategory),
        ) || [];

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <div className="flex w-full flex-col items-center gap-20 py-40">
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="grid w-full grid-cols-1 gap-12.5">
        {paginatedArticles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex w-full items-center justify-center gap-4">
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
