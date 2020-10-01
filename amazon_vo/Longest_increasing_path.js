var longestIncreasingPath = function(matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) return 0;

  const m = matrix.length, n = matrix[0].length;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const memo = new Array(m).fill(null).map(row => new Array(n).fill(0));
  let ans = 0;

  for (let i = 0;i < m;i++) {
    for (let j = 0;j < n;j++) {
      ans = Math.max(ans, dfs(matrix, i, j, memo));
    }
  }

  

  function dfs(matrix, i, j, memo) {
    if (memo[i][j] !== 0) return memo[i][j];

    memo[i][j]++;

    for (let k = 0;k < 4;k++) {
      const new_x = i + dx[k], new_y = j + dy[k];

      if (inArea(new_x, new_y) && matrix[i][j] < matrix[new_x][new_y]) {
        memo[i][j] = Math.max(memo[i][j], dfs(matrix, new_x, new_y, memo) + 1);
      }
    }  

    return memo[i][j];
  }

  function inArea(i, j) {
    return i >= 0 && j >= 0 && i < m && j < n;
  }

  return ans;
};