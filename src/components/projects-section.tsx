import { useEffect, useState } from "react";

// We removed the github fetch hook to use a local static list instead.
// import { useGithubProjects } from "@/hooks/use-github-projects";

const PROJECTS_DATA = [
  {
    id: "umbrella-records",
    name: "umbrella-records",
    html_url: "https://github.com/karelbrr/umbrella-records",
    description: "A modern recording studio and online beat store platform.",
    updated_at: "2023-08-01T00:00:00Z",
    readme: "",
  },
  {
    id: "react-twuzzy",
    name: "react-twuzzy",
    html_url: "https://github.com/karelbrr/react-twuzzy",
    description:
      "A real-time chat application built with React and Supabase. It includes 1-on-1 messaging, group chats, media sharing, and customizable profiles.",
    updated_at: "2024-01-01T00:00:00Z",
    readme: "",
  },
  {
    id: "diagram-app",
    name: "diagram-app",
    html_url: "https://github.com/karelbrr/diagram-app",
    description:
      "A modern web application for creating, editing, and managing diagrams.",
    updated_at: "2024-05-01T00:00:00Z",
    readme: "",
  },
];

function GithubReadme({
  repo,
  fallbackReadme,
}: {
  repo: string;
  fallbackReadme: string;
}) {
  const [readme, setReadme] = useState<string>(fallbackReadme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from GitHub
    fetch(`https://raw.githubusercontent.com/karelbrr/${repo}/main/README.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found on main");
        return res.text();
      })
      .catch(() => {
        return fetch(
          `https://raw.githubusercontent.com/karelbrr/${repo}/master/README.md`,
        ).then((res) => {
          if (!res.ok) throw new Error("Not found on master");
          return res.text();
        });
      })
      .then((text) => setReadme(text))
      .catch((err) => console.warn(`Failed to fetch README for ${repo}:`, err))
      .finally(() => setLoading(false));
  }, [repo]);

  if (loading) {
    return (
      <span className="opacity-50 animate-pulse">
        Fetching README from GitHub...
      </span>
    );
  }

  return <>{readme}</>;
}

interface ProjectsProps {
  horizontalProgress: number;
  verticalProgress: number;
}

export default function Projects({
  horizontalProgress,
  verticalProgress,
}: ProjectsProps) {
  // Use local static data instead of fetching from GitHub
  const displayProjects = PROJECTS_DATA;
  const isLoading = false;
  const error = null;

  return (
    <div className="relative xl:absolute xl:inset-0 z-20 pointer-events-none xl:pointer-events-none overflow-hidden flex xl:justify-end">
      {/* Phase 1: Horizontal Translation of the split-screen panel */}
      <div
        className="w-full xl:w-[75vw] 2xl:w-full h-auto xl:h-full bg-[#0000FF] pointer-events-auto xl:border-l xl:border-white/20 shadow-none xl:shadow-2xl flex flex-col xl:flex-row disable-transform-on-mobile"
        style={{
          transform: `translateX(${(1 - horizontalProgress) * 100}vw)`,
        }}
      >
        {/* Mobile Heading */}
        <div className="xl:hidden w-full bg-[#0D0DFF] py-12 flex items-center justify-center border-t border-b border-white/20 mt-12">
          <h2 className="text-6xl italic text-white tracking-tighter lowercase">
            projects
           </h2>
        </div>

        {/* Left Half of Panel: Sticky Heading */}
        <div className="hidden xl:flex xl:w-[40%] bg-[#0D0DFF] h-screen items-center justify-center relative border-r border-white/20">
          <h2 className="text-6xl italic sm:text-8xl text-white lg:text-7xl xl:text-[8rem] 2xl:text-[12rem] tracking-tighter lowercase absolute z-10">
            projects
          </h2>
        </div>

        {/* Right Half of Panel: Phase 2 Vertical Translation */}
        <div className="w-full xl:w-[60%] h-auto xl:h-screen relative xl:overflow-hidden">
          <div
            className="flex flex-col items-start w-full h-auto xl:h-max xl:min-h-screen p-6 sm:p-12 py-12 xl:pt-[10vh] xl:pb-[3vh] space-y-16 xl:space-y-32 disable-transform-on-mobile"
            style={{
              transform: `translateY(calc(-${verticalProgress} * (100% - 100vh)))`,
            }}
          >
            {isLoading && (
              <div className="w-full text-center text-white/50 italic tracking-tighter lowercase pt-20">
                loading projects...
              </div>
            )}

            {error && (
              <div className="w-full text-center text-red-400 italic tracking-tighter lowercase pt-20">
                failed to load projects.
              </div>
            )}

            {!isLoading &&
              !error &&
              displayProjects.map((project) => {
                const year = new Date(project.updated_at).getFullYear();
                const pseudoName = `${project.name.replace(/-/g, "_")}_read_me.md`;
                const displayName = project.name.replace(/-/g, " ");

                return (
                  <div
                    key={project.id}
                    className="group flex flex-col space-y-6 w-full"
                  >
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-[50vh] sm:h-[70vh] lg:h-[50vh] xl:h-[70vh] 2xl:h-[60vh] bg-white/5 hover:bg-white/10 transition-colors border border-white/10 relative overflow-hidden flex flex-col p-6 sm:p-8 cursor-pointer group"
                    >
                      {/* Raw README Text */}
                      <pre className="font-mono text-sm sm:text-base 2xl:text-lg text-white/50 group-hover:text-white/80 transition-colors whitespace-pre-wrap text-left w-full h-full mask-[linear-gradient(to_bottom,black_calc(100%-4rem),transparent_100%)]">
                        <code>
                          <GithubReadme
                            repo={project.name}
                            fallbackReadme={project.readme}
                          />
                        </code>
                      </pre>

                      {/* Label indicating it continues on github */}
                      <span className="absolute bottom-4 left-6 sm:left-8 opacity-50 tracking-tighter lowercase group-hover:opacity-100 transition-opacity italic">
                        ...continue reading on github
                      </span>

                      {/* Watermark of the file name in the bottom right corner */}
                      <span className="absolute bottom-4 right-6 sm:right-8 opacity-50 tracking-tighter lowercase group-hover:opacity-100 transition-opacity">
                        {pseudoName}
                      </span>
                    </a>
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl sm:text-4xl 2xl:text-6xl text-white tracking-tighter lowercase">
                        {displayName}
                      </h3>
                      <span className="text-sm sm:text-lg 2xl:text-2xl bg-[#ffb300] text-[#0000FF] px-2 tracking-tighter lowercase mt-1 sm:mt-0">
                        {year}
                      </span>
                    </div>
                    <p className="text-lg 2xl:text-3xl tracking-tighter lowercase opacity-80 max-w-md 2xl:max-w-2xl">
                      {project.description || "No description provided."}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
