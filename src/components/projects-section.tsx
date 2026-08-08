import { useGithubProjects } from "@/hooks/use-github-projects";

interface ProjectsProps {
  horizontalProgress: number;
  verticalProgress: number;
}

export default function Projects({
  horizontalProgress,
  verticalProgress,
}: ProjectsProps) {
  const { projects, isLoading, error } = useGithubProjects("karelbrr");

  const targetProjects = ["react-twuzzy", "umbrella-records"];
  const displayProjects = projects?.filter(p => targetProjects.includes(p.name)) || [];

  return (
    <div className="relative lg:absolute lg:inset-0 z-20 pointer-events-none lg:pointer-events-none overflow-hidden flex lg:justify-end">
      {/* Phase 1: Horizontal Translation of the split-screen panel */}
      <div
        className="w-full lg:w-[75vw] h-auto lg:h-full bg-[#0000FF] pointer-events-auto lg:border-l lg:border-white/20 shadow-none lg:shadow-2xl flex flex-col lg:flex-row disable-transform-on-mobile"
        style={{
          transform: `translateX(${(1 - horizontalProgress) * 100}vw)`,
        }}
      >
        {/* Mobile Heading */}
        <div className="lg:hidden w-full bg-[#0D0DFF] py-12 flex items-center justify-center border-t border-b border-white/20 mt-12">
          <h2 className="text-6xl italic text-white tracking-tighter lowercase">
            projects
          </h2>
        </div>

        {/* Left Half of Panel: Sticky Heading */}
        <div className="hidden lg:flex w-[40%] bg-[#0D0DFF] h-screen items-center justify-center relative border-r border-white/20">
          <h2 className="text-6xl italic sm:text-8xl text-white lg:text-[8rem] tracking-tighter lowercase absolute z-10">
            projects
          </h2>
        </div>

        {/* Right Half of Panel: Phase 2 Vertical Translation */}
        <div className="w-full lg:w-[60%] h-auto lg:h-screen relative lg:overflow-hidden">
          <div
            className="flex flex-col items-center lg:items-start w-full h-auto lg:h-max lg:min-h-screen p-6 lg:p-12 py-12 lg:pt-[10vh] lg:pb-[3vh] space-y-16 lg:space-y-32 disable-transform-on-mobile"
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

            {!isLoading && !error && displayProjects.map((project) => {
              const year = new Date(project.updated_at).getFullYear();
              const pseudoName = `${project.name.replace(/-/g, '_')}.exe`;
              const displayName = project.name.replace(/-/g, ' ');

              return (
                <div key={project.id} className="group flex flex-col space-y-6 w-full max-w-2xl">
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="w-full h-[50vh] sm:h-[70vh] bg-white/5 hover:bg-white/10 transition-colors border border-white/10 relative overflow-hidden flex items-center justify-center cursor-pointer">
                    <span className="opacity-50 tracking-tighter lowercase group-hover:opacity-100 transition-opacity">
                      {pseudoName}
                    </span>
                  </a>
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl sm:text-4xl text-white tracking-tighter lowercase">
                      {displayName}
                    </h3>
                    <span className="text-sm sm:text-lg text-white tracking-tighter lowercase opacity-70 mt-1 sm:mt-0">
                      {year}
                    </span>
                  </div>
                  <p className="text-lg tracking-tighter lowercase opacity-80 max-w-md">
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
