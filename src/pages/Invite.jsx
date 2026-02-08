export default function Invite() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background-dark">
      <div className="max-w-4xl w-full bg-burgundy-dark/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1516339901600-2e1a62d0ed30?q=80&w=1000"
            alt="date"
          />
        </div>
        <div className="md:w-1/2 p-10 space-y-8">
          <h2 className="text-4xl font-bold">
            Now let me take you out properly.
          </h2>
          <p className="text-blush">
            The night is ours. Choose your adventure.
          </p>
          <div className="flex flex-col gap-4">
            <button className="w-full h-14 bg-primary rounded-lg font-bold hover:scale-[1.02] transition-transform">
              Dinner with me 🍷
            </button>
            <button className="w-full h-14 bg-white/5 border border-white/10 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Surprise me ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
