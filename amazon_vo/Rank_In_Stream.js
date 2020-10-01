/**
 * 1. use array for holding all elements in sorted order
 * 2. every time a new element added, based on the order to insert and shift whole array
 * 3. find rank for specific x, use binary search for finding the rank
 */

//  class Rank {
//   constructor(nums) {
//     this.nums = nums.sort((a, b) => a - b);
//   }

//   add(x) {
//     let inserted = false;

//     for (let i = 0;i < this.nums.length;i++) {
//       if (x < this.nums[i]) {
//         this.nums.splice(i, 0, x);
//         inserted = true;
//         break;
//       }
//     }

//     if (!inserted) this.nums.push(x);
//   }

//   getRank(x) {
//     let left = 0, right = this.nums.length - 1;
//     // console.log(left, right)
//     while (left < right) {
//       const mid = (left + right) >> 1;
//       console.log("mid", mid)
//       if (this.nums[mid] === x) {
//         if (mid + 1 === this.nums.length || this.nums[mid] < this.nums[mid + 1]) return mid;
//         left = mid + 1;
//       } else if (this.nums[mid] < x) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }

//     return this.nums[left] === x ? left : -1;
//   }
// }

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.leftSize = 0;
  }
}

class Rank {
  constructor(nums) {
    this.root = null;

    for (let num of nums) {
      this.add(num);
    }
  }

  add (num) {
    this.root = this.addHelper(this.root, num)
  }

  addHelper(node, num) {
    if (!node) return new TreeNode(num);
    // console.log(node)
    if (node.val >= num) {  
      node.left = this.addHelper(node.left, num);
      node.leftSize++;
    } else {  
      node.right = this.addHelper(node.right, num);
    }

    return node;
  }

  getRank(num) {
    return this.rankHelper(this.root, num);
  }

  rankHelper(root, num) {
    if (!root) return -1;

    if (root.val === num) return root.leftSize;
    if (root.val > num) return this.rankHelper(root.left, num);

    return root.leftSize + 1 + this.rankHelper(root.right, num);
  }
}
const arr = new Rank([5, 1, 4, 4, 5, 9, 7, 13, 3]);
// console.log(arr.root)
console.log(arr.getRank(4)) // 3
arr.add(3);
arr.add(4);
// console.log(arr.nums)
console.log(arr.getRank(4)); //5
console.log(arr.getRank(7)); //6