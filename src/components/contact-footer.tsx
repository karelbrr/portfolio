"use client";

export default function ContactFooter() {
  return (
    <footer className="w-full min-h-screen bg-[#ffb300] text-[#0000FF] flex flex-col justify-between p-6 sm:p-12 z-50 relative">
      <div className="flex flex-col space-y-12 sm:space-y-24 mt-12 sm:mt-24">
        <h2 className="text-6xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] italic tracking-tighter lowercase leading-none border-b-2 border-[#0000FF] pb-4 sm:pb-8">
          contact
        </h2>

        <div className="flex flex-col space-y-16">
          <a
            href="mailto:karelbr7@gmail.com"
            className="italic text-4xl lg:text-6xl xl:text-8xl tracking-tighter lowercase hover:underline underline-offset-8 w-fit"
          >
            karelbr7@gmail.com
          </a>

          <div className="flex flex-col space-y-12 lg:space-y-10 text-2xl lg:text-4xl xl:text-5xl tracking-tighter lowercase border-t-2 border-[#0000FF] py-8 lg:py-12">
            <a
              target="_blank"
              href="https://www.instagram.com/karelbraborec/"
              className="hover:underline underline-offset-8 w-fit"
            >
              instagram
            </a>
            <a
              target="_blank"
              href="https://github.com/karelbrr"
              className="hover:underline underline-offset-8 w-fit"
            >
              github
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/karel-braborec-1943083a4/"
              className="hover:underline underline-offset-8 w-fit"
            >
              linkedin
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-end mt-24 text-lg sm:text-2xl font-mono tracking-tighter lowercase border-t-2 border-[#0000FF] pt-4 sm:pt-6">
        <span>© {new Date().getFullYear()} Karel Braborec</span>
        <span className="lg:flex hidden">Maybeeee I don't really wanna know...</span>
      </div>
    </footer>
  );
}
