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

console.log(node1);
console.log(node2);
