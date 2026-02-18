"use client";

import { BodyText } from "@/components/globals/typography/BodyText";
import parse from "html-react-parser";
import { ChevronDown } from "lucide-react";

/**
 * Details Section component for Core Details (Accordion).
 */
export default function DetailsSection({ data }) {
  const { summary, content } = data?.data || {};

  if (!summary) return null;

  return (
    <section className="bg-dark relative py-3 lg:py-6">
      <div className="container-fractal-sm">
        <details className="group border-b border-white/10 pb-6 open:pb-12">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4">
            <BodyText variant="title2" className="hover:text-white/80 transition-colors">
              {summary}
            </BodyText>
            <div className="rounded-full bg-white/10 p-1 text-white">
              <ChevronDown size={20} strokeWidth={3} />
            </div>
          </summary>
          
          <div className="mt-8">
            <BodyText as="div" variant="body1" className="text-white/70 *:mb-6 last:*:mb-0">
              {content && parse(content)}
            </BodyText>
          </div>
        </details>
      </div>
    </section>
  );
}
