export default function Hero() {
  return (
    <section className="text-center py-10 px-4">
      <div className="inline-flex items-center gap-2 bg-blue-950 border border-blue-800 text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        Instant word discovery
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
        Find all words from{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          your letters
        </span>
      </h2>
      <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
        Enter any scrambled letters and instantly discover every valid English word you can make — then tap any word to see its definition.
      </p>
    </section>
  );
}
