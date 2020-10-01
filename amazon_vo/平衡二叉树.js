var isBalanced = function(root) {
  return helper(root)[0];
};

function helper(root) {
  if (!root) return [true, 0];

  const [left, left_depth] = helper(root.left);
  const [right, right_depth] = helper(root.right);

  return [left && right && Math.abs(left_depth - right_depth) <= 1, Math.max(left_depth, right_depth) + 1];
}