interface ContactProps {
  contactHorizontalProgress: number;
}

export default function Contact({ contactHorizontalProgress }: ContactProps) {
  return (
    <div className="relative xl:absolute xl:inset-0 z-30 pointer-events-none overflow-hidden flex xl:justify-end">
      {/* Phase 3: Horizontal Translation of the contact panel */}
      <div
        className="w-full xl:w-[70vw] h-auto xl:h-full bg-[#0000FF] pointer-events-auto xl:border-l xl:border-white/20 shadow-none xl:shadow-2xl flex flex-col xl:flex-row disable-transform-on-mobile xl:mt-0 transition-transform duration-[400ms] ease-out"
        style={{
          transform: `translateX(${(1 - contactHorizontalProgress) * 100}vw)`,
        }}
      >
        {/* --- MOBILE VIEW --- */}
        <div className="flex xl:hidden flex-col w-full sm:py-16 md:pt-0 space-y-12 bg-[#0D0DFF] border-t border-b border-white/20">
          <div className="xl:hidden w-full bg-[#0D0DFF] py-12 flex items-center justify-center border-b border-white/20 ">
            <h2 className="text-6xl italic text-white tracking-tighter lowercase">
              contact
            </h2>
          </div>

          <a
            href="mailto:karelbr7@gmail.com"
            className="text-3xl sm:text-5xl px-6 text-white tracking-tighter lowercase hover:underline underline-offset-8"
          >
            karelbr7@gmail.com
          </a>

          <div className="flex flex-col space-y-6 pt-4 text-2xl sm:text-4xl px-6 text-white tracking-tighter lowercase">
            <a href="#" className="hover:opacity-70 transition-opacity w-fit">
              twitter
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity w-fit">
              github
            </a>
            <a
              href="#"
              className="hover:opacity-70 mb-10 transition-opacity w-fit"
            >
              linkedin
            </a>
          </div>
        </div>

        {/* --- DESKTOP VIEW --- */}
        {/* Left Half of Panel: Sticky Heading */}
        <div className="hidden xl:flex w-[40%] bg-[#0D0DFF] h-screen items-center justify-center relative border-r border-white/20">
          <h2 className="text-7xl lg:text-7xl xl:text-[8rem] 2xl:text-[12rem] italic text-white tracking-tighter lowercase absolute z-10">
            contact
          </h2>
        </div>

        {/* Right Half of Panel: Content */}
        <div className="hidden xl:flex w-[60%] h-screen relative overflow-hidden flex-col justify-center">
          <a
            href="mailto:karelbr7@gmail.com"
            className="text-4xl lg:text-4xl xl:text-6xl 2xl:text-8xl bg-[#0D0DFF] pl-8 lg:pl-12 border-t pt-12 border-white/20 text-white tracking-tighter lowercase hover:underline underline-offset-8 mb-16"
          >
            karelbr7@gmail.com
          </a>

          <div className="flex flex-col bg-[#0D0DFF] space-y-8 2xl:space-y-12 px-8 lg:px-12 border-t border-b py-8 2xl:py-16 border-white/20 text-2xl lg:text-2xl xl:text-4xl 2xl:text-6xl text-white tracking-tighter lowercase">
            <a href="#" className="hover:opacity-70 transition-opacity w-fit">
              twitter
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity w-fit">
              github
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity w-fit">
              linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
