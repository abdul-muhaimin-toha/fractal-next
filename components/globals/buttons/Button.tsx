"use client";

import React, { JSX } from "react";
import clsx from "clsx";
import Link from "next/link";
import ArrowRoundedIcon from "../icons/ArrowRoundedIcon";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: React.ReactNode;
  variant: "icon" | "gradient" | "border";
  className?: string;
};

export function Button({
  href,
  children,
  variant,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center gap-3 cursor-pointer font-semibold duration-300";

  const sizes: Record<string, string> = {
    icon: "h-9 xl:h-12.5",
    gradient: "h-12 px-6 py-3 xl:h-13.5",
    border: "h-13 px-6 py-3 border xl:h-13.5",
  };

  const variantClasses: Record<string, string> = {
    icon: clsx(
      "text-ocean-green group-hover:text-ocean-blue",
      "text-sm sm:text-base xl:text-xl xl:tracking-[2.4px]",
      "leading-none font-bold tracking-[1.68px] uppercase",
    ),
    gradient: clsx(
      "text-black z-10 text-xl xl:text-2xl",
      "leading-none font-semibold",
    ),
    border: "text-transparent",
  };

  const extraElements: Record<string, JSX.Element | null> = {
    icon: null,
    gradient: (
      <>
        {/* Base gradient */}
        <div className="from-gradient-green to-gradient-orange absolute inset-0 z-0 bg-linear-to-r" />
        {/* Hover overlay */}
        <div className="from-gradient-orange to-gradient-green absolute inset-0 z-0 bg-linear-to-r opacity-0 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-100" />
      </>
    ),
    border: null,
  };

  const borderButtonStyle =
    variant === "border"
      ? { borderImage: "linear-gradient(to right, #51aea6, #e6ca2f) 1" }
      : undefined;

  const content = (
    <>
      {extraElements[variant]}

      {variant === "border" ? (
        <span className="from-gradient-green to-gradient-orange relative z-10 bg-linear-to-r bg-clip-text text-xl leading-none font-semibold text-transparent xl:text-2xl">
          {children}
        </span>
      ) : (
        <span className="relative z-10">{children}</span>
      )}

      {variant === "icon" && (
        <ArrowRoundedIcon className="size-9 duration-300 group-hover:translate-x-1 xl:size-12.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} passHref>
        <p
          className={clsx(
            baseStyles,
            sizes[variant],
            variantClasses[variant],
            className,
          )}
          style={borderButtonStyle}
        >
          {content}
        </p>
      </Link>
    );
  }

  return (
    <button
      className={clsx(
        baseStyles,
        sizes[variant],
        variantClasses[variant],
        className,
      )}
      style={borderButtonStyle}
      {...props}
    >
      {content}
    </button>
  );
}
