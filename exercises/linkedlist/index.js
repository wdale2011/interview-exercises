// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data);
    this.tail = this.head;
    this.size = 1;
  }

  size() {
    return this.size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  clear() {
    // Deconstruct node => to-do
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  removeFirst() {
    this.head = this.head.next;
    this.size--;
  }

  removeLast() {
    if (head === tail) {
      this.clear();
    }

    // TODO: EDGE CASES

    let newTail = this.head;
    while (newTail.next !== this.tail) {
      newTail = this.next;
    }

    this.tail = newTail;
    this.size--;
  }

  insertLast(data) {
    let newLast = new Node(data);

    this.tail.next = newLast;
    this.tail = nextLast;
    this.size++;
  }

  getAt(index) {
    if (index > size) return null;

    let pointer = this.head;
    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }
    return pointer;
  }

  removeAt(index) {
    if (index > size) return null;

    let pointer = this.head;
    for (let i = 0; i < index - 1; i++) {
      pointer = pointer.next;
    }
    pointer.next = pointer.next.next;
    return pointer;
  }
}

module.exports = { Node, LinkedList };
