"use client";

import { cn } from "@/lib/utils";

/**
 * Math Section component.
 */
export default function MathSection({ data }) {
  const content = data?.data?.formula || "";

  if (!content) return null;

  return (
    <section className="bg-dark relative py-3 lg:py-6">
      <div className="container-fractal-sm">
        <div className="relative w-full overflow-x-auto rounded-lg border border-white/5 bg-black/40 p-5 md:p-8 font-mono">
          <div className="prose-links text-white/80 leading-relaxed whitespace-pre-wrap">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}
