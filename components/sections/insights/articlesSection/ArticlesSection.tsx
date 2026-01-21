"use client";

import { useState } from "react";
import ArrowRightIcon from "@/components/globals/icons/ArrowRightIcon";
import { BodyText } from "@/components/globals/typography/BodyText";
import Image from "next/image";

// ------------------- Types -------------------
type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
};

type Category = {
  label: string;
  value: string;
};

// ------------------- Data -------------------
// Preserving your categories structure
const categories: Category[] = [
  { label: "All article", value: "all" },
  { label: "Category 1", value: "cat1" },
  { label: "Category 2", value: "cat2" },
  { label: "Category 3", value: "cat3" },
  { label: "Category 4", value: "cat4" },
];

// Content extracted from the screenshot
const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Algorithmic Determinism",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/insights/articles/article-1.png", // Update path as needed
    category: "cat1",
  },
  {
    id: 2,
    title: "Reflections from the Black Box",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/insights/articles/article-2.png", // Update path as needed
    category: "cat2",
  },
  {
    id: 3,
    title: "Open vs. Closed Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/insights/articles/article-3.png", // Update path as needed
    category: "cat3",
  },
];

// ------------------- Components -------------------
function CategoryTabs({
  activeCategory,
  onChange,
}: {
  activeCategory: string;
  onChange: (value: string) => void;
}) {
  return (
    <div
      data-aos="fade-down"
      className="flex w-full flex-row items-center justify-start gap-5 overflow-auto pb-3 lg:justify-center"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category.value;

        return (
          <button
            key={category.value}
            onClick={() => onChange(category.value)}
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
              {category.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ArticleItem({ article }: { article: Article }) {
  return (
    <div
      data-aos="fade-up"
      className="group flex w-full flex-col-reverse items-center gap-6 md:flex-row md:gap-4 lg:gap-14 xl:gap-45"
    >
      {/* Content */}
      <div className="flex w-full grow">
        <div className="group flex w-full flex-col gap-5 sm:gap-6 md:gap-3 lg:gap-4">
          <BodyText variant="title1">{article.title}</BodyText>

          <div className="flex w-full flex-col gap-5 sm:flex-row sm:items-end sm:gap-9.5 md:flex-col md:items-start md:gap-5 lg:flex-row lg:items-end lg:gap-3">
            <BodyText variant="body3" className="text-gray grow">
              {article.description}
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
      <div className="relative aspect-230/230 w-full shrink-0 overflow-hidden md:w-57.5">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

function ArticlesList({ articles }: { articles: Article[] }) {
  return (
    <div className="grid w-full grid-cols-1 gap-12.5">
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
}

// ------------------- Main Section -------------------
export default function ArticlesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles =
    activeCategory === "all"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center gap-20 py-40">
          <CategoryTabs
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          <ArticlesList articles={filteredArticles} />
        </div>
      </div>
    </section>
  );
}
