import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import memory3 from "../assets/3.jpeg";
import memory4 from "../assets/4.jpeg";
import memory5 from "../assets/5.jpeg";

const MemoryEntry = ({ date, title, desc, img, rev }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`flex flex-col ${rev ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12 group`}
  >
    <div className="w-full md:w-1/2 aspect-square md:aspect-4/3 rounded-xl overflow-hidden shadow-2xl relative">
      <img
        src={img}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        alt="memory"
      />
      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
    </div>
    <div className="w-full md:w-1/2 space-y-3 md:space-y-4 text-center md:text-left">
      <span className="text-primary font-bold text-[10px] md:text-xs tracking-widest uppercase">
        {date}
      </span>
      <h3 className="text-white text-2xl md:text-4xl font-bold leading-tight">
        {title}
      </h3>
      <p className="text-white/50 text-sm md:text-lg leading-relaxed font-light italic">
        {desc}
      </p>
    </div>
  </motion.div>
);

export default function Memories() {
  return (
    <div className="min-h-screen bg-background-dark py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-24 md:space-y-32">
        <header className="text-center space-y-4 mb-16">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
            Our Story
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
            The Moments That <br />
            <span className="text-primary">Defined Us</span>
          </h1>
        </header>

        <MemoryEntry
          date="AUGUST 2025"
          title="The first realization."
          desc="It wasn't a grand gesture. From the moment I first saw you, I knew you were the one for me, I just knew you were very special."
          img={memory3}
        />
        <MemoryEntry
          rev
          date="SEPTEMBER 2025"
          title="Where I felt safe."
          desc="I was getting to know you well, I realized how much you were intentional. you have been a safe place for me."
          img={memory5}
        />
        <MemoryEntry
          date="RECENTLY"
          title="The Keeper."
          desc="I have spent enough time with you, and I know I want a future with you"
          img={memory4}
        />

        <div className="text-center pt-12 md:pt-20">
          <Link to="/appreciation">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 md:px-12 py-4 rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105 cursor-pointer">
              Next: What I Adore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
