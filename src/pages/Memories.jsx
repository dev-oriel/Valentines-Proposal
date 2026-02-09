import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import memory2 from "../assets/2.jpeg";
import memory1 from "../assets/1.jpeg";

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
          desc="It wasn't a grand gesture. From the moment you walked in to vinnyx, I just knew you were very special."
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuCkml1r_Jtw6sf3oGT6q1zpDSOYE4c7L_QgGH7SegU6mBFrEpkEqiFz_H7kixdFNbmrn6wOi02NyKuYB4ECyHAFnzJUKa2jAbQQc705zoHxqUnfqKLJAt9eYHwrRTx-TA4MewUyRvlZm0wFzj-t72INIYwMGNbnhqv356QNIhDjUbkvS-7DD2YiEQTUWpvdg4ERkJ-8pgczd1we6CghF9IZxy_QHxzqd2CeTqZj8VKzXea84iYp3l08e3gN6sPyjJOD2sm5d0RGicQ"
        />
        <MemoryEntry
          rev
          date="SEPTEMBER 2025"
          title="Where I felt safe."
          desc="I was getting to know you well, and your truth meant something deeper. I realized how much you were intentional."
          img="https://images.unsplash.com/photo-1482841628122-9080d44bb807?q=80&w=1000"
        />
        <MemoryEntry
          date="RECENTLY"
          title="The Keeper."
          desc="I have spent enough time with you... honestly I trust you enough."
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuDO91CvvkcF_YGNWIPWapiscjFNOemdpAMxarWwYrihXD_fC-SV4YHgZN7Q_kNGxA2R0Y1Pa5vwbbcGdiRQPlw7x-KkaIOTqXLmoSEhLaEQRIhuPuJMKusAMhQsrJZANxxgbTiOPgG8ZH7kZO_hHbZEzmn4bj4pkx8UJHlxIjuz8dPsgD_wSg0Xyx7LHcoaTMVJsg4SSrla3Z4rhGHoeu_93q6RIDILnh53g5mmRC51WXPsKt9bIGikEbxlKMLsJoicvvpjBSy8-DY"
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
