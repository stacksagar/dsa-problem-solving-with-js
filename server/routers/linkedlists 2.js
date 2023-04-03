import express from "express";
const l_list = express.Router();

// Node class to represent each element in the linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  initialData(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.size = 1;
      return true;
    }
  }

  append(data) {
    let node = new Node(data);

    if (this.initialData(node)) return;

    this.tail.next = node;
    this.tail = node;
    this.size++;
  }

  prepend(data) {
    const node = new Node(data);

    if (this.initialData(node)) return;

    node.next = this.head;
    this.head = node;

    this.size++;
  }

  insertAtPosition(data, position) {
    if (position < 0 || position > this.size)
      throw new Error("Position out of range!");

    if (position === 0) return this.prepend(data);

    if (position === this.size) return this.append(data);

    const node = new Node(data);
    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    while (currentIndex < position) {
      previous = current;
      current = current.next;
    }
  }
}

const l_lists = new LinkedList();
l_lists.append(20);
l_lists.append(30);

l_lists.prepend(5);

l_list.get("/l_lists", (req, res) => {
  res.json({ l_lists });
});

export default l_list;
