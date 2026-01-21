"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/globals/buttons/Button";
import Link from "next/link";

// Desktop navigation
function DesktopNav() {
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
        <Link
          href="/about-us"
          className="hover:text-ocean-orange text-xl leading-none font-medium duration-300 xl:text-2xl"
        >
          About Us
        </Link>
        <Link
          href="/our-work"
          className="hover:text-ocean-orange text-xl leading-none font-medium duration-300 xl:text-2xl"
        >
          Our Work
        </Link>
        <Link
          href="/insights"
          className="hover:text-ocean-orange text-xl leading-none font-medium duration-300 xl:text-2xl"
        >
          Insights
        </Link>

        <Button href="contact-us" variant="gradient">
          Get in touch
        </Button>
      </div>
    </div>
  );
}

// Mobile navigation

const mobileNavLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Work", href: "/our-work" },
  { label: "Insights", href: "/insights" },
];

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-40 flex w-full items-center justify-center bg-black lg:hidden">
      <div className="container-fractal">
        <div className="relative flex h-screen w-full flex-col items-center justify-center text-center">
          <div className="flex w-full flex-col items-center justify-center gap-12">
            {mobileNavLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="hover:text-ocean-orange w-full text-xl leading-none font-medium duration-300 xl:text-2xl"
                onClick={onClose}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="absolute right-0 bottom-0 left-0 mb-5 flex w-full flex-col gap-5">
            <Link href="/contact-us">
              <Button variant="gradient" className="w-full" onClick={onClose}>
                Get in touch
              </Button>
            </Link>

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
function Header() {
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
              {/* SVG Logo unchanged */}
              <svg
                className="h-auto w-full shrink-0"
                width={196}
                height={95}
                viewBox="0 0 196 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_55_840)">
                  <mask
                    id="mask0_55_840"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={63}
                    height={95}
                  >
                    <path
                      d="M62.6099 13.0253C62.5748 12.3853 62.0488 11.8836 61.4352 11.9355L55.5792 12.3507L58.2091 6.95375C58.4897 6.38292 58.2793 5.67371 57.7358 5.37964C57.1922 5.08558 56.526 5.31045 56.2455 5.88128L52.7038 13.1118C52.7038 13.1118 52.6512 13.2329 52.6337 13.2848L44.4108 21.5013L41.7984 9.87709L43.0958 1.79898C43.201 1.15896 42.7978 0.553532 42.2016 0.449744C41.6055 0.345957 41.0269 0.778404 40.9393 1.40113L39.975 7.47269L35.6794 3.59796C35.2236 3.18281 34.5222 3.2347 34.1365 3.73634C33.7508 4.23798 33.8034 4.96449 34.2592 5.39694L39.6418 10.2576L42.6049 23.4559L31.2436 44.2307L20.0576 23.5251L23.0382 10.2749L28.4383 5.41424C28.8942 4.99909 28.9643 4.25528 28.5611 3.75364C28.1578 3.252 27.474 3.20011 27.0182 3.61526L22.7226 7.48998L21.7583 1.41843C21.6531 0.778404 21.0921 0.345957 20.4959 0.467042C19.8998 0.570829 19.4966 1.17626 19.6018 1.81628L20.8817 9.87709L18.3219 21.2418L10.2567 13.181C10.2567 13.181 10.2392 13.1291 10.2217 13.1118L6.69756 5.86398C6.41704 5.29315 5.75079 5.06828 5.20727 5.36234C4.66375 5.65641 4.45336 6.36562 4.73388 6.93645L7.36381 12.3334L1.50783 11.9182C0.894184 11.8836 0.38573 12.368 0.333132 13.008C0.298066 13.648 0.753921 14.2189 1.36757 14.2535L8.64371 14.7551L17.6731 23.7846L30.1566 46.8773V93.0626C30.1566 93.7027 30.6475 94.2389 31.2611 94.2389C31.8748 94.2389 32.3657 93.72 32.3657 93.0626V46.8773L44.5335 24.6149C44.5335 24.6149 44.5686 24.5976 44.5686 24.5803L54.387 14.7551L61.5755 14.2535C62.1891 14.2189 62.645 13.648 62.6099 13.008V13.0253Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_55_840)">
                    <path
                      d="M1.52588e-05 95L63.5041 95L63.5041 0L1.52588e-05 0L1.52588e-05 95Z"
                      fill="url(#paint0_linear_55_840)"
                    />
                  </g>
                  <path
                    d="M48.4083 61.5459V67.1504H57.1396V70.0565H48.4083V77.114H45.042V58.6744H58.2617V61.5459H48.4083Z"
                    fill="#EBEBEB"
                  />
                  <path
                    d="M78.4421 65.2303C78.4421 64.0541 78.0564 63.1546 77.3024 62.5146C76.5485 61.8746 75.4264 61.5632 73.9712 61.5632H70.0438V68.9148H73.9712C75.444 68.9148 76.5485 68.6034 77.3024 67.9634C78.0564 67.3061 78.4421 66.4066 78.4421 65.2303ZM78.5297 77.114L74.8303 71.717C74.6725 71.7343 74.4446 71.7516 74.129 71.7516H70.0438V77.1313H66.6775V58.6917H74.129C75.6894 58.6917 77.057 58.9512 78.2142 59.4874C79.3889 60.0064 80.283 60.7675 80.8967 61.7535C81.5103 62.7394 81.8259 63.8984 81.8259 65.2649C81.8259 66.6315 81.4928 67.8423 80.809 68.8456C80.1603 69.8489 79.2135 70.5927 77.9687 71.077L82.124 77.1313H78.5122L78.5297 77.114Z"
                    fill="#EBEBEB"
                  />
                  <path
                    d="M101.393 70.1602L97.9737 62.0994L94.5899 70.1602H101.393ZM102.497 72.8414H93.4502L91.6619 77.114H88.1904L96.3432 58.6744H99.6569L107.827 77.114H104.303L102.497 72.8414Z"
                    fill="#EBEBEB"
                  />
                  <path
                    d="M123.431 77.3735C121.608 77.3735 119.942 76.9756 118.47 76.1626C116.997 75.3323 115.857 74.2079 114.998 72.7549C114.174 71.3192 113.753 69.6932 113.753 67.8769C113.753 66.0606 114.174 64.4346 115.016 62.9989C115.857 61.5632 117.014 60.4388 118.487 59.6258C119.977 58.7955 121.626 58.3804 123.449 58.3804C124.939 58.3804 126.289 58.6398 127.517 59.1761C128.744 59.695 129.778 60.4734 130.62 61.4767L128.446 63.5524C127.131 62.1167 125.518 61.3902 123.607 61.3902C122.362 61.3902 121.257 61.667 120.276 62.2378C119.294 62.774 118.522 63.5524 117.979 64.5384C117.435 65.5244 117.155 66.6315 117.155 67.8769C117.155 69.1224 117.435 70.2467 117.979 71.2154C118.522 72.2014 119.294 72.9798 120.276 73.5333C121.257 74.0696 122.362 74.3463 123.607 74.3463C125.518 74.3463 127.131 73.6198 128.446 72.1668L130.62 74.2771C129.778 75.2804 128.726 76.0415 127.499 76.5777C126.272 77.0967 124.922 77.3735 123.431 77.3735Z"
                    fill="#EBEBEB"
                  />
                  <path
                    d="M142.49 61.5632H136.476V58.6744H151.835V61.5632H145.838V77.114H142.49V61.5632Z"
                    fill="#EBEBEB"
                  />
                  <path
                    d="M169.262 70.1602L165.843 62.0994L162.46 70.1602H169.262ZM170.367 72.8414H161.32L159.532 77.114H156.06L164.213 58.6744H167.527L175.697 77.114H172.173L170.367 72.8414Z"
                    fill="#EBEBEB"
                  />
                  <path
                    d="M183.166 58.6744H186.532V74.2252H196V77.114H183.166V58.6744Z"
                    fill="#EBEBEB"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_55_840"
                    x1="63.5041"
                    y1="47.5"
                    x2="1.52588e-05"
                    y2="47.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E6CA2F" />
                    <stop offset="0.39" stopColor="#AFBF5A" />
                    <stop offset={1} stopColor="#51AEA6" />
                  </linearGradient>
                  <clipPath id="clip0_55_840">
                    <rect width={196} height={95} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>

            {/* DESKTOP NAV */}
            <DesktopNav />

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
      {isMenuOpen && <MobileNav onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}

export default Header;
