class PriorityQueue {
  constructor(origin, size) {
    this.collection = [];
    this.size = size;
    this.origin = origin;
  }

  distanceFromOrigin(dest) {
    return (dest[0] - this.origin[0]) ** 2 + (dest[1] - this.origin[1]) ** 2;
  }

  compare(dest1, dest2) {
    let diff = this.distanceFromOrigin(dest1) - this.distanceFromOrigin(dest2);

    if (diff === 0) {
      diff = dest1[0] - dest2[0];
    }

    if (diff === 0) {
      diff = dest1[1] - dest2[1];
    }

    return diff <= 0 ? true : false;
  }

  enqueue(element) {
    let added = false;
    // console.log(this.collection)
    for (let i = 0;i < this.collection.length;i++) {
      if (this.compare(element, this.collection[i])) {
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

function closestStore(points, origin, k) {
  const pq = new PriorityQueue(origin, k);

  for (let point of points) {
    pq.enqueue(point);
  }

  return pq.collection;
}

console.log(closestStore([[4,6],[4,7],[4,4],[2,5],[1,1]], [0,0], 3))