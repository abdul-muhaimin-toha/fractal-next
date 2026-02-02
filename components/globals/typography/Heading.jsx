import React from "react";
import { cn } from "@/lib/utils";

const commonClasses = "font-sans text-current";

const headingVariants = {
  h1: "text-[3rem] sm:text-[3.15rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[7.5rem] leading-[1.2] tracking-normal font-light",
  h2: "text-[2.25rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6.375rem] leading-[1.12] 2xl:leading-[0.99] tracking-normal font-medium",
};

export default function Heading({
  as: Tag = "h1",
  variant,
  children,
  className,
  ...props
}) {
  const styleVariant = variant ?? Tag;

  return (
    <Tag
      className={cn(commonClasses, headingVariants[styleVariant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
