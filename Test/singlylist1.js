// Define a class for a singly linked list node
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null; // Pointer to the next node in the list
  }
}

// Define a class for a singly linked list
class LinkedList {
  constructor() {
    this.head = null; // Pointer to the first node in the list
    this.tail = null; // Pointer to the last node in the list
    this.length = 0; // Keep track of the number of nodes in the list
  }

  // Add a new node to the end of the list
  append(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      // If the list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Add a new node to the beginning of the list
  prepend(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      // If the list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  // Insert a new node at a specific index
  insert(value, index) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of range");
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.length) {
      this.append(value);
      return;
    }

    const newNode = new ListNode(value);
    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    previous.next = newNode;
    newNode.next = current;

    this.length++;
  }

  // Remove a node at a specific index
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range");
    }

    if (index === 0) {
      this.head = this.head.next;
      this.length--;

      if (this.length === 0) {
        this.tail = null;
      }

      return;
    }

    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    previous.next = current.next;

    if (index === this.length - 1) {
      this.tail = previous;
    }

    this.length--;
  }

  // Convert the list to an array
  toArray() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}
