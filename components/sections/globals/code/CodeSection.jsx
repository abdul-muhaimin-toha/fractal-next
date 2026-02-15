"use client";

import { cn } from "@/lib/utils";

/**
 * Code Section component.
 */
export default function CodeSection({ data }) {
  const content = data?.data?.code || "";

  if (!content) return null;

  return (
    <section className="bg-dark relative py-3 lg:py-6">
      <div className="container-fractal">
        <div className="relative w-full overflow-x-auto rounded-lg border border-white/5 bg-black/40 p-5 md:p-8 font-mono">
          <div className="prose-links text-white/80 leading-relaxed whitespace-pre-wrap">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}
