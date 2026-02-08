import React from "react";
import { motion } from "framer-motion";

export default function Invite() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background-dark relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl w-full bg-burgundy-dark/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
      >
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4tKD9Pyr8UCrBXFBwvfPRPOg6E5-gZWb_Yc-kzJLUSX_Zhe_-cySdLdmWABLEjV8H3EXzpi7k7hu5ubZB_fdnho4zyPdV7IL6ypwo1YeFrLMa1Sc7xOXjzQYDM1BAIkeuOk_SIJi2UdB8fVS53OeRX8b2v59AzEZXhc7PjDNf5ZUipGRMNJwt830Q4OdETsoYWbBWpSbBccMu1yjp2YWkTbtHlEUpXUOi3tNiVK0b9mQWWOAw7bxnoG2LzPB2qLcsQm-Vl0eAmBM"
            alt="Romantic candlelit dinner table"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-burgundy-dark/90 md:to-transparent" />
        </div>

        {/* Right Text Content Section */}
        <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-subtle-gold">
              <span className="material-symbols-outlined text-sm font-bold">
                star_rate
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">
                A Final Proposal
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
              Now let me take you out properly.
            </h1>
            <p className="text-blush text-lg leading-relaxed">
              The night is ours. From the first toast to the last dance, choose
              your adventure.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button className="group relative flex items-center justify-center gap-3 h-14 px-8 bg-primary rounded-lg text-white font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20">
              <span>Dinner with me</span>
              <span className="material-symbols-outlined text-xl transition-transform group-hover:rotate-12">
                wine_bar
              </span>
            </button>
            <button className="group flex items-center justify-center gap-3 h-14 px-8 bg-white/5 border border-white/20 rounded-lg text-white font-bold text-lg transition-all hover:bg-white/10 hover:border-subtle-gold/50 active:scale-[0.98]">
              <span>Surprise me</span>
              <span className="material-symbols-outlined text-xl text-subtle-gold group-hover:animate-pulse">
                auto_awesome
              </span>
            </button>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-white/10">
            <p className="text-white/40 text-xs font-medium uppercase tracking-widest italic">
              Forever & Always
            </p>
            <span className="material-symbols-outlined text-primary/40">
              favorite
            </span>
          </div>
        </div>
      </motion.div>

      {/* Footer watermark */}
      <footer className="mt-12 opacity-20">
        <p className="text-[10px] tracking-[0.4em] uppercase">
          © 2026 Crafted for our special night
        </p>
      </footer>
    </div>
  );
}
