import { getWordList } from '../data/wordList.js';

/**
 * Build a frequency map of characters in a string
 */
function charFreq(str) {
  const freq = {};
  for (const ch of str.toLowerCase()) {
    if (/[a-z]/.test(ch)) freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}

/**
 * Check if a word can be formed from the available letters (using exact counts)
 */
function canForm(wordFreq, availableFreq) {
  for (const [ch, count] of Object.entries(wordFreq)) {
    if ((availableFreq[ch] || 0) < count) return false;
  }
  return true;
}

/**
 * Find all words that can be formed from the given scrambled letters.
 * Returns an array of matching words (strings).
 */
export function findWords(letters) {
  const input = letters.toLowerCase().replace(/[^a-z]/g, '');
  if (input.length === 0) return [];

  const availableFreq = charFreq(input);
  const wordList = getWordList();
  const results = [];

  for (const word of wordList) {
    if (word.length < 2 || word.length > input.length) continue;
    const wf = charFreq(word);
    if (canForm(wf, availableFreq)) {
      results.push(word);
    }
  }

  return results;
}

/**
 * Filter words by exact length. lengthFilter = 0 means all lengths.
 */
export function filterByLength(words, lengthFilter) {
  if (!lengthFilter || lengthFilter === 0) return words;
  return words.filter(w => w.length === lengthFilter);
}

/**
 * Sort words by the given strategy.
 * strategies: 'alpha' | 'length' | 'frequency'
 *
 * For 'frequency', we approximate by word list order (earlier = more common).
 */
export function sortWords(words, strategy, wordList) {
  const sorted = [...words];
  if (strategy === 'alpha') {
    sorted.sort((a, b) => a.localeCompare(b));
  } else if (strategy === 'length') {
    sorted.sort((a, b) => b.length - a.length || a.localeCompare(b));
  } else if (strategy === 'frequency') {
    const indexMap = {};
    wordList.forEach((w, i) => { indexMap[w] = i; });
    sorted.sort((a, b) => (indexMap[a] ?? Infinity) - (indexMap[b] ?? Infinity));
  }
  return sorted;
}
