class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLL {
  constructor(value) {
    let newNode = new Node(value);
    this.head = this.tail = newNode;
    this.length = 1;
  }
}

const list = new DoublyLL(10);

console.log(list);
