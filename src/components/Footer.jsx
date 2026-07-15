const COMING_SOON = [
  { label: 'Anagram Solver', emoji: '🔄' },
  { label: 'Word Scrambler', emoji: '🎲' },
  { label: 'Crossword Helper', emoji: '🗒️' },
  { label: 'Wordle Solver', emoji: '🟩' },
  { label: 'Scrabble Helper', emoji: '🎯' },
  { label: 'Word Counter', emoji: '🔢' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-8">
      {/* <!-- AD PLACEHOLDER: Footer leaderboard ad (728x90) --> */}
      {/* <!-- Place Google AdSense <ins class="adsbygoogle"> here above footer content --> */}

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Other tools */}
        <div className="mb-8">
          <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">
            More Word Tools — Coming Soon
          </h3>
          <div className="flex flex-wrap gap-2">
            {COMING_SOON.map(tool => (
              <span
                key={tool.label}
                className="flex items-center gap-1.5 bg-slate-800 border border-slate-700 text-slate-400 text-sm px-3 py-1.5 rounded-full cursor-not-allowed select-none"
              >
                <span>{tool.emoji}</span>
                {tool.label}
                <span className="text-xs text-slate-600 ml-1">soon</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xs">W</span>
            </div>
            <span className="text-white font-semibold text-sm">Word Unscrambler</span>
          </div>
          <p className="text-slate-600 text-xs text-center">
            © {new Date().getFullYear()} Word Unscrambler. All rights reserved.
          </p>
          <div className="flex gap-4 text-slate-600 text-xs">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Contact</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
