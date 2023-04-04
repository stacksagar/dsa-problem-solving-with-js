class Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = { data: null, next: null };
    this.tail = { data: null, next: null };
    this.length = 0;
  }

  // reset data & set all null
  resetList() {
    this.head = { data: null, next: null };
    this.tail = { data: null, next: null };
    this.length = 0;
  }

  // store data for first time!
  storeFirstData(data) {
    const node = new Node(data);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  // with push() method, add new data in the `Last` position
  push(data) {
    if (this.length === 0) return this.storeFirstData(data);

    const node = new Node(data);
    this.tail.next = node;
    this.tail = node;
    this.length = this.length + 1;
    return this;
  }

  // with pop() method, remove the 'Last' data from list
  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) return this.resetList();

    let new_tail;
    let current_node = this.head;
    while (current_node.next) {
      new_tail = current_node;
      current_node = current_node.next;
    }

    this.tail = new_tail;
    this.tail.next = null;
    this.length--;
  }

  // with shift() method, remove the 'First' data from list
  shift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) return this.resetList();

    const current_head = this.head;
    this.head = current_head.next;
    this.length--;
  }

  // with unshift() method, add new data in the 'First' Position
  unshift(data) {
    if (this.length === 0) return this.storeFirstData(data);

    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  // with get() method, find specific data from list
  get(index) {
    let position = Math.floor(index);
    if (position < 1 || position > this.length) return null;

    let count = 1;
    let current_node = this.head;

    while (count < position) {
      current_node = current_node.next;
      count++;
    }
    return current_node;
  }

  // with update() method, find specific data and update!
  update(position, data) {
    let foundNode = this.get(position);
    if (!foundNode) return false;

    foundNode.data = data;
    return true;
  }
}

const list = new LinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);
list.pop();
list.shift();
list.unshift(5);

function output() {
  document.getElementById("json").textContent = JSON.stringify(list, 3, 5);
}
output();
console.log(list);

// put middle in doubly linked list
