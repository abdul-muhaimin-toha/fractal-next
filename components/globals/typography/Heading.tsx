import React from "react";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2";

const commonClasses = "font-sans text-current";

const headingVariants: Record<HeadingTag, string> = {
  h1: "text-[3rem] sm:text-[3.15rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[7.5rem] leading-[1.2] tracking-normal font-light",
  h2: "text-[2.25rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6.375rem] leading-[1.12] 2xl:leading-[0.99] tracking-normal font-medium",
} as const;

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingTag;
  variant?: HeadingTag;
  children: React.ReactNode;
  className?: string;
}

export default function Heading({
  as = "h1",
  variant,
  children,
  className,
  ...props
}: HeadingProps) {
  const Tag: HeadingTag = as;
  const styleVariant: HeadingTag = variant ?? Tag;

  return (
    <Tag
      className={cn(commonClasses, headingVariants[styleVariant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
