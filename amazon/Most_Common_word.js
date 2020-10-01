var mostCommonWord = function(paragraph, banned) {
  const map = new Map;
  const words = paragraph.toLowerCase().split(/\W/).filter(w => w && !banned.includes(w));
  // console.log(words)
  let res = "", most = 0;
  for (let word of words) {
    map.set(word, map.has(word) ? map.get(word) + 1 : 1);
    if (map.get(word) > most) {
      most = map.get(word);
      res = word;
    }
  }
  // console.log(map)
  return res;
};