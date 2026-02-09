import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Proposal() {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [isEscaping, setIsEscaping] = useState(false);

  // Moves the "No" button within a contained radius (Magnetic Repulsion)
  const moveButton = () => {
    setIsEscaping(true);

    // Contrain the escape radius for mobile/desktop
    const radius = window.innerWidth < 768 ? 80 : 150;
    const randomX = (Math.random() - 0.5) * radius * 2;
    const randomY = (Math.random() - 0.5) * radius * 2;

    // Ensure it jumps far enough to be elusive
    const minJump = 50;
    const finalX =
      Math.abs(randomX) < minJump
        ? randomX < 0
          ? -minJump
          : minJump
        : randomX;
    const finalY =
      Math.abs(randomY) < minJump
        ? randomY < 0
          ? -minJump
          : minJump
        : randomY;

    setNoButtonPos({ x: finalX, y: finalY });
  };

  const handleFinalYes = () => {
    // Massive continuous celebration
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      confetti({
        particleCount: 40,
        startVelocity: 30,
        spread: 360,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ["#d41142", "#ffffff", "#eec1cc"],
      });
    }, 250);
  };

  return (
    <div className="h-screen w-full flex flex-col cinematic-bg items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{ opacity: [0, 0.8, 0], scale: [0, 1.2, 0] }}
            transition={{ duration: Math.random() * 2 + 2, repeat: Infinity }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl space-y-10 md:space-y-12 z-10"
        >
          <div className="space-y-4">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
              The Big Question
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight">
              Will you be my <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-rose-400">
                Valentine?
              </span>
            </h1>
            <p className="text-blush/80 text-sm md:text-lg max-w-xl mx-auto font-light italic">
              Today, and all the small moments after.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 relative min-h-[160px]">
            <Link to="/acceptance" onClick={handleFinalYes} className="z-20">
              <button className="glow-button flex min-w-48 md:min-w-64 items-center justify-center gap-3 rounded-full h-16 md:h-20 px-10 md:px-12 bg-primary text-white text-xl md:text-2xl font-black tracking-tighter transition-all hover:scale-110 cursor-pointer">
                YES! ❤️
              </button>
            </Link>

            <motion.button
              animate={
                isEscaping
                  ? { x: noButtonPos.x, y: noButtonPos.y }
                  : { x: 0, y: 0 }
              }
              onMouseEnter={moveButton}
              onClick={moveButton}
              className="text-white bg-white/10 border border-white/20 px-10 py-4 rounded-full font-bold text-lg cursor-pointer shadow-lg z-10 whitespace-nowrap"
            >
              No 🫣
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Atmospheric Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
    </div>
  );
}
