/**
 * Problem 7.2: Rotate Linked List
 * 
 * Given a singly linked list of size N. The task is to left-shift the linked list by k nodes,
 * where k is a given positive integer smaller than or equal to length of the linked list.
 * 
 * Example 1:
 *      Input:  N = 5
 *              value[] = {2, 4, 7, 8, 9} 
 *              k = 3
 *      Output: 8 9 2 4 7
 * 
 */

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function rotateLinkedList(head, k){
    let current = head;
    let prev = head;
    let count = k;

    while(count > 0){
        prev = current;
        current = current.next;
        count--;
    }

    if (current == null || k == 0) return head;
    
    prev.next = null;
    let oldHead = head;
    head = current;

    while(current.next != null){
        current = current.next;
    }
    
    current.next = oldHead;
  
    return head;
}
  
const head = new Node(1, new Node(2, new Node(3, new Node(4))));

console.log(rotateLinkedList(head, 2))