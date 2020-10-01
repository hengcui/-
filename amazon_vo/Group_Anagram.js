/**
 * 方法一 ： 对每个值进行排序， 排序后相同的值就是同一个组合里
 */
var groupAnagrams = function(strs) {
  const hash = new Map();

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (hash.has(sortedStr)) {
      hash.get(sortedStr).push(str);
    } else {
      hash.set(sortedStr, [str]);
    }
  }

  const res = [];
  for (let value of hash.values()) {
    res.push(value);
  }

  return res;
};