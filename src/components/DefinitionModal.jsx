import { useEffect, useState } from 'react';

const cache = new Map();

export default function DefinitionModal({ word, onClose }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!word) return;
    setLoading(true);
    setError(null);
    setData(null);

    if (cache.has(word)) {
      setData(cache.get(word));
      setLoading(false);
      return;
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(r => {
        if (!r.ok) throw new Error('Definition not found');
        return r.json();
      })
      .then(json => {
        cache.set(word, json);
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [word]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!word) return null;

  const meanings = data?.[0]?.meanings ?? [];
  const phonetic = data?.[0]?.phonetic ?? data?.[0]?.phonetics?.find(p => p.text)?.text ?? '';
  const audio = data?.[0]?.phonetics?.find(p => p.audio)?.audio ?? '';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white capitalize">{word}</h2>
            {phonetic && (
              <div className="flex items-center gap-2 mt-1">
                <span className="text-slate-400 text-sm font-mono">{phonetic}</span>
                {audio && (
                  <button
                    onClick={() => new Audio(audio).play()}
                    className="text-primary hover:text-blue-400 transition-colors"
                    title="Pronounce"
                  >
                    🔊
                  </button>
                )}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors text-xl leading-none ml-4 flex-shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        {loading && (
          <div className="flex items-center gap-2 text-slate-400 py-4">
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span>Loading definition…</span>
          </div>
        )}

        {error && (
          <p className="text-slate-400 py-4">No definition found for "<span className="text-white">{word}</span>".</p>
        )}

        {!loading && !error && meanings.length > 0 && (
          <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
            {meanings.slice(0, 3).map((meaning, mi) => (
              <div key={mi}>
                <span className="inline-block bg-primary/20 text-blue-300 text-xs font-semibold px-2 py-0.5 rounded uppercase tracking-wide mb-2">
                  {meaning.partOfSpeech}
                </span>
                <ol className="space-y-2">
                  {meaning.definitions.slice(0, 3).map((def, di) => (
                    <li key={di} className="text-slate-300 text-sm leading-relaxed">
                      <span className="text-slate-500 mr-1 font-medium">{di + 1}.</span>
                      {def.definition}
                      {def.example && (
                        <p className="text-slate-500 text-xs mt-0.5 italic">"{def.example}"</p>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        )}

        <p className="text-slate-600 text-xs mt-4 text-right">
          Powered by Free Dictionary API
        </p>
      </div>
    </div>
  );
}
