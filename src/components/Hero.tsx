"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Image from "next/image";

const Hero = () => {
  useGSAP(() => {
    // Register SplitText plugin
    gsap.registerPlugin(SplitText);

    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphsSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((chars) => chars.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphsSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        {/* Left Leaf */}
        <div className="left-leaf">
          <Image
            src="/images/hero-left-leaf.png"
            height={326.25}
            width={326.25}
            alt="left-leaf"
            priority
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </div>

        {/* Right Leaf */}
        <div className="right-leaf">
          <Image
            src="/images/hero-right-leaf.png"
            height={326.25}
            width={326.25}
            alt="right-leaf"
            priority
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </div>

        <div className="body">
          {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}

          <div className="content">
            <div className="hidden space-y-5 md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes —
                designed to delight your senses.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>

        {/* <div className="video absolute inset-0">
          <video muted playsInline preload="auto" src="/videos/output.mp4" />
        </div> */}
      </section>
    </>
  );
};
export default Hero;
