"use client";

import { BodyText } from "@/components/globals/typography/BodyText";
import { cn } from "@/lib/utils";

/**
 * Table Section component for Core Table.
 */
export default function TableSection({ data }) {
  const { rows } = data?.data || {};

  if (!rows || rows.length === 0) return null;

  return (
    <section className="bg-dark relative py-3 lg:py-6">
      <div className="container-fractal-sm">
        <div className="w-full overflow-x-auto rounded-xl border border-white/10 bg-black/20">
          <table className="w-full border-collapse text-left">
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr 
                  key={rowIndex}
                  className={cn(
                    "border-b border-white/5 hover:bg-white/[0.02]",
                    rowIndex === 0 && "bg-white/5 font-semibold"
                  )}
                >
                  {row.columns?.map((col, colIndex) => (
                    <td 
                      key={colIndex}
                      className="p-5 md:p-8"
                    >
                      <BodyText 
                        variant={rowIndex === 0 ? "title4" : "body1"} 
                        className={cn(
                          rowIndex === 0 ? "text-white" : "text-white/70"
                        )}
                      >
                        {col.cell}
                      </BodyText>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
