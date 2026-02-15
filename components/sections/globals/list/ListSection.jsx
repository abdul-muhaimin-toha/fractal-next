"use client";

import { BodyText } from "@/components/globals/typography/BodyText";
import { cn } from "@/lib/utils";

/**
 * List Section component for Core List.
 */
export default function ListSection({ data }) {
  const { list_items, list_type } = data?.data || {};

  if (!list_items || list_items.length === 0) return null;

  const Tag = list_type === "ol" ? "ol" : "ul";

  return (
    <section className="bg-dark relative py-3 lg:py-6">
      <div className="container-fractal">
        <Tag className={cn(
          "flex flex-col gap-6",
          Tag === "ul" ? "list-none" : "list-none [counter-reset:list-counter]"
        )}>
          {list_items.map((item, index) => (
            <li 
              key={index}
              className="group flex items-start gap-4 [counter-increment:list-counter]"
            >
              {Tag === "ul" ? (
                <div className="bg-ocean-blue mt-2.5 h-2 w-2 shrink-0 rounded-full group-hover:scale-125 transition-transform duration-300" />
              ) : (
                <BodyText variant="body1" className="text-ocean-blue min-w-[1.5rem] font-bold">
                  {index + 1}.
                </BodyText>
              )}
              <BodyText variant="body1" className="text-white/80 group-hover:text-white transition-colors duration-300">
                {item.item}
              </BodyText>
            </li>
          ))}
        </Tag>
      </div>
    </section>
  );
}
