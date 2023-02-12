/**
 * Problem 7.1 : Reverse the Linked list
 * 
 */

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}


function reverseLinkedList(head){

    let currentNode = head;
    let prevPointer = null;
  
    while(currentNode != null){
      let nextNode = currentNode.next;
      currentNode.next = prevPointer;
      prevPointer = currentNode;

      currentNode = nextNode; 
    }
  
    head = prevPointer;
    return head;
}

const head = new Node(1, new Node(2, new Node(3, new Node(4))));

let node = reverseLinkedList(head);

while(node != null){
	console.log(node.val)
  node = node.next
}
