"use client";

import React from "react";

const LanguageSwitcher = ({ isMobile = false }) => {
  const commonStyles =
    "cursor-pointer leading-none font-normal text-white duration-300 hover:underline";
  const desktopStyles = "text-[14.4px] hover:text-gradient-orange";
  const mobileStyles = "text-[0.8rem] hover:text-ocean-green";

  const buttonStyle = `${commonStyles} ${isMobile ? mobileStyles : desktopStyles}`;

  return (
    <div
      className={`flex flex-row items-center gap-2.5 ${isMobile ? "w-full justify-center" : ""}`}
    >
      <button className={buttonStyle}>English</button>
      <span className="h-4 w-px bg-white" />
      <button className={buttonStyle}>Français</button>
    </div>
  );
};

export default LanguageSwitcher;
