"use client";

import { BodyText } from "@/components/globals/typography/BodyText";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

/**
 * Paragraph Section component for both Core and Stretchy variants.
 */
export default function ParagraphSection({ data }) {
  const { content } = data?.data || {};

  if (!content) return null;

  return (
    <section className="bg-dark relative overflow-hidden py-3 lg:py-6">
      <div className="container-fractal-sm relative z-10">
        <div className="relative w-full">
          <BodyText
            as="div"
            variant="body1"
            className="prose-links text-white/80 *:mb-6 last:*:mb-0"
          >
            {parse(content)}
          </BodyText>
        </div>
      </div>
    </section>
  );
}
