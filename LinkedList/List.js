class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(data) {
    let node = new Node(data);
    this.head = this.tail = node;
    this.length = 1;
  }

  prepend(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  append(data) {
    let node = new Node(data);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
}

const list = new LinkedList(10);
list.append(20);
list.append(30);
list.prepend(5);
list.prepend(1);
list.append(40);

console.log("head", list.head);
console.log("teal", list.tail);
console.log("length", list.length);
