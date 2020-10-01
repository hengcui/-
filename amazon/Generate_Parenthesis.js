var generateParenthesis = function(n) {
  function backtrack(l, r, str) {
    if (l === 0 && r === 0) {
      result.push(str);
      return;
    }

    if (l > 0) backtrack(l - 1, r, str + "(");
    if (l < r) backtrack(l, r - 1, str + ")");
  }

  const result = [];

  backtrack(n, n, "");

  return result;
};