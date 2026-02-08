import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Acceptance() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-[#221015] relative overflow-hidden">
      <div className="space-y-6 md:space-y-8 z-10">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight">
          You just made my day{" "}
          <span className="text-primary block md:inline">❤️</span>
        </h1>
        <p className="text-white/70 text-base md:text-xl font-light italic max-w-2xl mx-auto leading-relaxed">
          "Every moment with you feels like a dream. I am so lucky to have you
          in my life."
        </p>

        <Link to="/invite" className="inline-block pt-6 md:pt-10">
          <button className="glow-button flex items-center gap-3 rounded-full h-14 md:h-16 px-8 md:px-10 bg-primary text-white font-bold text-base md:text-lg cursor-pointer">
            See what’s next{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </Link>
      </div>

      {/* Floating Petals Decor - Reduced count for mobile performance */}
      {[...Array(window.innerWidth < 768 ? 8 : 15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 md:w-4 md:h-4 bg-primary/30 rounded-full"
          animate={{
            y: ["-10vh", "110vh"],
            x: [0, (Math.random() - 0.5) * 100],
            rotate: 360,
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            borderRadius: "50% 0 50% 50%",
          }}
        />
      ))}
    </div>
  );
}
