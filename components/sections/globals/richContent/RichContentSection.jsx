"use client";

import { BodyText } from "@/components/globals/typography/BodyText";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

/**
 * Rich Content Section handler for Code, Math, Preformatted, Verse, and Classic.
 */
export default function RichContentSection({ data, type }) {
  const content = data?.data?.code || 
                  data?.data?.formula || 
                  data?.data?.content || 
                  data?.data?.quote || // for Pullquote if mapped here
                  "";
  const language = data?.data?.language || "";

  if (!content) return null;

  // Render logic based on type
  const isCode = type === "code" || type === "math" || type === "preformatted";
  const isVerse = type === "verse";

  return (
    <section className="bg-dark relative py-8 lg:py-12">
      <div className="container-fractal">
        <div 
          className={cn(
            "relative w-full overflow-x-auto rounded-lg border border-white/5 bg-black/40 p-6 md:p-10",
            isCode && "font-mono",
            isVerse && "italic"
          )}
        >
          {/* Language label removed as per request */}

          <div className={cn(
            "prose-links text-white/80 leading-relaxed whitespace-pre-wrap",
            !isCode && !isVerse && "whitespace-normal *:mb-6 last:*:mb-0"
          )}>
            {type === "classic" ? parse(content) : content}
          </div>
        </div>
      </div>
    </section>
  );
}
