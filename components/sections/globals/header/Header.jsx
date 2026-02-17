"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/globals/buttons/Button";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

// Desktop navigation
function DesktopNav({ menuItems, themeOptions }) {
  return (
    <div className="hidden flex-col items-end gap-5 lg:flex">
      {themeOptions?.enableLanguageSwitcher && <LanguageSwitcher />}

      <div className="flex flex-row items-center gap-10 xl:gap-12.5">
        {menuItems.map((item) => {
          const hasChildren = item.children && item.children.length > 0;

          if (hasChildren) {
            return (
              <DropdownMenu key={item.id} modal={false}>
                <DropdownMenuTrigger asChild>
                  <button className="hover:text-ocean-orange flex cursor-pointer items-center gap-2 justify-center border-none bg-transparent p-0 text-base font-medium leading-none duration-300 outline-none xl:text-[1.2rem] [&[data-state=open]>svg]:rotate-180">
                    {item.label}
                    <ChevronDown className="size-5 transition-transform duration-200" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="bg-black hidden lg:block -translate-x-1/12 border-white/10 min-w-[200px] z-[60] mt-8 rounded-sm"
                >
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.id} asChild className="rounded-sm cursor-pointer">
                      <Link
                        href={child.uri}
                        className="hover:text-ocean-orange block w-full px-4 py-2 text-sm text-white duration-300"
                      >
                        {child.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.uri}
              className="hover:text-ocean-orange text-base font-medium leading-none duration-300 xl:text-[1.2rem]"
            >
              {item.label}
            </Link>
          );
        })}

        {themeOptions?.buttonText && (
          <Button
            href={
              themeOptions?.linkSource?.value === "custom"
                ? themeOptions?.customUrl
                : themeOptions?.buttonPage?.[0]?.uri || "#"
            }
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
    <div className="fixed inset-0 z-40 bg-black overflow-y-auto lg:hidden">
      <div className="container-fractal flex min-h-full flex-col">
        {/* Navigation links */}
        <div className="flex flex-1 flex-col items-center justify-start pt-32 pb-16 text-center">
          <div className="flex w-full flex-col items-center gap-10">
            {menuItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;

              if (hasChildren) {
                return (
                  <Accordion
                    key={item.id}
                    type="single"
                    collapsible
                    className="w-full"
                  >
                    <AccordionItem value={item.id} className="border-none">
                      <AccordionTrigger className="hover:text-ocean-orange flex w-full justify-center gap-2 py-0 text-base font-medium leading-none duration-300 hover:no-underline xl:text-[1.2rem] ml-6">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-6 pt-8 pb-0">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            href={child.uri}
                            className="hover:text-ocean-orange text-sm font-medium leading-none duration-300"
                            onClick={onClose}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.uri}
                  className="hover:text-ocean-orange w-full text-base font-medium leading-none duration-300 xl:text-[1.2rem]"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Action items at bottom */}
        <div className="mt-auto flex w-full flex-col gap-5 pb-10">
          {themeOptions?.buttonText && (
            <Link
              href={
                themeOptions?.linkSource?.value === "custom"
                  ? themeOptions?.customUrl
                  : themeOptions?.buttonPage?.[0]?.uri || "#"
              }
            >
              <Button variant="gradient" className="w-full" onClick={onClose}>
                {themeOptions.buttonText}
              </Button>
            </Link>
          )}

          {themeOptions?.enableLanguageSwitcher && (
            <LanguageSwitcher isMobile={true} />
          )}
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
              className="flex w-22 cursor-pointer items-center justify-center !opacity-100 lg:w-36 xl:w-49"
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
      {isMenuOpen && (
        <MobileNav
          onClose={() => setIsMenuOpen(false)}
          menuItems={menuItems}
          themeOptions={themeOptions}
        />
      )}
    </>
  );
}

export default Header;
