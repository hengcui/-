function uniquePair(nums, target) {
  const set = new Set;
  const seen = new Set;
  let count = 0;
  for (let num of nums) {
    if (set.has(target - num) && !seen.has(num)) {
      count++;
      seen.add(num);
      seen.add(target - num);
    } else if (!set.has(num)) {
      set.add(num);
    }
  }

  return count;
}

console.log(uniquePair([1, 1, 2, 45, 46, 46], 47))