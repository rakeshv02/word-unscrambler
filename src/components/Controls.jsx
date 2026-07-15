export default function Controls({ lengthFilter, setLengthFilter, sortBy, setSortBy, resultCount }) {
  const lengthOptions = [
    { value: 0, label: 'All lengths' },
    ...Array.from({ length: 8 }, (_, i) => ({ value: i + 3, label: `${i + 3} letters` })),
  ];

  const sortOptions = [
    { value: 'frequency', label: 'By Frequency' },
    { value: 'alpha', label: 'Alphabetical' },
    { value: 'length', label: 'By Length' },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        {/* Result count */}
        <div className="flex-1">
          {resultCount !== null && (
            <span className="text-slate-400 text-sm">
              <span className="text-white font-semibold">{resultCount}</span>{' '}
              {resultCount === 1 ? 'word' : 'words'} found
            </span>
          )}
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <label className="text-slate-400 text-sm whitespace-nowrap">Length:</label>
            <select
              value={lengthFilter}
              onChange={e => setLengthFilter(Number(e.target.value))}
              className="select-field text-sm"
            >
              {lengthOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-slate-400 text-sm whitespace-nowrap">Sort:</label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="select-field text-sm"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
