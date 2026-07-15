export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
        {/* Logo */}
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary shadow-lg flex-shrink-0">
          <span className="text-white font-extrabold text-lg leading-none">W</span>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-white font-bold text-lg leading-tight tracking-tight">
            Word Unscrambler
          </h1>
          <p className="text-slate-400 text-xs hidden sm:block">
            Find all words from your scrambled letters
          </p>
        </div>

        <div className="flex-1" />

        {/* Nav placeholder */}
        <nav className="hidden md:flex items-center gap-5 text-sm text-slate-400">
          <span className="cursor-pointer hover:text-white transition-colors">Tools</span>
          <span className="cursor-pointer hover:text-white transition-colors">About</span>
        </nav>
      </div>
    </header>
  );
}
