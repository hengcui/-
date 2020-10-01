/**
 * dp
 * 状态转移方程 dp(n) = min( All dp(n - ps) + 1 )
 * 找到所有小于n 的ps, 根据状态转移方程， 找到所有ps的最小值
 * 
 * 判断 n ** 0.5 是不是整数判断是不是 pefect square
 * Number.isInteger 用于检测是不是整数
 */
var numSquares = function(n) {
  let dp = new Array(n + 1);
  let psArr = [];

  dp[0] = 0;

  for (let i = 1;i <= n;i++) {
    if (Number.isInteger(i ** 0.5)) psArr.push(i);

    for (let ps of psArr) {
      dp[i] = dp[i] ? Math.min(dp[i], 1 + dp[i - ps]) : 1 + dp[i - ps];
    }
  }

  return dp[n];
};