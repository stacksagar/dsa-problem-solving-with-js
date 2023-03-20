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

  insert(value) {
    
  }
}

const list = new LinkedList(10);

list