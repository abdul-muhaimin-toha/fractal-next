"use client";

import { BodyText } from "@/components/globals/typography/BodyText";
import { cn } from "@/lib/utils";

/**
 * Quote Section component for both Quote and Pullquote variants.
 */
export default function QuoteSection({ data }) {
  const { quote, cite } = data?.data || {};

  if (!quote) return null;

  return (
    <section className="bg-dark relative py-3 lg:py-6">
      <div className="container-fractal">
        <div className="relative border-l-4 border-ocean-blue pl-8 md:pl-12">
          <BodyText 
            variant="title3" 
            className="italic text-white/90 leading-relaxed lg:text-[2.2rem]"
          >
            "{quote}"
          </BodyText>
          
          {cite && (
            <div className="mt-6 flex items-center gap-4">
              <div className="h-[1px] w-8 bg-ocean-blue" />
              <BodyText variant="body4" className="text-ocean-blue uppercase tracking-widest">
                {cite}
              </BodyText>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
