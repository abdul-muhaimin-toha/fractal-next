import React from "react";
import { cn } from "@/lib/utils";

const baseClasses = "font-sans text-current";

const bodyTextVariants = {
  body1:
    "text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.52rem] 2xl:text-[1.6rem] leading-[1.3] tracking-normal font-normal",
  body2:
    "text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.52rem] 2xl:text-[1.6rem] leading-[1.3] tracking-normal font-semibold",
  body3:
    "text-[0.9rem] sm:text-[1rem] md:text-[1.15rem] lg:text-[1.3rem] xl:text-[1.36rem] 2xl:text-[1.4rem] leading-[1.3] tracking-[-1%]  2xl:tracking-normal font-normal",
  body4:
    "text-[0.9rem] sm:text-[0.975rem] md:text-[1.025rem] lg:text-[1.075rem] xl:text-[1.088rem] 2xl:text-[1.1rem] leading-[1.33] sm:leading-[1.31] md:leading-[1.29] lg:leading-[1.28]  2xl:leading-[1.27] tracking-normal font-bold  2xl:font-semibold",

  title1:
    "text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.1rem] xl:text-[2.2rem] 2xl:text-[2.4rem] leading-[1.3] tracking-normal font-medium",
  title2:
    "text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.45rem] xl:text-[1.48rem] 2xl:text-[1.5rem] leading-[1.3] sm:leading-[1.28] md:leading-[1.275] lg:leading-[1.27]  2xl:leading-[1.27] tracking-normal font-medium",
  title3:
    "text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[1.88rem] 2xl:text-[2rem] leading-[1.3] tracking-normal font-normal",
  title4:
    "text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[1.88rem] 2xl:text-[2rem] leading-[1.3] tracking-normal font-semibold",
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
