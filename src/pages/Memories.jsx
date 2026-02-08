import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MemoryEntry = ({ date, title, desc, img, rev }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`flex flex-col ${rev ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 group`}
  >
    <div className="w-full md:w-1/2 aspect-4/3 rounded-xl overflow-hidden shadow-2xl relative">
      <img
        src={img}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        alt="memory"
      />
      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
    </div>
    <div className="w-full md:w-1/2 space-y-4">
      <span className="text-primary font-bold text-xs tracking-widest uppercase">
        {date}
      </span>
      <h3 className="text-white text-3xl font-bold leading-tight">{title}</h3>
      <p className="text-white/50 leading-relaxed font-light italic">{desc}</p>
    </div>
  </motion.div>
);

export default function Memories() {
  return (
    <div className="min-h-screen bg-background-dark py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-32">
        <header className="text-center space-y-4 mb-20">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-black">
            The Moments That <br />
            <span className="text-primary">Defined Us</span>
          </h1>
        </header>

        <MemoryEntry
          date="Autumn 2021"
          title="The first realization."
          desc="It wasn't a grand gesture. Just the way you listened when I talked about things that didn't matter."
          img="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000"
        />

        <MemoryEntry
          rev
          date="Winter 2022"
          title="Where I felt safe."
          desc="Snow was falling, silence was comfortable. I realized I didn't have to perform. I could just be."
          img="https://images.unsplash.com/photo-1482841628122-9080d44bb807?q=80&w=1000"
        />

        <div className="text-center pt-20">
          <Link to="/appreciation">
            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105">
              Next: What I Adore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
