import express from "express";
const l_list = express.Router();

// Node class to represent each element in the linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Linked list class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Method to add an element at the beginning of the list
  insertAtBeginning(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  // Method to add an element at the end of the list
  insertAtEnd(data) {
    const node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Method to insert an element at a given index
  insertAtIndex(data, index) {
    if (index > 0 && index > this.size) {
      return false;
    }
    if (index === 0) {
      this.insertAtBeginning(data);
      return true;
    }
    const node = new Node(data);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
    return true;
  }

  // Method to get the value of a node at a given index
  getAtIndex(index) {
    if (index > 0 && index >= this.size) {
      return null;
    }
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // Method to remove an element at a given index
  removeFromIndex(index) {
    if (index > 0 && index >= this.size) {
      return null;
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
    return current.data;
  }

  // Method to remove the first occurrence of an element with the given value
  removeElement(data) {
    let current = this.head;
    let previous = null;
    while (current !== null) {
      if (current.data === data) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return current.data;
      }
      previous = current;
      current = current.next;
    }
    return null;
  }

  // Method to print the linked list
  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    console.log(str);
  }

  // Method to get the size of the linked list
  getSize() {
    return this.size;
  }

  // Method to check if the linked list is empty
  isEmpty() {
    return this.size === 0;
  }
}

const data = null;
lists.insertAtBeginning(10);
lists.insertAtBeginning(20);
lists.insertAtBeginning(30);

l_list.get("/l_lists", (req, res) => {
  res.json({ data });
});

export default l_list;
