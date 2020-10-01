/**
 * 这个题目和candy那个题相似，也是从左遍历，再从右遍历，最后求乘机和
 * 
 * 而follow up的解决方法也相似， 用ans来记录从左遍历的值， 再从右向左遍历更新ans
 */
var productExceptSelf = function(nums) {
  const len = nums.length;
  const left = new Array(len);
  const right = new Array(len);
  const ans = new Array(len);
  for (let i = 0;i < len;i++) {
    if (i === 0) {
      left[i] = 1;
    } else {
      left[i] = left[i - 1] * nums[i - 1];
    }
  }
  
  for (let j = len - 1;j >= 0;j--) {
    if (j === len - 1) {
      right[j] = 1;
    } else {
      right[j] = right[j + 1] * nums[j + 1];
    }
  }
 
  for (let i = 0;i < len;i++) {
    ans[i] = left[i] * right[i];
  }

  return ans;
};

var productExceptSelf = function(nums) {
  const len = nums.length;
  const ans = new Array(len);

  for (let i = 0;i < len;i++) {
    if (i === 0) {
      ans[i] = 1;
    } else {
      ans[i] = ans[i - 1] * nums[i - 1];
    }
  }

  let R = 1;
  for (let j = len - 1;j >= 0;j--) {
    ans[j] *= R;
    R *= nums[j];
  }

  return ans;
}