import { Link } from "react-router-dom";

const Card = ({ icon, title, desc, num }) => (
  <div className="group relative bg-burgundy-dark/40 border border-primary/10 p-8 rounded-xl hover:-translate-y-2 transition-all">
    <div className="mb-6 flex justify-between">
      <span className="material-symbols-outlined text-primary/40 group-hover:text-primary">
        {icon}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-blush/40 font-bold">
        {num}
      </span>
    </div>
    <h3 className="text-cream text-xl font-medium mb-2">{title}</h3>
    <p className="text-blush/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
      {desc}
    </p>
  </div>
);

export default function Appreciation() {
  return (
    <div className="min-h-screen py-20 px-6 max-w-300 mx-auto text-center">
      <div className="mb-16 space-y-4">
        <h1 className="text-cream text-4xl lg:text-6xl font-bold">
          What I adore about you
        </h1>
        <p className="text-blush italic">
          Small moments that mean the world to me.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          icon="hearing"
          num="01"
          title="The way you listen."
          desc="You make me feel heard in a world that's often too loud."
        />
        <Card
          icon="sentiment_very_satisfied"
          num="02"
          title="Your genuine laugh."
          desc="That unbridled sound is my favorite melody."
        />
        <Card
          icon="home"
          num="03"
          title="You feel like home."
          desc="It doesn't matter where we are, as long as I'm with you."
        />
      </div>

      <div className="mt-20">
        <Link to="/tension">
          <button className="text-blush/60 hover:text-primary transition-colors uppercase tracking-widest text-sm flex flex-col items-center gap-4 mx-auto">
            Wait, there's more...
            <span className="material-symbols-outlined animate-bounce">
              expand_more
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
