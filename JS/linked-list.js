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

    console.log(list);
    console.log(list.head);

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
}

let list1 = new LinkedList(node1);
let list2 = new LinkedList(node2);

console.log(list1);
console.log(list1.header.next.data);
console.log(list1.size());
console.log(list2.size());
