var partitionLabels = function(S) {
  const last = new Array(26);

  for (let i = 0;i < S.length;i++) {
    const index = S.charCodeAt(i) - 97;
    last[index] = i;
  }

  let anchor = 0, j = 0;
  const res = [];
  for (let i = 0;i < S.length;i++) {
    j = Math.max(j, last[S.charCodeAt(i) - 97]);

    if (i === j) {
      res.push(j - anchor + 1);
      anchor = j + 1;
    }
  }

  return res;
};