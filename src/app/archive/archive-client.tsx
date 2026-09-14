"use client";

import Link from "next/link";

const PROJECTS_DATA = [
  {
    id: "proj-1",
    name: "dj tobinn web",
    description: "Marketing web for local Zlín DJ",
    html_url: "#",
    status: "done",
    live_url: "https://tobinn.cz",
    updated_at: new Date().toISOString(),
  },
  {
    id: "proj-2",
    name: "dj ian kita web",
    description: "Marketing web for local Zlín DJ",
    html_url: "#",
    status: "working",
    live_url: null,
    updated_at: new Date().toISOString(),
  },
];

export default function ArchiveClient() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-[#0000FF] overflow-hidden">
      <div className="w-full p-6 sm:p-10 lg:p-16 flex flex-col h-full overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center z-20 pb-8 sm:pb-12 shrink-0 mb-4 sm:mb-8 border-b border-[#0000FF]/20">
          <h1 className="text-4xl sm:text-8xl italic tracking-tighter lowercase">
            smaller projects
          </h1>
          <Link
            href="/"
            className="text-xl sm:text-3xl hover:opacity-70 transition-opacity tracking-tighter lowercase italic"
          >
            ← back to main
          </Link>
        </div>

        {/* List */}
        <div className="flex-1 flex flex-col max-w-screen-2xl mx-auto w-full">
          <div className="flex flex-col">
            {PROJECTS_DATA.map((repo, idx) => (
              <div
                key={repo.id}
                className="group relative flex flex-col xl:flex-row xl:items-start justify-between border-b border-[#0000FF]/20 py-10 sm:py-14 xl:py-16"
              >
                {/* 1. Name */}
                <div className="flex items-start gap-4 sm:gap-6 z-10 w-full xl:w-[40%]">
                  <span className="text-lg sm:text-xl tracking-tighter opacity-50 font-mono w-6 sm:w-8 pointer-events-none mt-1 sm:mt-2">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity w-fit"
                    >
                      <h2 className="text-3xl sm:text-5xl leading-none tracking-tighter lowercase italic">
                        {repo.name.replace(/-/g, " ")}
                      </h2>
                    </a>
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg tracking-tighter opacity-50 lowercase max-w-sm pointer-events-none">
                      {repo.description}
                    </p>
                  </div>
                </div>

                {/* Wrapper for Status, Live URL, and Year to sit in a row on mobile */}
                <div className="flex flex-row items-start justify-between xl:justify-start w-full xl:w-[60%] mt-10 xl:mt-0 gap-2 xl:gap-0">
                  {/* 2. Status */}
                  <div className="w-1/3 xl:w-[33.3%] flex flex-col xl:pt-2">
                    <div className="text-base sm:text-2xl tracking-tighter lowercase italic opacity-80">
                      {repo.status}
                    </div>
                  </div>

                  {/* 3. Live URL */}
                  <div className="w-1/3 xl:w-[41.6%] flex flex-col xl:pt-2 items-center xl:items-start text-center xl:text-left">
                    {repo.live_url ? (
                      <a
                        href={repo.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-2xl tracking-tighter lowercase italic hover:opacity-70 transition-opacity flex items-center justify-center xl:justify-start gap-1 w-full xl:w-fit"
                      >
                        {repo.live_url.replace(/^https?:\/\//, "")}
                        <span className="text-xs sm:text-sm opacity-50">↗</span>
                      </a>
                    ) : (
                      <div className="text-base sm:text-2xl tracking-tighter opacity-30 lowercase italic">
                        —
                      </div>
                    )}
                  </div>

                  {/* 4. Year */}
                  <div className="w-1/3 xl:w-[25%] flex flex-col xl:pt-2 items-end xl:pr-0">
                    <div className="text-base sm:text-2xl tracking-tighter opacity-50 lowercase z-10 pointer-events-none font-mono">
                      {new Date(repo.updated_at).getFullYear()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
