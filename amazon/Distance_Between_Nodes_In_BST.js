/**
 * Amazon OA Distance Between Nodes in BST
 * https://leetcode.com/discuss/interview-question/376375/
 * Time: O(h)
 */

class TreeNode {
  constructor(val) {
    this.val = val ? val : null;
    this.left = this.right = null;
  }
}
function buildBST(arr) {
  let root = null;

  for (let elem of arr) {
    root = insertTree(root, elem);
  }

  return root;
}

function insertTree(root, elem) {
  if (!root) return new TreeNode(elem);

  if (elem > root.val) {
    root.right = insertTree(root.right, elem);
  } else {
    root.left = insertTree(root.left, elem);
  }

  return root;
}

function countDistance(root, node) {
  if (root.val === node) return 0;

  if (node < root.val) {
    return 1 + countDistance(root.left, node);
  } else {
    return 1 + countDistance(root.right, node);
  }
}

function distanceSpan(root, node1, node2) {
  if (!root) return 0;
  if (node1 < root.val && node2 < root.val) {
    return distanceSpan(root.left, node1, node2);
  } else if (node1 > root.val && node2 > root.val) {
    return distanceSpan(root.right, node1, node2);
  } else {
    return countDistance(root, node1) + countDistance(root, node2);
  }
}

function distanceBetween2Nodes(arr, node1, node2) {
  let root = buildBST(arr);

  return distanceSpan(root, node1, node2);
}

console.log(distanceBetween2Nodes([20, 10, 5, 15, 30, 25, 35], 5, 35));