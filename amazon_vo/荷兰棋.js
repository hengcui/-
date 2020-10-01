var sortColors = function(nums) {
  let i = 0, j = 0, k = nums.length;

  while (j < k) {
    if (nums[j] < 1) {
      swap(nums, i, j);
      i++;
      j++;
    } else if (nums[j] > 1) {
      k--;
      swap(nums, j, k);
    } else {
      j++;
    }
  }

  return nums;
};

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}