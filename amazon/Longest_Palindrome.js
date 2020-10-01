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