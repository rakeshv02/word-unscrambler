import { useState } from 'react';
import DefinitionModal from './DefinitionModal.jsx';

// Badge colors by word length
const lengthColors = {
  2: 'bg-slate-700 text-slate-300',
  3: 'bg-purple-900/60 text-purple-300',
  4: 'bg-blue-900/60 text-blue-300',
  5: 'bg-cyan-900/60 text-cyan-300',
  6: 'bg-green-900/60 text-green-300',
  7: 'bg-yellow-900/60 text-yellow-300',
  8: 'bg-orange-900/60 text-orange-300',
};
const getLengthColor = (n) => lengthColors[n] || 'bg-red-900/60 text-red-300';

export default function Results({ words, query }) {
  const [selectedWord, setSelectedWord] = useState(null);

  if (!query) {
    return (
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">✏️</div>
        <p className="text-slate-400 text-lg">Type some letters above to get started</p>
      </section>
    );
  }

  if (words.length === 0) {
    return (
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <p className="text-slate-300 text-lg font-semibold mb-1">No words found</p>
        <p className="text-slate-500">Try different letters or change the length filter</p>
      </section>
    );
  }

  // Group by length for display
  const grouped = {};
  words.forEach(w => {
    if (!grouped[w.length]) grouped[w.length] = [];
    grouped[w.length].push(w);
  });

  return (
    <>
      {/* <!-- AD PLACEHOLDER: Top banner ad (728x90 leaderboard or responsive) --> */}
      {/* <!-- Place Google AdSense <ins class="adsbygoogle"> here before results --> */}

      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="space-y-6">
          {Object.keys(grouped)
            .map(Number)
            .sort((a, b) => b - a)
            .map(len => (
              <div key={len}>
                {/* Length group header */}
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${getLengthColor(len)}`}>
                    {len} letters
                  </span>
                  <span className="text-slate-600 text-xs">{grouped[len].length} words</span>
                  <div className="flex-1 h-px bg-slate-800" />
                </div>

                {/* Word grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                  {grouped[len].map(word => (
                    <button
                      key={word}
                      onClick={() => setSelectedWord(word)}
                      className="word-card group"
                    >
                      <span className="text-white font-semibold capitalize group-hover:text-blue-300 transition-colors duration-150 block truncate">
                        {word}
                      </span>
                      <span className="text-slate-500 text-xs group-hover:text-slate-400 transition-colors">
                        tap for definition
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* <!-- AD PLACEHOLDER: Bottom banner ad (728x90 or responsive) --> */}
        {/* <!-- Place Google AdSense <ins class="adsbygoogle"> here after results --> */}
      </section>

      <DefinitionModal word={selectedWord} onClose={() => setSelectedWord(null)} />
    </>
  );
}
