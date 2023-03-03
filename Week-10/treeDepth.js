/**
 * Problem 10.1: 
 * Maximum Depth of Binary TreeGiven the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from theroot node down to the farthest leaf node
 */

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
  
let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.left.left = new Node(null);
root.left.right = new Node(null);
root.right.left = new Node(15);
root.right.right = new Node(7);

let maxDepth = (root) => {
    if (root === null) {
      return 0;
    } else {
      let leftDepth = maxDepth(root.left);
      let rightDepth = maxDepth(root.right);
  
      if (leftDepth > rightDepth) {
        return leftDepth + 1;
      } else {
        return rightDepth + 1;
      }
    }
};
  
console.log(maxDepth(root));