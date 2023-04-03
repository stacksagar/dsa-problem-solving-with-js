class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLL {
  constructor(value) {
    let node = new Node(value);
    this.head = this.tail = node;
    this.length = 1;
  }
}

const list = new DoublyLL(10);

console.log(list);
