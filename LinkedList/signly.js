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
    return this;
  }

  // store data for first time!
  storeFirstData(data) {
    const node = new Node(data);
    this.head = node;
    this.tail = node;
    this.length = 1;
    return this;
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
    return this;
  }

  // with shift() method, remove the 'First' data from list
  shift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) return this.resetList();

    const current_head = this.head;
    this.head = current_head.next;
    this.length--;
    return this;
  }

  // with unshift() method, add new data in the 'First' Position
  unshift(data) {
    if (this.length === 0) return this.storeFirstData(data);

    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  // with get() method, find specific data from list
  get(position) {
    let index = Math.ceil(position);
    if (!index || index < 1 || index > this.length) return null;

    let count = 1;
    let current_node = this.head;

    while (count < index) {
      current_node = current_node.next;
      count++;
    }
    return current_node;
  }

  // with update() method, find specific data and update!
  update(position, data) {
    let index = Math.ceil(position);
    let foundNode = this.get(index);
    if (!foundNode) return false;

    foundNode.data = data;
    return this;
  }

  // with insert() method, add new data in specific position
  insert(position, data) {
    let index = Math.ceil(position);
    if (!index || index < 1 || index > this.length + 1) return false;
    if (index === 1) return !!this.unshift(data);
    if (index === this.length + 1) return !!this.push(data);

    const node = new Node(data);
    const prev_node = this.get(position - 1);
    const temp = prev_node.next;
    prev_node.next = node;
    node.next = temp;
    this.length++;
    return true;
  }

  // with remove() method, will remove node by given position number
  remove(position) {
    const index = Math.ceil(position);
    if (!index || index < 1 || index > this.length) return false;
    if (index === 1) return this.shift();
    if (index === this.length) return this.pop();

    const prev_node = this.get(index - 1);
    const removable_node = prev_node.next;
    prev_node.next = removable_node.next;
    this.length--;
    return removable_node;
  }

  // with reverse() method, reverse list if now 1-9 then make it to 9-1
  reverse() {
    let Node = this.head;
    this.head = this.tail;
    this.tail = Node;

    let next;
    let prev = null;
    for (let count = 0; count < this.length; count++) {
      next = Node.next;
      console.log("next ", count, next);
      Node.next = prev;
      prev = Node;
      console.log("prev ", count, prev);
      Node = next;
      console.log("Node ", count, Node);
      console.log(
        `
        `
      );
    }

    return this;
  }
}

const list = new LinkedList();

list.push(10);
list.push(20);
list.push(30);

function output() {
  document.getElementById("json").textContent = JSON.stringify(list, 9, 9);
}
output();

list.reverse();

// put middle in doubly linked list
