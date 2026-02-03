"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/globals/buttons/Button";
import Link from "next/link";
import Image from "next/image";

// Desktop navigation
function DesktopNav({ menuItems, themeOptions }) {
  return (
    <div className="hidden flex-col items-end gap-5 lg:flex">
      <div className="flex flex-row items-center gap-2.5">
        <button className="hover:text-gradient-orange cursor-pointer text-[18px] leading-none font-normal text-white duration-300 hover:underline">
          English
        </button>
        <span className="h-4 w-px bg-white" />
        <button className="hover:text-gradient-orange cursor-pointer text-[18px] leading-none font-normal text-white duration-300 hover:underline">
          François
        </button>
      </div>

      <div className="flex flex-row items-center gap-10 xl:gap-12.5">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.uri}
            className="hover:text-ocean-orange text-xl leading-none font-medium duration-300 xl:text-2xl"
          >
            {item.label}
          </Link>
        ))}

        {themeOptions?.buttonText && (
          <Button
            href={themeOptions?.buttonPage?.[0]?.uri || "#"}
            variant="gradient"
          >
            {themeOptions.buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}

// Mobile navigation

function MobileNav({ onClose, menuItems, themeOptions }) {
  return (
    <div className="fixed inset-0 z-40 flex w-full items-center justify-center bg-black lg:hidden">
      <div className="container-fractal">
        <div className="relative flex h-screen w-full flex-col items-center justify-center text-center">
          <div className="flex w-full flex-col items-center justify-center gap-12">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.uri}
                className="hover:text-ocean-orange w-full text-xl leading-none font-medium duration-300 xl:text-2xl"
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="absolute right-0 bottom-0 left-0 mb-5 flex w-full flex-col gap-5">
            {themeOptions?.buttonText && (
              <Link href={themeOptions?.buttonPage?.[0]?.uri || "#"}>
                <Button variant="gradient" className="w-full" onClick={onClose}>
                  {themeOptions.buttonText}
                </Button>
              </Link>
            )}

            <div className="flex w-full flex-row items-center justify-center gap-2.5">
              <button className="hover:text-ocean-green text-base leading-none font-normal text-white duration-300 hover:underline">
                English
              </button>
              <span className="h-4 w-px bg-white" />
              <button className="hover:text-ocean-green text-base leading-none font-normal text-white duration-300 hover:underline">
                François
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Header component
function Header({ menuItems, themeOptions }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* HEADER */}
      <div className="shadow-gray/20 absolute top-0 right-0 left-0 z-50 flex w-full bg-black shadow-xs">
        <div className="container-fractal">
          <div className="flex w-full flex-row items-center justify-between gap-5 py-5 lg:py-6 xl:py-10">
            {/* LOGO */}
            <Link
              href="/"
              className="flex w-22 cursor-pointer items-center justify-center lg:w-36 xl:w-49"
              onClick={() => setIsMenuOpen(false)}
            >
              {themeOptions?.websiteLogo && (
                <Image
                  src={themeOptions.websiteLogo}
                  alt="Logo"
                  width={196}
                  height={95}
                  className="h-auto w-full shrink-0"
                />
              )}
            </Link>

            {/* DESKTOP NAV */}
            <DesktopNav menuItems={menuItems} themeOptions={themeOptions} />

            {/* HAMBURGER */}
            <button
              className="flex size-8.5 items-center justify-center lg:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-full w-full shrink-0"
                width={34}
                height={34}
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width={34}
                  height={34}
                  fill="url(#paint0_linear_40_319)"
                />
                <rect x={6} y={9} width={22} height={2} fill="white" />
                <rect x={6} y={16} width={22} height={2} fill="white" />
                <rect x={6} y={23} width={22} height={2} fill="white" />
                <defs>
                  <linearGradient
                    id="paint0_linear_40_319"
                    x1={0}
                    y1={17}
                    x2={34}
                    y2={17}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#51AEA6" />
                    <stop offset={1} stopColor="#E6CA2F" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      {isMenuOpen && <MobileNav onClose={() => setIsMenuOpen(false)} menuItems={menuItems} themeOptions={themeOptions} />}
    </>
  );
}

export default Header;
