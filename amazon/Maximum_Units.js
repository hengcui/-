class PriorityQueue {
  constructor(size) {
    this.collection = [];
    this.size = size;
  }


  enqueue(element) {
    let added = false;

    for (let i = 0;i < this.collection.length;i++) {
      if (element > this.collection[i]) {
        this.collection.splice(i, 0, element);
        added = true;
        break;
      }
    }

    if (!added) this.collection.push(element);
    if (this.collection.length > this.size) this.collection.pop();
  }

  dequeue() {
    return this.collection.shift();
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

function maximumUnits(num, boxes, unitSize, unitsPerBox, truckSize) {
  const pq = new PriorityQueue(truckSize);

  for (let i = 0;i < num;i++) {
    for (let j = 0;j < boxes[i];j++) {
      pq.enqueue(unitsPerBox[i]);
    }
  }

  return pq.collection.reduce((acc, val) => acc + val, 0);
}

console.log(maximumUnits(3, [1,2,3], 3, [3,2,1], 3));