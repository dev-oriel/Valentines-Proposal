import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({ icon, title, desc, num }) => (
  <div className="group relative bg-burgundy-dark/40 border border-primary/10 p-8 rounded-xl transition-all hover:border-primary/40 hover:bg-burgundy-dark/60">
    <div className="mb-6 flex justify-between items-start">
      <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-blush/40 font-bold">
        {num}
      </span>
    </div>
    <h3 className="text-cream text-xl font-semibold mb-3 tracking-tight">
      {title}
    </h3>
    <p className="text-blush/80 text-sm leading-relaxed font-light">{desc}</p>
    {/* Subtle heart accent that appears on hover/tap */}
    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-primary text-xs">
        favorite
      </span>
    </div>
  </div>
);

export default function Appreciation() {
  const qualities = [
    {
      icon: "hearing",
      num: "01",
      title: "The way you listen.",
      desc: "You make me feel truly heard in a world that is often way too loud.",
    },
    {
      icon: "sentiment_very_satisfied",
      num: "02",
      title: "Your genuine laugh.",
      desc: "That unbridled, honest sound is easily my favorite melody in the world.",
    },
    {
      icon: "auto_awesome",
      num: "03",
      title: "Your quiet strength.",
      desc: "The way you handle life's storms with such grace and resilience inspires me daily.",
    },
    {
      icon: "home",
      num: "04",
      title: "You feel like home.",
      desc: "It doesn't matter where we are or what we're doing; as long as I'm with you, I'm home.",
    },
    {
      icon: "bolt",
      num: "05",
      title: "Your infectious passion.",
      desc: "The spark in your eyes when you talk about things you love is purely beautiful.",
    },
    {
      icon: "volunteer_activism",
      num: "06",
      title: "Your kind soul.",
      desc: "The world is a softer, kinder place simply because you are existing in it.",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6 max-w-6xl mx-auto text-center flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 space-y-4"
      >
        <h1 className="text-cream text-4xl lg:text-6xl font-bold tracking-tight">
          What I adore about you
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/40"></div>
          <p className="text-blush text-lg font-light italic">
            Small moments that mean the world to me.
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/40"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {qualities.map((q, index) => (
          <motion.div
            key={q.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card {...q} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20"
      >
        <Link to="/tension">
          <button className="text-blush/60 hover:text-primary transition-all uppercase tracking-[0.3em] text-xs flex flex-col items-center gap-4 mx-auto group">
            Wait, there's more...
            <span className="material-symbols-outlined animate-bounce group-hover:scale-125 transition-transform">
              expand_more
            </span>
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
