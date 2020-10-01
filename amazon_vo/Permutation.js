/**
 * Permutation 1
 */
var permute = function(nums) {
  let res = [];

  function backtrack(nums, track) {
    //结束条件
    if (nums.length === track.length) {
      res.push(track.slice());
      return;
    }

    //做选择
    for (let num of nums) {
      //排出已经算过的选项
      if (track.includes(num)) continue;

      track.push(num);
      backtrack(nums, track);
      track.pop();
    }
  }

  const track = [];
  backtrack(nums, track);

  return res;
};
/**
 * Permutation 2 
 */
var permuteUnique = function(nums) {
  function backtrack(combo, visited) {
    if (combo.length === nums.length) {
      res.push(combo.slice());
      return;
    }

    for (let i = 0;i < nums.length;i++) {
      if (visited.has(i)) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !visited.has(i - 1)) continue;

      combo.push(nums[i]);
      visited.add(i);

      backtrack(combo, visited);

      combo.pop();
      visited.delete(i);
    }
  }

  const res = [];
  const visited = new Set();

  nums.sort((a, b) => a - b);
  backtrack([], visited);

  return res;
};