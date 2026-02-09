import React from "react";
import { motion } from "framer-motion";

export default function Invite() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6 bg-background-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-150 aspect-square bg-primary/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-4xl w-full bg-burgundy-dark/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
      >
        <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto relative">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4tKD9Pyr8UCrBXFBwvfPRPOg6E5-gZWb_Yc-kzJLUSX_Zhe_-cySdLdmWABLEjV8H3EXzpi7k7hu5ubZB_fdnho4zyPdV7IL6ypwo1YeFrLMa1Sc7xOXjzQYDM1BAIkeuOk_SIJi2UdB8fVS53OeRX8b2v59AzEZXhc7PjDNf5ZUipGRMNJwt830Q4OdETsoYWbBWpSbBccMu1yjp2YWkTbtHlEUpXUOi3tNiVK0b9mQWWOAw7bxnoG2LzPB2qLcsQm-Vl0eAmBM"
            alt="Dinner"
          />
          <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-burgundy-dark/90 md:from-transparent to-transparent md:to-burgundy-dark/90" />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center gap-6 md:gap-8 text-center md:text-left">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2 text-subtle-gold">
              <span className="material-symbols-outlined text-sm font-bold">
                star_rate
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">
                A Final Proposal
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
              Now let me take you out properly.
            </h1>
            <p className="text-blush text-sm md:text-lg leading-relaxed italic">
              The night is ours. Choose your adventure, and text me your choice.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <button className="group relative flex items-center justify-center gap-2 h-12 md:h-14 px-8 bg-primary rounded-lg text-white font-bold text-base md:text-lg transition-all hover:scale-[1.02] cursor-pointer">
              Dinner with me 🍷
            </button>
            <button className="group flex items-center justify-center gap-2 h-12 md:h-14 px-8 bg-white/5 border border-white/20 rounded-lg text-white font-bold text-base md:text-lg transition-all hover:bg-white/10 cursor-pointer">
              Surprise me ✨
            </button>
          </div>
        </div>
      </motion.div>

      <footer className="mt-8 md:mt-12 opacity-20 px-4 text-center">
        <p className="text-[8px] md:text-[10px] tracking-[0.4em] uppercase">
          © 2026 FROM ......... • FOR SOMEONE SPECIAL
        </p>
      </footer>
    </div>
  );
}
