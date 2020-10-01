/**
 * 暴力解法
 */
// function isPalindrome(s, left, right) {
//   while(left < right) {
//     if (s[left] !== s[right]) return false;
//     left++;
//     right--;
//   }

//   return true;
// }
// var longestPalindrome = function(s) {
//   let res = "";
//   for (let i = 0;i < s.length;i++) {
//     for (let j = i;j < s.length;j++) {
//       if (j - i + 1 > res.length && isPalindrome(s, i, j)) {
//         res = s.substr(i, j - i + 1);
//       }
//     }
//   }

//   return res;
// };

/**
 * dp
 * dp(i, j)表示的是从i - j的序列是不是回文
 * dp(i, j) = dp(i + 1, j - 1) && s[i] === s[j]
 * 循环O(n ^ 2)来判断dp(0, 0 ) - dp(n, n)的最大值
 */
Array.matrix = function (rownum, colnum, initial) {
  let matrix = [];

  for (let i = 0;i < rownum;i++) {
    let cols = [];

    for (let j = 0;j < colnum;j++) {
      cols[j] = initial;
    }

    matrix[i] = cols;
  }

  return matrix;
}
var longestPalindrome = function(s) {
  const n = s.length;
  let dp = Array.matrix(n, n, false);
  let res = "";

  for (let j = 0;j < n;j++) {
    for (let i = j;i >= 0;i--) {
      if (i === j) {
        dp[i][j] = true;
      } else if (i + 1 === j && s[i] === s[j]) {
        dp[i][j] = true;
      } else {
        dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
      }

      if (dp[i][j] && j - i + 1 > res.length) res = s.substr(i, j - i + 1);
    }
  }

  return res;
}