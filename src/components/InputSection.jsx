export default function InputSection({ value, onChange, onClear }) {
  return (
    <section className="max-w-xl mx-auto px-4 mb-6">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl select-none pointer-events-none">
          🔤
        </div>
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value.replace(/[^a-zA-Z]/g, ''))}
          placeholder="Type scrambled letters…"
          maxLength={15}
          className="input-field pl-12 pr-24 text-lg h-14 text-center tracking-widest font-semibold uppercase"
          autoFocus
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
        />
        {value && (
          <button
            onClick={onClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-secondary hover:bg-red-600 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors duration-200"
          >
            Clear
          </button>
        )}
      </div>
      <p className="text-slate-500 text-xs text-center mt-2">
        Letters only · max 15 characters
      </p>
    </section>
  );
}
