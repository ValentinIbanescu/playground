// Example of singly linked list
const list = {
    head: {
        value: 6,
        next: {
            value: 10,
            next: {
                value: 12,
                next: {
                    value: 3,
                    next: null
                    }
                }
            }
        }
    };

  // Node constructor
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new ListNode(6);
let node2 = new ListNode(2);
node1.next = node2;
let node3 = new ListNode(10);
node2.next = node3;

// Linked list class constructor
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  // Helper method - size;
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  // Helper method - clear
  clear() {
    this.head = null;
  }
  // Helper method - getLast
  getLast() {
    let lastNode = this.head;
    while(lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }
  // Helper method - getFirst
  getFirst() {
    return this.head.data;
  }
}

let list1 = new LinkedList(node1);
let list2 = new LinkedList(node2);
//let list3 = list2.clear();

//console.log(list1);
console.log(list1.getLast());
/* console.log(list1.head.next.data);
console.log(list1.size()); */
console.log(list1.getFirst());
