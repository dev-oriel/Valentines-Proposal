import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen w-full flex flex-col cinematic-bg">
      <div className="grain-overlay" />

      {/* Global Header */}
      <header className="flex items-center justify-between px-10 py-8 z-20">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">
            favorite
          </span>
          <h2 className="text-warm-cream/80 text-sm font-medium tracking-[0.2em] uppercase">
            M & S
          </h2>
        </div>
        <span className="text-warm-cream/40 text-xs tracking-widest uppercase">
          February 14, 2026
        </span>
      </header>

      {/* Page Content with Transition */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col"
      >
        {children}
      </motion.main>

      {/* Subtle Gold Lines */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-linear-to-r from-transparent via-subtle-gold/20 to-transparent z-10" />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-linear-to-r from-transparent via-subtle-gold/20 to-transparent z-10" />
    </div>
  );
}
