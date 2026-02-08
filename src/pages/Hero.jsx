import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative flex min-h-svh w-full flex-col cinematic-bg items-center justify-center text-center px-6 py-20">
      <header className="absolute top-0 w-full flex items-center justify-between px-6 md:px-10 py-8 opacity-60">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">
            favorite
          </span>
          <h2 className="text-cream text-xs md:text-sm font-medium tracking-[0.2em] uppercase whitespace-nowrap">
            For you 
          </h2>
        </div>
        <span className="text-cream/40 text-[10px] md:text-xs tracking-widest uppercase">
          Today
        </span>
      </header>

      <div className="max-w-4xl space-y-8 md:space-y-10 z-10">
        <div className="space-y-4 md:space-y-6">
          <h1 className="font-serif italic text-4xl sm:text-6xl md:text-8xl text-cream leading-[1.1]">
            Hey… I made something <br />
            <span className="text-primary">just for you.</span>
          </h1>
          <p className="text-blush/80 text-base md:text-xl font-light italic tracking-wide">
            Take a moment. No rush.
          </p>
        </div>

        <Link to="/memories" className="inline-block">
          <button className="glow-button group relative flex min-w-40 md:min-w-45 items-center justify-center rounded-full h-14 md:h-16 px-8 bg-primary text-cream cursor-pointer">
            <span className="text-base md:text-lg font-bold tracking-wider mr-2">
              Start
            </span>
            <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </Link>
      </div>

      <footer className="absolute bottom-0 w-full py-8 md:py-12 text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-cream/20">
        Made with love for you
      </footer>
    </div>
  );
}
