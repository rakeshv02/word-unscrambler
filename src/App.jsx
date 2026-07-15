import { useState, useMemo } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import InputSection from './components/InputSection.jsx';
import Controls from './components/Controls.jsx';
import Results from './components/Results.jsx';
import Footer from './components/Footer.jsx';
import { useDebounce } from './hooks/useDebounce.js';
import { findWords, filterByLength, sortWords } from './utils/unscramble.js';
import { getWordList } from './data/wordList.js';

// Cache the word list once at module level
const WORD_LIST = getWordList();

export default function App() {
  const [input, setInput] = useState('');
  const [lengthFilter, setLengthFilter] = useState(0);
  const [sortBy, setSortBy] = useState('frequency');

  // Debounce the input to avoid re-running on every keystroke
  const debouncedInput = useDebounce(input, 250);

  // Compute results whenever debounced input, filter, or sort changes
  const words = useMemo(() => {
    if (!debouncedInput.trim()) return [];
    const found = findWords(debouncedInput);
    const filtered = filterByLength(found, lengthFilter);
    return sortWords(filtered, sortBy, WORD_LIST);
  }, [debouncedInput, lengthFilter, sortBy]);

  const handleClear = () => {
    setInput('');
    setLengthFilter(0);
    setSortBy('frequency');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white font-sans">
      <Header />

      <main className="flex-1">
        <Hero />

        {/* <!-- AD PLACEHOLDER: Top leaderboard ad (728x90 or responsive) --> */}
        {/* <!-- Place Google AdSense <ins class="adsbygoogle"> here between hero and input --> */}

        <InputSection value={input} onChange={setInput} onClear={handleClear} />

        {(debouncedInput || words.length > 0) && (
          <Controls
            lengthFilter={lengthFilter}
            setLengthFilter={setLengthFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
            resultCount={debouncedInput ? words.length : null}
          />
        )}

        {/* <!-- AD PLACEHOLDER: Sidebar ad (160x600 skyscraper) can be placed beside results on desktop --> */}
        {/* <!-- Wrap results + sidebar in a flex container and add the ad unit in a sticky sidebar --> */}

        <Results words={words} query={debouncedInput} />
      </main>

      <Footer />
    </div>
  );
}
