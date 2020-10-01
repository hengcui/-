/**
 * dp[i] indicate that lonest increasing subsequence end with i
 * 同时维护一个count的dp
 * 每当s[j] < s[i], 判断dp[j] + 1 > dp[i]， 说明对于当前i点来说这是新出现的maxLen，那么这个count应该和count[j]一致
 * dp[j] + 1 === dp[i], 说明当前i点，这个len已经出现过了，那么count[i] += count[j];
 */
var findNumberOfLIS = function(nums) {
  const len = nums.length;
  if (len === 0) return 0;
  const lengths = new Array(len).fill(1);
  const counts = new Array(len).fill(1);

  for (let i = 0;i < len;i++) {
    for (let j = 0;j <= i;j++) {
      if (nums[j] < nums[i]) {
        if (lengths[j] + 1 > lengths[i]) {
          lengths[i] = lengths[j] + 1;
          counts[i] = counts[j];
        } else if (lengths[j] + 1 === lengths[i]) {
          counts[i] += counts[j];
        }
      }
    }
  }

  const maxLen = Math.max(...lengths);
  let sum = 0;
  for (let i = 0;i < len;i++) {
    if (lengths[i] === maxLen) sum += counts[i];
  }

  return sum;
};