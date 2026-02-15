import React from "react";
import { cn } from "@/lib/utils";

const commonClasses = "font-sans text-current";

const headingVariants = {
  h1: "text-[2.4rem] sm:text-[2.8rem] md:text-[3.6rem] lg:text-[4.5rem] xl:text-[5.4rem] 2xl:text-[6.5rem] leading-[1.1] tracking-tight font-light",
  h2: "text-[2rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4.6rem] 2xl:text-[5.5rem] leading-[1.12] 2xl:leading-[1] tracking-tight font-medium",
  h3: "text-[1.8rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] xl:text-[3.2rem] 2xl:text-[3.8rem] leading-[1.2] tracking-normal font-semibold",
  h4: "text-[1.5rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.3rem] xl:text-[2.6rem] 2xl:text-[3rem] leading-[1.3] tracking-normal font-bold",
  h5: "text-[1.3rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.3rem] leading-[1.4] tracking-normal font-bold",
  h6: "text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem] 2xl:text-[1.7rem] leading-[1.5] tracking-widest font-bold uppercase",
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
