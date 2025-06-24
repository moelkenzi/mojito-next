"use client";

import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical images
    const preloadImages = ["/images/hero-left-leaf.png", "/images/hero-right-leaf.png", "/images/noise.png"];

    preloadImages.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    });

    // Preload critical fonts
    const preloadFonts = ["/fonts/Modern Negra Demo.ttf"];

    preloadFonts.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "font";
      link.type = "font/ttf";
      link.crossOrigin = "anonymous";
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

export default PerformanceOptimizer;
