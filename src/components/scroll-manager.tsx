"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/hero-section";
import Projects from "@/components/projects-section";
import Contact from "@/components/contact-section";

export default function ScrollManager() {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const maxScroll = height - windowHeight;
      const currentProgress = Math.min(Math.max(-top / maxScroll, 0), 1);
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  // Phase 1 (0% to 15%): Horizontal Slide (Projects)
  const horizontalProgress = Math.min(scrollProgress / 0.15, 1);

  // Phase 2 (20% to 75%): Vertical Scroll (Projects)
  // Leaves a 5% scroll deadzone before scrolling down begins
  const verticalProgress = Math.min(
    Math.max((scrollProgress - 0.2) / 0.55, 0),
    1,
  );

  // Phase 3 (85% to 100%): Horizontal Slide (Contact)
  // Leaves a massive 10% scroll deadzone before Contact slides in
  const contactHorizontalProgress = Math.min(
    Math.max((scrollProgress - 0.85) / 0.15, 0),
    1,
  );

  return (
    <main className="w-full bg-[#0000FF] text-white font-serif selection:bg-[#ffb300] selection:text-[#0000FF]">
      {/* SINGLE STICKY SCROLL CONTAINER */}
      <section
        id="scroll-container"
        ref={containerRef}
        className="h-auto xl:h-[1200vh] w-full relative"
      >
        <div className="relative xl:sticky top-0 h-auto xl:h-screen w-full overflow-x-hidden xl:overflow-hidden flex flex-col">
          <Hero />
          <Projects
            horizontalProgress={horizontalProgress}
            verticalProgress={verticalProgress}
          />
          <Contact contactHorizontalProgress={contactHorizontalProgress} />
        </div>
      </section>
    </main>
  );
}
