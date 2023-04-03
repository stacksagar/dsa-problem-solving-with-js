class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  insert(position, data) {
    if (position < 0 || position > this.length) {
      return false;
    }

    const node = new Node(data);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let index = 0;
      let previous = null;
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      node.next = current;
      previous.next = node;
    }
    this.length++;
    return true;
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let index = 0;
      let previous = null;
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.data;
  }

  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  remove(data) {
    const index = this.indexOf(data);
    return this.removeAt(index);
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      string += `${current.data}`;
      current = current.next;
      if (current) {
        string += " -> ";
      }
    }
    return string;
  }
}
