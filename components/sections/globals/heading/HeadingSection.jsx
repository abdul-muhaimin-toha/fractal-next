"use client";

import Heading from "@/components/globals/typography/Heading";

/**
 * Heading Section component for both Core and Stretchy variants.
 */
export default function HeadingSection({ data }) {
  const { content, level, is_stretchy } = data?.data || {};

  if (!content) return null;

  return (
    <section className="bg-dark relative py-3 lg:py-6">
      <div className="container-fractal">
        <div className="relative w-fit">
          <Heading
            as={level || "h2"}
            variant={level || "h2"}
            className="text-white"
          >
            {content}
          </Heading>
        </div>
      </div>
    </section>
  );
}
