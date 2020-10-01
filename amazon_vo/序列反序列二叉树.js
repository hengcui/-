function traverse(root) {
  if (!root) return "#,";

  const left = traverse(root.left);
  const right = traverse(root.right);

  return root.val + "," + left + right;
}

var serialize = function(root) {
  const str = traverse(root);
  console.log(str);

  return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

function helper(list) {
  let val = list.shift();

  if (val === "#") return null;

  let root = new TreeNode(val);
  root.left = helper(list);
  root.right = helper(list);

  return root;
}
var deserialize = function(data) {
  const node_list = data.split(",");

  return helper(node_list);
};