function subStringWithK(s, k) {
  let left = 0, right = 0, size = 0;
  const map = new Map;
  const res = new Set;

  while (right < s.length) {
    map.set(s[right], map.has(s[right]) ? map.get(s[right]) + 1 : 1);
    if (map.get(s[right]) === 1) {
      size++;
    } else {
      size--;
    }
    right++;

    while (right - left === k) {
      if (size === k) res.add(s.substring(left, right));

      if (map.get(s[left]) === 1) {
        size--;
      } else {
        size++;
      }
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }
  }

  return Array.from(res.values());
}

console.log(subStringWithK("abcabc", 3));
console.log(subStringWithK("abacab", 3));
console.log(subStringWithK("awaglknagawunagwkwagl", 4));
console.log(subStringWithK("pqpqs", 2));