import { Link } from "react-router-dom";

export default function Proposal() {
  return (
    <div className="h-screen w-full flex flex-col cinematic-bg items-center justify-center text-center px-6">
      <div className="max-w-4xl space-y-12">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
          <h1 className="text-5xl md:text-8xl font-black text-white relative">
            Will you be my <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-rose-400">
              Valentine?
            </span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link to="/acceptance">
            <button className="glow-button flex min-w-50 items-center justify-center gap-2 rounded-full h-16 px-10 bg-primary text-white text-xl font-bold">
              Yes <span className="material-symbols-outlined">favorite</span>
            </button>
          </Link>
          <button className="text-white/40 hover:text-white transition-colors text-sm italic">
            Let me think... (you can't click this 😉)
          </button>
        </div>
      </div>
    </div>
  );
}
