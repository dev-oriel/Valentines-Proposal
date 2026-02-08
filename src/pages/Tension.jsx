import { Link } from "react-router-dom";

export default function Tension() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4d0a1b_0%,#221015_70%)]" />

      <div className="relative z-10 space-y-12">
        <p className="text-white/60 text-sm md:text-base font-light tracking-[0.2em] animate-pulse">
          So there’s something I’ve been meaning to ask you…
        </p>
        <h1 className="text-white text-3xl md:text-6xl font-bold tracking-tight">
          And I wanted to do it properly.
        </h1>

        <div className="pt-20">
          <Link to="/proposal">
            <button className="h-12 px-10 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-primary hover:text-white transition-all">
              Proceed
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
