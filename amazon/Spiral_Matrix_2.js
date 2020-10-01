var generateMatrix = function(n) {
  if (!n) return [];
  const ans = new Array(n).fill(null).map(val => new Array(n));
  const target = n * n;
  let left = 0, right = n - 1, top = 0, bottom = n - 1;
  let count = 1;
  while (count <= target) {
    for (let i = left;i <= right;i++) {
      ans[top][i] = count++;
    }
    top++;

    for (let i = top;i <= bottom;i++) {
      ans[i][right] = count++;
    }
    right--;

    for (let i = right;i >= left;i--) {
      ans[bottom][i] = count++;
    }
    bottom--;

    for (let i = bottom;i >= top;i--) {
      ans[i][left] = count++;
    }
    left++;

  }

  return ans;
};