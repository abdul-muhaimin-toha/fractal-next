"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });

    const refresh = () => AOS.refresh();

    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
    };
  }, []);

  return <div className="aos-wrapper">{children}</div>;
};

export default AOSWrapper;
