"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
      <section ref={containerRef} className="h-[1000vh] w-full relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col p-6 sm:p-12">
          {/* BACKGROUND / HERO TEXT */}
          <div className="absolute inset-0 p-6 sm:p-12 grid grid-cols-1 sm:grid-cols-12 gap-8 z-0">
            {/* Top Left: Logo / Name */}
            <div className="sm:col-span-3 sm:col-start-1 flex flex-col justify-between h-[calc(100vh-6rem)]">
              <h2 className="text-2xl italic tracking-[-0.05em] sm:text-3xl leading-[0.85] whitespace-nowrap">
                <span className="mr-1">Karel </span>Braborec
              </h2>
              <div className="mt-12 sm:mt-0 text-xl italic tracking-[-0.05em]">
                <span className="mr-1">software</span> developer
              </div>
            </div>

            {/* Center/Right Content */}
            <div className="sm:col-span-7 sm:col-start-6 flex flex-col justify-center space-y-16 sm:mt-32">
              <div className="text-7xl text-white sm:text-5xl leading-snug tracking-[-0.05em] lowercase max-w-xl">
                frontend developer crafting intelligent, high-performance web experiences. <br />
                <br />
                <span className="font-medium">
                  react.js & next.js, typescript, and python & AI integrations.
                </span>
              </div>

              <div className="flex flex-col space-y-4 text-sm sm:text-2xl italic tracking-[-0.1em]  tracking-[-0.05em] lowercase w-fit">
                <p>* scroll down to view recent projects.</p>
                <p>* press CTRL+ALT+DEL to contact directly.</p>
              </div>
            </div>

            {/* Floating Navigation */}
            <div className="absolute top-6 sm:top-12 right-6 sm:right-12 italic text-right space-y-4 tracking-[-0.05em] lowercase text-lg sm:text-2xl font-medium">
              <a href="#" className="block hover: transition-all">
                archive
              </a>
            </div>

            <div className="absolute bottom-6 sm:bottom-12 italic right-6 sm:right-12  tracking-[-0.05em] lowercase text-lg sm:text-2xl font-medium">
              <a
                href="mailto:karel@example.com"
                className="hover:underline underline-offset-8 decoration-1"
              >
                contact
              </a>
            </div>
          </div>

          {/* FOREGROUND: PROJECTS SLIDING IN */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden flex justify-end">
            {/* Phase 1: Horizontal Translation of the split-screen panel */}
            <div
              className="w-full sm:w-[75vw] h-full bg-[#0000FF] pointer-events-auto border-l border-white/20 shadow-2xl flex"
              style={{
                transform: `translateX(${(1 - horizontalProgress) * 100}vw)`,
              }}
            >
              {/* Left Half of Panel: Sticky Heading */}
              <div className="hidden sm:flex w-[40%] bg-[#0D0DFF] h-screen items-center justify-center relative border-r border-white/20">
                <h2 className="text-6xl italic sm:text-8xl text-white lg:text-[8rem]  tracking-[-0.05em] lowercase absolute z-10">
                  projects
                </h2>
              </div>

              {/* Right Half of Panel: Phase 2 Vertical Translation */}
              <div className="w-full sm:w-[60%] h-screen relative overflow-hidden">
                <div
                  className="flex flex-col items-center sm:items-start w-full h-max min-h-screen px-6 sm:px-12 pt-[15vh] sm:pt-[10vh] pb-[3vh] space-y-32"
                  style={{
                    transform: `translateY(calc(-${verticalProgress} * (100% - 100vh)))`,
                  }}
                >
                  <h2 className="sm:hidden text-6xl italic tracking-[-0.05em] lowercase mb-16 text-center">
                    projects
                  </h2>

                  {/* Project 1 */}
                  <div className="group flex flex-col space-y-6 w-full max-w-2xl">
                    <div className="w-full h-[50vh] sm:h-[70vh] bg-white/5 hover:bg-white/10 transition-colors border border-white/10 relative overflow-hidden flex items-center justify-center">
                      <span className="opacity-50  tracking-[-0.05em] lowercase">
                        project_01.exe
                      </span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl sm:text-4xl text-white  tracking-[-0.05em] lowercase">
                        system core
                      </h3>
                      <span className="text-sm sm:text-lg  text-white tracking-[-0.05em] lowercase opacity-70">
                        2026
                      </span>
                    </div>
                    <p className="text-lg  tracking-[-0.05em] lowercase opacity-80 max-w-md">
                      A high-performance distributed backend architecture
                      written in Rust and Go, designed for scalable data
                      processing.
                    </p>
                  </div>

                  {/* Project 2 */}
                  <div className="group flex flex-col space-y-6 w-full max-w-2xl">
                    <div className="w-full h-[50vh] sm:h-[70vh] bg-white/5 hover:bg-white/10 transition-colors border border-white/10 relative overflow-hidden flex items-center justify-center">
                      <span className="opacity-50  tracking-[-0.05em] lowercase">
                        project_02.sys
                      </span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl sm:text-4xl text-white  tracking-[-0.05em] lowercase">
                        neural interface
                      </h3>
                      <span className="text-sm sm:text-lg text-white  tracking-[-0.05em] lowercase opacity-70">
                        2025
                      </span>
                    </div>
                    <p className="text-lg  tracking-[-0.05em] lowercase opacity-80 max-w-md">
                      Experimental web composition and interactive 3D elements
                    </p>
                  </div>

                  {/* Project 3 */}
                  <div className="group flex flex-col space-y-6 w-full max-w-2xl">
                    <div className="w-full h-[50vh] sm:h-[70vh] bg-white/5 hover:bg-white/10 transition-colors border border-white/10 relative overflow-hidden flex items-center justify-center">
                      <span className="opacity-50  tracking-[-0.05em] lowercase">
                        project_03.bat
                      </span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl sm:text-4xl text-white  tracking-[-0.05em] lowercase">
                        cybernetics
                      </h3>
                      <span className="text-sm sm:text-lg text-white  tracking-[-0.05em] lowercase opacity-70">
                        2024
                      </span>
                    </div>
                    <p className="text-lg  tracking-[-0.05em] lowercase opacity-80 max-w-md">
                      AI-driven interactive command line experience mapping
                      digital artifacts.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* FOREGROUND 2: CONTACT SLIDING IN */}
          <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden flex justify-end">
            {/* Phase 3: Horizontal Translation of the contact panel */}
            <div
              className="w-full sm:w-[70vw] h-full bg-[#0000FF] pointer-events-auto border-l border-white/20 shadow-2xl flex"
              style={{
                transform: `translateX(${(1 - contactHorizontalProgress) * 100}vw)`,
              }}
            >
              {/* Left Half of Panel: Sticky Heading */}
              <div className="hidden sm:flex w-[40%] bg-[#0D0DFF] h-screen items-center justify-center relative border-r border-white/20">
                <h2 className="text-6xl sm:text-8xl italic text-white lg:text-[8rem]  tracking-[-0.05em] lowercase absolute z-10">
                  contact
                </h2>
              </div>

              {/* Right Half of Panel: Content */}
              <div className="w-full sm:w-[60%] h-screen relative overflow-hidden flex flex-col justify-center ">
                <h2 className="sm:hidden text-6xl italic text-white  tracking-[-0.05em] lowercase mb-16 text-center">
                  contact
                </h2>

                <a
                  href="mailto:karel@example.com"
                  className="text-3xl sm:text-5xl bg-[#0D0DFF] lg:text-6xl pl-12 border-t pt-12 border-white/20 text-white tracking-[-0.05em] lowercase hover:underline underline-offset-8 mb-16"
                >
                  karelbr7@gmail.com
                </a>

                <div className="flex flex-col bg-[#0D0DFF] space-y-8 px-12 border-t border-b py-8 border-white/20 text-2xl sm:text-4xl text-white tracking-[-0.05em] lowercase">
                  <a
                    href="#"
                    className="hover:text-white transition-colors w-fit"
                  >
                    twitter
                  </a>
                  <a
                    href="#"
                    className="hover:text-white transition-colors w-fit"
                  >
                    github
                  </a>
                  <a
                    href="#"
                    className="hover:text-white transition-colors w-fit"
                  >
                    linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
