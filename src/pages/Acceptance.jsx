import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Acceptance() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-[#221015] relative">
      <div className="space-y-8 z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold">
          You just made my day <span className="text-primary">❤️</span>
        </h1>
        <p className="text-white/70 text-xl font-light italic max-w-2xl mx-auto">
          "Every moment with you feels like a dream. I am so lucky to have you
          in my life."
        </p>

        <Link to="/invite" className="inline-block pt-10">
          <button className="glow-button flex items-center gap-3 rounded-full h-16 px-10 bg-primary text-white font-bold text-lg">
            See what’s next{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </Link>
      </div>

      {/* Floating Petals Decor */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-primary/20 rounded-full"
          animate={{ y: [0, 500], x: [0, Math.random() * 50], rotate: 360 }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: `${Math.random() * 100}%`, top: `-5%` }}
        />
      ))}
    </div>
  );
}
