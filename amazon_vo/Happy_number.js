/**
 * 这题其实是一个链表找环的问题
 * 不断的找squre sum的过程就是不断更新链表的过程， 如果最后出现了无限循环就说明在某一个点出现了环，如果没有循环，那么最后会回归到1
 */
var isHappy = function(n) {
  function getNext(n) {
    let sum = 0;

    while (n > 0) {
      sum += (n % 10) ** 2;
      n = Math.trunc(n / 10);
    }

    return sum;
  }

  let slow = n, fast = getNext(n);

  while (slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }

  return slow === 1;
};