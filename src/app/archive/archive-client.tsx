"use client";

import { useGithubProjects } from "@/hooks/use-github-projects";
import Link from "next/link";

export default function ArchiveClient() {
  const { projects, isLoading, error } = useGithubProjects("karelbrr");

  return (
    <div className="flex flex-col xl:flex-row w-full h-screen">
      {/* 3/4 Archive Content */}
      <div className="w-full xl:w-[60%] p-6 sm:p-5 sm:px-10 flex flex-col h-full overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-[#0000FF]/20 pb-8 mb-8 space-y-4 sm:space-y-0 shrink-0">
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

        {/* Content List */}
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

          <div className="flex flex-col space-y-2 ">
            {projects?.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 border-b border-[#0000FF]/10 py-6 hover:bg-[#0000FF]/5 transition-colors group cursor-pointer"
              >
                <div className="md:col-span-2 text-xl sm:text-2xl tracking-tighter opacity-80">
                  {new Date(repo.updated_at).getFullYear()}
                </div>
                <div className="md:col-span-4 text-3xl sm:text-4xl tracking-tighter lowercase group-hover:underline underline-offset-4">
                  {repo.name.replace(/-/g, " ")}
                </div>
                <div className="md:col-span-6 text-lg sm:text-2xl tracking-tighter opacity-70 lowercase leading-tight">
                  {repo.description || "no description provided."}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 1/4 Image Section */}
      <div className="w-full xl:w-[40%] h-[50vh] xl:h-screen border-t xl:border-t-0 xl:border-l border-[#0000FF]/20 relative bg-white shrink-0">
        <img
          src="https://www.nookandfind.co.uk/wp-content/uploads/2020/01/this-is-a-mid-century-modern-home-using-dark-grey.jpg"
          alt="Archive Cover"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
  );
}
