class PriorityQueue {
  constructor(size) {
    this.collection = [];
  }

  largeThan(i, j) {
    return this.map.get(i) > this.map.get(j) || (this.map.get(i) === this.map.get(j) && i > j);
  }

  enqueue(element) {
    let added = false;

    for (let i = 0;i < this.collection.length;i++) {
      if (this.largeThan(element, this.collection[i])) {
        this.collection.splice(i, 0, element);
        added = true;
        break;
      }
    }

    if (!added) this.collection.push(element);
  }

  dequeue() {
    return this.collection.shift();
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}
