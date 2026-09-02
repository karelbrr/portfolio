"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [altKeyName, setAltKeyName] = useState("ALT");

  useEffect(() => {
    // Detect OS for display text
    const isMac =
      typeof window !== "undefined" &&
      navigator.userAgent.toUpperCase().includes("MAC");
    if (isMac) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAltKeyName("OPTION");
    }

    // Keyboard listener for the shortcut
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for CTRL + ALT (or Option) + DEL (or Backspace)
      if (
        e.ctrlKey &&
        e.altKey &&
        (e.key === "Delete" ||
          e.code === "Delete" ||
          e.key === "Backspace" ||
          e.code === "Backspace")
      ) {
        e.preventDefault();
        // On desktop (lg breakpoint), we need to scroll the window to 85% of the sticky container
        if (window.innerWidth >= 1024) {
          const container = document.getElementById("scroll-container");
          if (container) {
            const rect = container.getBoundingClientRect();
            const maxScroll = rect.height - window.innerHeight;
            window.scrollTo({
              top: window.scrollY + rect.top + maxScroll * 1.3,
              behavior: "smooth",
            });
          }
        } else {
          // On mobile, the layout is normal, so we can just scroll to the ID
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative xl:absolute xl:inset-0 p-6 sm:p-12 grid grid-cols-1 xl:grid-cols-12 gap-8 z-0 min-h-screen xl:min-h-0">
      {/* Top / Mobile Header: Logo & Title */}
      <div className="xl:col-span-3 xl:col-start-1 flex flex-col items-start xl:h-[calc(100vh-6rem)] w-full">
        <h2 className="text-2xl tracking-tighter sm:text-4xl 2xl:text-6xl leading-[0.85] whitespace-nowrap z-10">
          <span className="mr-1">Karel </span>Braborec
        </h2>
      </div>

      {/* Center/Right Content */}
      <div className="xl:col-span-7 xl:col-start-6 flex flex-col h-[70%] justify-center space-y-8 sm:space-y-16 sm:mt-16 xl:mt-32 2xl:mt-48 z-10">
        <div className="text-4xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white leading-[1.1] sm:leading-snug tracking-tighter lowercase max-w-xl 2xl:max-w-3xl">
          19-year-old frontend developer crafting intelligent, high-performance web
up <br />
          <br />
          <span className="font-medium">
            react.js & next.js, typescript, and python & AI integrations.
          </span>
        </div>

        <div className="flex flex-col space-y-2 sm:space-y-4 2xl:space-y-6 text-lg sm:text-2xl 2xl:text-3xl italic tracking-tighter lowercase w-fit">
          <div className="flex items-center space-x-3 mb-2 sm:mb-4 2xl:mb-6">
            <span className="px-1 bg-[#ffb300] text-[#0000FF] selection:bg-[#0000FF] selection:text-white">
              * currently open to new work position.
            </span>
          </div>
          <p>* scroll down to view recent projects.</p>
          <p className="hidden sm:block">
            * press CTRL+{altKeyName}+DEL to contact directly.
          </p>
        </div>
      </div>

      {/* Floating Navigation */}
      <div className="hidden xl:block absolute top-6 sm:top-12 2xl:top-16 italic right-6 sm:right-12 2xl:right-16 tracking-tighter lowercase text-lg sm:text-2xl 2xl:text-3xl font-medium z-20">
        <a className="block transition-opacity hover:underline underline-offset-8 cursor-pointer">
          archive
        </a>
      </div>
    </div>
  );
}
