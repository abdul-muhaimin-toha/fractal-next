import React from "react";
import { cn } from "@/lib/utils";

const baseClasses = "font-sans text-current";

const bodyTextVariants = {
  body1:
    "text-[1.5rem] sm:text-[1.625rem] md:text-[1.75rem] lg:text-[1.875rem] xl:text-[1.9rem] 2xl:text-[2rem] leading-[1.3] tracking-normal font-normal",
  body2:
    "text-[1.5rem] sm:text-[1.625rem] md:text-[1.75rem] lg:text-[1.875rem] xl:text-[1.9rem] 2xl:text-[2rem] leading-[1.3] tracking-normal font-semibold",
  body3:
    "text-[1.125rem] sm:text-[1.25rem] md:text-[1.4375rem] lg:text-[1.625rem] xl:text-[1.7rem] 2xl:text-[1.75rem] leading-[1.3] tracking-[-1%]  2xl:tracking-normal font-normal",
  body4:
    "text-[1.125rem] sm:text-[1.21875rem] md:text-[1.28125rem] lg:text-[1.34375rem] xl:text-[1.36rem] 2xl:text-[1.375rem] leading-[1.33] sm:leading-[1.31] md:leading-[1.29] lg:leading-[1.28]  2xl:leading-[1.27] tracking-normal font-bold  2xl:font-semibold",

  title1:
    "text-[1.5rem] sm:text-[1.875rem] md:text-[2.25rem] lg:text-[2.625rem] xl:text-[2.75rem] 2xl:text-[3rem] leading-[1.3] tracking-normal font-medium",
  title2:
    "text-[1.5rem] sm:text-[1.625rem] md:text-[1.75rem] lg:text-[1.8125rem] xl:text-[1.85rem] 2xl:text-[1.875rem] leading-[1.3] sm:leading-[1.28] md:leading-[1.275] lg:leading-[1.27]  2xl:leading-[1.27] tracking-normal font-medium",
  title3:
    "text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.35rem] 2xl:text-[2.5rem] leading-[1.3] tracking-normal font-normal",
  title4:
    "text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.35rem] 2xl:text-[2.5rem] leading-[1.3] tracking-normal font-semibold",
};

export function BodyText({
  as: Component = "p",
  variant = "body1",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(baseClasses, bodyTextVariants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
