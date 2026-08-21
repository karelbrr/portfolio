"use client";

import { useGithubProjects } from "@/hooks/use-github-projects";
import Link from "next/link";

const DEFAULT_IMAGE =
  "https://www.nookandfind.co.uk/wp-content/uploads/2020/01/this-is-a-mid-century-modern-home-using-dark-grey.jpg";

export default function ArchiveClient() {
  const { projects, isLoading, error } = useGithubProjects("karelbrr");

  return (
    <div className="flex flex-col xl:flex-row w-full h-screen bg-white text-[#0000FF] overflow-hidden">
      {/* 2/3 Content Side */}
      <div className="w-full p-6 sm:p-10 flex flex-col h-full overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start z-20 pb-8 sm:pb-12 shrink-0 mb-8">
          <h1 className="text-6xl sm:text-8xl italic tracking-tighter lowercase">
            archive
          </h1>
          <Link
            href="/"
            className="text-2xl sm:text-3xl hover:opacity-70 transition-opacity tracking-tighter lowercase italic"
          >
            ← back to main
          </Link>
        </div>

        {/* List */}
        <div className="flex-1 flex flex-col">
          {isLoading && (
            <p className="italic tracking-tighter text-2xl">
              loading repositories...
            </p>
          )}
          {error && (
            <p className="italic tracking-tighter text-2xl text-red-500">
              failed to load repositories.
            </p>
          )}

          <div className="flex flex-col border-t border-[#0000FF]">
            {projects?.map((repo, idx) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col xl:flex-row xl:items-end justify-between border-b border-[#0000FF] py-8 sm:py-12 hover:bg-[#0000FF]/5 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-4 sm:gap-6 z-10 pointer-events-none">
                  <span className="text-xl sm:text-2xl tracking-tighter opacity-80 mt-2 sm:mt-4">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col">
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl leading-none tracking-tighter lowercase italic">
                      {repo.name.replace(/-/g, " ")}
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl tracking-tighter opacity-70 lowercase max-w-md">
                      {repo.description || "no description provided."}
                    </p>
                  </div>
                </div>
                <div className="mt-6 xl:mt-0 text-lg sm:text-3xl tracking-tighter opacity-70 lowercase z-10 pointer-events-none xl:text-right">
                  {new Date(repo.updated_at).getFullYear()}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
