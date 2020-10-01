/**
 * loop word and abbr together:
 * 1. if both are letter and not equal, return false
 * 2. if word meet digit, then count number, i += count
 * 3. Be aware of leading zero is not allowed
 */
var validWordAbbreviation = function(word, abbr) {
  let i = 0, j = 0;

  while (i < word.length && j < abbr.length) {
    if (!abbr[j].match(/\d/)) {
      if (word[i] !== abbr[j]) return false;
      i++;
      j++;
    } else {
      // console.log("meet digit")
      let digit = 0;
      while (j < abbr.length && abbr[j].match(/\d/)) {
        if (digit === 0 && abbr[j] === "0") return false;
        digit = digit * 10 + Number(abbr[j]);
        j++;
      }
      // console.log(digit)
      i += digit;
    }
  }

  return i === word.length && j === abbr.length;
};