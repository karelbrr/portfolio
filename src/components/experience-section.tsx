import { EXPERIENCE_DATA } from "@/components/projects-section";

interface ExperienceProps {
  experienceHorizontalProgress: number;
}

export default function ExperienceSection({
  experienceHorizontalProgress,
}: ExperienceProps) {
  return (
    <div className="relative xl:absolute xl:inset-0 z-30 pointer-events-none overflow-hidden flex xl:justify-end">
      {/* Phase 1: Horizontal Translation of the experience panel */}
      <div
        className="w-full xl:w-[70vw] h-auto xl:h-full bg-[#0D0DFF] pointer-events-auto xl:border-l xl:border-white/20 shadow-none xl:shadow-2xl flex flex-col xl:flex-row disable-transform-on-mobile xl:mt-0"
        style={{
          transform: `translateX(${(1 - experienceHorizontalProgress) * 100}vw)`,
        }}
      >
        {/* --- MOBILE VIEW --- */}
        <div className="flex xl:hidden flex-col w-full sm:py-16 md:pt-0 bg-[#0D0DFF] border-t border-b border-white/20">
          <div className="xl:hidden w-full bg-[#0D0DFF] py-12 flex items-center justify-center border-b border-white/20 ">
            <h2 className="text-6xl italic text-white tracking-tighter lowercase">
              experience
            </h2>
          </div>

          <div className="flex flex-col space-y-12 p-6 sm:p-12 text-white">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div
                key={idx}
                className="flex flex-col space-y-4 border-b-2 border-white/30 pb-8"
              >
                <span className="text-xl sm:text-3xl font-mono">
                  {exp.duration}
                </span>
                <h3 className="text-3xl sm:text-5xl italic tracking-tighter lowercase">
                  {exp.role} <br />
                  <span className="opacity-70">@ {exp.company}</span>
                </h3>
                <p className="text-lg sm:text-2xl opacity-80">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- DESKTOP VIEW --- */}
        {/* Left Half of Panel: Sticky Heading */}
        <div className="hidden xl:flex w-[40%] bg-[#0D0DFF] h-screen items-center justify-center relative border-r border-white/20">
          <h2 className="text-7xl lg:text-7xl xl:text-[8rem] 2xl:text-[10rem] italic text-white tracking-tighter lowercase absolute z-10 -rotate-90 origin-center xl:rotate-0">
            experience
          </h2>
        </div>

        {/* Right Half of Panel: Content */}
        <div className="hidden xl:flex w-[60%] h-screen relative overflow-y-auto flex-col p-12 lg:p-16 text-white">
          <div className="flex flex-col space-y-16 xl:mt-32">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div
                key={idx}
                className="flex flex-col space-y-6 border-b-2 border-white/30 pb-12"
              >
                <span className="text-3xl font-mono">{exp.duration}</span>
                <h3 className="text-5xl lg:text-6xl 2xl:text-7xl italic tracking-tighter lowercase leading-none">
                  {exp.role} <br />
                  <span className="opacity-70">@ {exp.company}</span>
                </h3>
                <p className="text-xl lg:text-2xl opacity-80 max-w-2xl">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
