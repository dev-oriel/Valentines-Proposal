import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Proposal() {
  const [step, setStep] = useState(1);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [isEscaping, setIsEscaping] = useState(false);
  const containerRef = useRef(null);

  // Function to move the "No" button within a limited radius
  const moveButton = () => {
    setIsEscaping(true);

    // We constrain the "escape" to a 200px radius so it stays nearby
    const radius = 150;
    const randomX = (Math.random() - 0.5) * radius * 2;
    const randomY = (Math.random() - 0.5) * radius * 2;

    // Ensure it doesn't move too little (keep the "jump" feel)
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

  const handleValentineYes = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#d41142", "#ffffff", "#eec1cc"],
    });
    setStep(2);
    setIsEscaping(false);
    setNoButtonPos({ x: 0, y: 0 });
  };

  const handleFinalYes = () => {
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
      });
    }, 250);
  };

  return (
    <div
      ref={containerRef}
      className="h-screen w-full flex flex-col cinematic-bg items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Background Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 0] }}
            transition={{ duration: Math.random() * 2 + 2, repeat: Infinity }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl space-y-12 z-10"
          >
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">
                The Big Question
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-tight">
                Will you be my <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-rose-400">
                  Valentine?
                </span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 relative">
              <button
                onClick={handleValentineYes}
                className="glow-button z-20 flex min-w-48 items-center justify-center gap-2 rounded-full h-16 px-10 bg-primary text-white text-xl font-bold transition-all"
              >
                Yes <span className="material-symbols-outlined">favorite</span>
              </button>

              <motion.button
                animate={
                  isEscaping
                    ? { x: noButtonPos.x, y: noButtonPos.y }
                    : { x: 0, y: 0 }
                }
                onMouseEnter={moveButton}
                onClick={moveButton}
                className="text-white bg-white/10 border border-white/20 px-8 py-3 rounded-full font-bold text-lg cursor-pointer whitespace-nowrap shadow-lg"
              >
                No 🫣
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-12 z-10"
          >
            <div className="space-y-6">
              <h2 className="text-cream text-2xl md:text-3xl font-light italic">
                Wait, one more thing...
              </h2>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-tight">
                Will you be my <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-rose-400">
                  Girlfriend?
                </span>
              </h1>
              <p className="text-blush/80 text-lg max-w-xl mx-auto font-light leading-relaxed">
                Officially, finally and forever. I want you by my side every
                single day.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 relative min-h-[150px]">
              <Link to="/acceptance" onClick={handleFinalYes}>
                <button className="glow-button z-20 flex min-w-64 items-center justify-center gap-3 rounded-full h-20 px-12 bg-primary text-white text-2xl font-black tracking-tighter transition-all hover:scale-110">
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
                className="text-white bg-white/5 border border-white/10 px-10 py-4 rounded-full font-black text-xl cursor-pointer shadow-xl"
              >
                No
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
    </div>
  );
}
