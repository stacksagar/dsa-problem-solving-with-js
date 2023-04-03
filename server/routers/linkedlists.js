import express from "express";

const router = express.Router();

router.get("/signly", (_req, res) => {
  class Node {
    constructor(data, next) {
      this.data = data || null;
      this.next = next || null;
    }
  }
  class LinkedList {
    constructor() {
      this.head = new Node();
      this.tail = new Node();
      this.size = 0;
    }

    initialData(node) {
      if (this.size === 0) {
        this.head = node;
        this.tail = node;
        this.size++;
        return true;
      }
    }

    append(data) {
      const node = new Node(data);

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
  }

  const list = new LinkedList();
  list.append(5);
  list.append(10);
  list.append(15);
  list.prepend(4);

  res.json({ list });
});

router.get("/doubly", (_req, res) => {
  class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }

  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    append(data) {
      const node = new Node(data);

      if (this.length === 0) {
        this.head = node;
        this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }

      this.length++;
    }

    prepend(data) {
      const node = new Node(data);

      if (this.length === 0) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }

      this.length++;
    }

    insert(index, data) {
      if (index < 0 || index > this.length) {
        throw new Error("Index out of bounds");
      }

      if (index === 0) {
        this.prepend(data);
        return;
      }

      if (index === this.length) {
        this.append(data);
        return;
      }

      const node = new Node(data);
      let current = this.head;
      let i = 0;

      while (i < index) {
        current = current.next;
        i++;
      }

      node.prev = current.prev;
      node.next = current;
      current.prev.next = node;
      current.prev = node;

      this.length++;
    }

    remove(index) {
      if (index < 0 || index >= this.length) {
        throw new Error("Index out of bounds");
      }

      let current = this.head;
      let i = 0;

      if (index === 0) {
        this.head = current.next;

        if (this.head === null) {
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (index === this.length - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      } else {
        while (i < index) {
          current = current.next;
          i++;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;
      }

      this.length--;
    }

    toArray() {
      const result = [];
      let current = this.head;

      while (current !== null) {
        result.push(current.data);
        current = current.next;
      }

      return result;
    }

    toString() {
      return this.toArray().toString();
    }
  }

  const list = new DoublyLinkedList();
  list.append(5);
  list.append(10);

  console.log(list);

  res.json({ list });
});

export default router;
