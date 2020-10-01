/**
 * Amazon OA 2020
 * https://leetcode.com/discuss/interview-question/762546/
 */

 /**
  * Use two pointers i, j respectively for elements in two arrays. For a specific code codeList[i], check the subarray of the same length of codeList[i] staring from j in shoppingcart.
  * @param {*} codeList 
  * @param {*} shoppingCart 
  */
function winPrize(codeList, shoppingCart) {
  if (!codeList || !codeList.length || !codeList[0].length) return 1;
  if (!shoppingCart || !shoppingCart.length) return 0;

  let i = 0, j = 0;

  while (i < codeList.length && j + codeList[i].length <= shoppingCart.length) {
    let match = true;

    for (let k = 0;k < codeList[i].length;k++) {
      if (codeList[i][k] !== "anything" && codeList[i][k] !== shoppingCart[j + k]) {
        match = false;
        break;
      }
    }

    if (match) {
      j += codeList[i].length;
      i++;
    } else {
      j++;
    }
  }

  return i === codeList.length ? 1 : 0;
}

console.log(winPrize([["apple", "apple"], ["banana", "anything", "banana"]], ["orange", "apple", "apple", "banana", "orange", "banana"])); //1
console.log(winPrize([["apple", "apple"], ["banana", "anything", "banana"]], ["banana", "orange", "banana", "apple", "apple"])); //0
console.log(winPrize([["apple", "apple"], ["banana", "anything", "banana"]], ["apple", "banana", "apple", "banana", "orange", "banana"])); //0
console.log(winPrize([["apple", "apple"], ["apple", "apple", "banana"]], ["apple", "apple", "apple", "banana"])); //0