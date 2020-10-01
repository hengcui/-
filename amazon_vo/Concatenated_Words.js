var findAllConcatenatedWordsInADict = function(words) {
  const dict = new Set();
  const memo = new Set();

  for (let word of words) {
    dict.add(word);
  }

  const res = [];

  for (let word of words) {
    if (isConcatenatedWord(word, memo, dict, 0)) {
      res.push(word);
    }
  }
  // console.log(memo)
  return res;
};

function isConcatenatedWord(word, memo, dict, count) {
  if (memo.has(word)) return true;
  if (word.length <= 0) return count >= 2;
  // console.log(word, count)
  for (let i = 0;i < word.length;i++) {
    const left_str = word.slice(0, i + 1), right_str = word.slice(i + 1);

    if (dict.has(left_str)) {
      if (isConcatenatedWord(right_str, memo, dict, count + 1)) {
        memo.add(word);
        return true;
      }
    }
  }

  return false;
}