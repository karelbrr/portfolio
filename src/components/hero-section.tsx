export default function Hero() {
  return (
    <div className="relative sm:absolute sm:inset-0 p-6 sm:p-12 grid grid-cols-1 sm:grid-cols-12 gap-8 z-0 min-h-screen sm:min-h-0">
      {/* Top / Mobile Header: Logo & Title */}
      <div className="sm:col-span-3 sm:col-start-1 flex flex-row sm:flex-col justify-between items-start sm:h-[calc(100vh-6rem)] w-full">
        <h2 className="text-2xl italic tracking-tighter sm:text-3xl leading-[0.85] whitespace-nowrap z-10">
          <span className="mr-1">Karel </span>Braborec
        </h2>
        <div className="text-lg sm:text-xl italic tracking-tighter sm:text-lg sm:mt-0 z-10 text-right sm:text-left leading-tight">
          <span className="sm:mr-1">software</span> developer
        </div>
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
          <p>* scroll down to view recent projects.</p>
          <p className="hidden sm:block">
            * press CTRL+ALT+DEL to contact directly.
          </p>
        </div>
      </div>

      {/* Floating Navigation */}
      <div className="hidden sm:block absolute top-6 sm:top-12 right-6 sm:right-12 italic text-right space-y-4 tracking-tighter lowercase text-lg sm:text-2xl font-medium z-20">
        <a href="#" className="block hover: transition-all">
          archive
        </a>
      </div>

      <div className="absolute bottom-6 hidden lg:block sm:bottom-12 italic right-6 sm:right-12 tracking-tighter lowercase text-lg sm:text-2xl font-medium">
        <a
          href="mailto:karel@example.com"
          className="hover:underline underline-offset-8 decoration-1"
        >
          contact
        </a>
      </div>
    </div>
  );
}
