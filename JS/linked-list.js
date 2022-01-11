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

// Linked list class constructor
class LinkedList {
  constructor(header = null) {
    this.header = header;
  }
  // Helper method - size;
  size() {
    let count = 0;
    let node = this.header;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  // Helper method - clear
  clear() {
    this.header = null;
  }
  // Helper method - getLast
  getLast() {
    let lastNode = this.header;
    while(lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }
}

let list1 = new LinkedList(node1);
let list2 = new LinkedList(node2);
//let list3 = list2.clear();

console.log(list1);
console.log(list1.getLast());
console.log(list1.header.next.data);
console.log(list1.size());
