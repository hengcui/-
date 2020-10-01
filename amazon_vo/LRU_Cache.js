class ListNode {
  constructor(key = null, val = null) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor(capacity) {
    this.head = new ListNode;
    this.tail = new ListNode;
    this.capacity = capacity;
    this.count = 0;

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;

    this.count++;
  }

  removeTail() {
    const node = this.tail.prev;
    this.tail.prev = node.prev;
    node.prev.next = this.tail;

    this.count--;
    return node;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;

    this.count--;

    return node;
  }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.list = new DoubleLinkedList(capacity);
  this.map = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map[key]) {
    this.put(key, this.map[key].val);
    return this.map[key].val;
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const node = new ListNode(key, value);

  if (this.map[key]) {
    this.list.remove(this.map[key]);
    this.list.addHead(node);

    this.map[key] = node;
  } else {
    if (this.list.count === this.capacity) {
      const deleted_node = this.list.removeTail();
      delete this.map[deleted_node.key];
    }

    this.list.addHead(node);
    this.map[key] = node;
  }
};