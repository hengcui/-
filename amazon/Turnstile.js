/**
 * Amazon OA Turnstile
 * https://leetcode.com/discuss/interview-question/798231/
 * 
 * Two variables i, j stands for two customers(i always be the first arrive one), k stands for arrive time, prev - previous customer's direction
 * If two customers arrive at same time, pick the one that has same direction with prev
 * If two customers arrive at different time, pick the one that come first
 * 
 * @param {*} numCustomers 
 * @param {*} arrTime 
 * @param {*} direction 
 */
function turnstile(numCustomers, arrTime, direction) {
  const res = new Array(numCustomers);
  let prev = 1;
  let i = 0, j = 1, k = 0;

  while (j < numCustomers) {
    //two customers arrive at same time
    if (arrTime[i] === arrTime[j]) {
      //if i has same direction with prev
      if (direction[i] === prev) {
        res[i] = k;
        arrTime[j]++;
        i = j;
        j++;
      } else {
        res[j] = k;;
        arrTime[i]++;
        j++;
      }
    } else {
      res[i] = k;
      prev = direction[i];
      i = j;
      j++;
    }
    k++;
  }

  res[i] = Math.max(k, arrTime[i]);

  return res;
}

console.log(turnstile(4, [0, 0, 1, 5], [0, 1, 1, 0])); // [2, 0, 1, 5]
console.log(turnstile(5, [0, 1, 1, 3, 3], [0, 1, 0, 0, 1])) //[0, 2, 1, 4, 3]