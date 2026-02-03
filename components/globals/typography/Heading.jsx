import React from "react";
import { cn } from "@/lib/utils";

const commonClasses = "font-sans text-current";

const headingVariants = {
  h1: "text-[2.4rem] sm:text-[2.52rem] md:text-[3.2rem] lg:text-[4rem] xl:text-[4.8rem] 2xl:text-[6rem] leading-[1.2] tracking-normal font-light",
  h2: "text-[1.8rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[3.2rem] xl:text-[4rem] 2xl:text-[5.1rem] leading-[1.12] 2xl:leading-[0.99] tracking-normal font-medium",
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
