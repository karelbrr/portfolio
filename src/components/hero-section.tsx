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
    <div className="relative sm:absolute sm:inset-0 p-6 sm:p-12 grid grid-cols-1 sm:grid-cols-12 gap-8 z-0 min-h-screen sm:min-h-0">
      {/* Top / Mobile Header: Logo & Title */}
      <div className="sm:col-span-3 sm:col-start-1 flex flex-row sm:flex-col  items-start sm:h-[calc(100vh-6rem)] w-full">
        <h2 className="text-2xl tracking-tighter sm:text-4xl leading-[0.85] whitespace-nowrap z-10">
          <span className="mr-1">Karel </span>Braborec
        </h2>
      </div>

      {/* Center/Right Content */}
      <div className="sm:col-span-7 sm:col-start-6 flex flex-col h-[70%] justify-center space-y-8 sm:space-y-16 sm:mt-32 z-10">
        <div className="text-4xl sm:text-5xl lg:text-4xl text-white leading-[1.1] sm:leading-snug tracking-tighter lowercase max-w-xl">
          frontend developer crafting intelligent, high-performance web
          experiences. <br />
          <br />
          <span className="font-medium">
            react.js & next.js, typescript, and python & AI integrations.
          </span>
        </div>

        <div className="flex flex-col space-y-2 sm:space-y-4 text-lg sm:text-2xl italic tracking-tighter lowercase w-fit opacity-80 sm:opacity-100">
          <div className="flex items-center space-x-3 mb-2 sm:mb-4">
            <span>* currently open to new work position.</span>
          </div>
          <p>* scroll down to view recent projects.</p>
          <p className="hidden sm:block">
            * press CTRL+{altKeyName}+DEL to contact directly.
          </p>
        </div>
      </div>

      {/* Floating Navigation */}
      <div className="hidden sm:block absolute top-6 sm:top-12 right-6 sm:right-12 italic text-right space-y-4 tracking-tighter lowercase text-lg sm:text-2xl font-medium z-20">
        <a href="#" className="block hover: transition-all">
          archive
        </a>
      </div>
    </div>
  );
}
