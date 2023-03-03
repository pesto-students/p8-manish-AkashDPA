/**
 * Problem 10.2 : Validate a Binary Tree
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:The left subtree of a node contains only nodes with keys less than the node's key.
 * Theright subtree of a node contains only nodes with keys greater than the node's key. 
 * Both the left and right subtrees must also be binary search trees
 */

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
  
let root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);
  
function isBST() {
    return checkBST(root, -Infinity, Infinity);
}
  
function checkBST(root, min, max) {
    if (root === null) {
      return true;
    }
  
    if (root.value < min || root.value > max) {
      return false;
    }
  
    return (
      checkBST(root.left, min, root.value - 1) &&
      checkBST(root.right, root.value + 1, max)
    );
}

console.log(isBST());
