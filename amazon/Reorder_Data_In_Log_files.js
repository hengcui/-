var reorderLogFiles = function(logs) {
  return logs.sort((a, b) => {
    const logs1 = a.split(" ");
    const logs2 = b.split(" ");

    const isDigit1 = logs1[1].match(/^\d+$/);
    const isDigit2 = logs2[1].match(/^\d+$/);

    if(!isDigit1 && !isDigit2) {
      let i = 1, j = 1;
      while (i < logs1.length && j < logs2.length) {
        if (logs1[i] !== logs2[j]) return logs1[i] < logs2[j] ? -1 : 1;
        i++;
        j++;
      }

      if (i !== logs1.length) return 1;
      if (j !== logs2.length) return -1;

      return logs1[0] < logs2[0] ? -1 : 1;
    } else {
      return isDigit1 ? isDigit2 ? 0 : 1 : -1;
    }
  })
};