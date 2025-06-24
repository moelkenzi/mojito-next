// app/fonts.ts

import localFont from "next/font/local";

export const modernNegra = localFont({
  src: "../../public/fonts/Modern Negra Demo.ttf", // relative to this file
  variable: "--font-modern-negra", // this will be your CSS variable
  display: "swap",
});
