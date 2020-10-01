class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(x) {
    this.root = this.addHelper(this.root, x);
  }

  addHelper(root, val) {
    if (!root) return new TreeNode(val);

    if (root.val > val) {
      root.left = this.addHelper(root.left, val);
    } else {
      root.right = this.addHelper(root.right, val);
    }

    return root;
  }
}

function distanceFromRoot(root, a) {
  if (!root) return 0;

  if (root.val === a) {
    return 0;
  } else if (root.val > a) {
    return 1 + distanceFromRoot(root.left, a);
  } else {
    return 1 + distanceFromRoot(root.right, a);
  }
}

function distanceBetween2(root, a, b) {
  if (!root) return 0;

  if (root.val > a && root.val > b) {
    return distanceBetween2(root.left, a, b);
  } else if (root.val < a && root.val < b) {
    return distanceBetween2(root.right, a, b);
  } else {
    // console.log(root.val, distanceFromRoot(root, a), distanceFromRoot(root, b))
    return distanceFromRoot(root, a) + distanceFromRoot(root, b);
  }
}

const tree = new BST();
tree.add(20);
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(30);
tree.add(25);
tree.add(35);

console.log(tree.root);
console.log(distanceBetween2(tree.root, 10, 35))
