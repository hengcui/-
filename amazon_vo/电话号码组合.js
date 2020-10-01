var letterCombinations = function(digits) {
  const mapping = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"]
  ];

  function backtrack(digits, combo) {
    if (digits.length === 0) {
      res.push(combo);
      return;
    }

    const chars = mapping[Number(digits[0]) - 2];

    for (let char of chars) {
      backtrack(digits.substr(1), combo + char);
    }
  }

  if (digits.length === 0) return [];
  
  const res = [];
  backtrack(digits, "");

  return res;
};