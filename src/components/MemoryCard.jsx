import { motion } from "framer-motion";

export default function MemoryCard({
  date,
  title,
  description,
  image,
  reversed = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16 group`}
    >
      {/* Image Side */}
      <div className="w-full md:w-3/5 relative">
        <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>
        <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-2xl">
          <img
            src={image}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            alt={title}
          />
        </div>
      </div>

      {/* Text Side */}
      <div
        className={`w-full md:w-2/5 space-y-4 ${reversed ? "text-left md:text-right" : "text-left"}`}
      >
        <div
          className={`flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest ${reversed ? "md:justify-end" : ""}`}
        >
          {!reversed && <span className="h-px w-8 bg-primary"></span>}
          {date}
          {reversed && <span className="h-px w-8 bg-primary"></span>}
        </div>
        <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
          {title}
        </h3>
        <p className="text-white/50 text-base leading-relaxed font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
