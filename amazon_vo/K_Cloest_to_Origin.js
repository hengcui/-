class MaxHeap {
  constructor(k) {
    this.heap = [,];
    this.size = k;
  }

  swap(i, j) {
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }

  add(val) {
    const [x, y, dist] = val;

    if (this.heap.length > this.size) {
      // console.log(val)
      if (dist >= this.top()[2]) return;

      this.heap[1] = val;
      this.heapify(1);
    } else {
      this.heap.push(val);
      let i = this.heap.length - 1;
      // console.log(this.heap, val)
      while (Math.floor(i / 2) > 0 && this.heap[Math.floor(i / 2)][2] < this.heap[i][2]) {
        this.swap(i, Math.floor(i / 2));
        i = Math.floor(i / 2);
      }
    }
  }

  poll() {
    if (this.heap.length <= 1) return null;
    if (this.heap.length === 2) {
      return this.heap.pop();
    } 

    this.swap(1, this.heap.length - 1);
    const val = this.heap.pop();

    this.heapify(1);

    return val;
  }

  heapify(i) {
    while(true) {
      let index = i;

      if (i * 2 < this.heap.length && this.heap[i * 2][2] > this.heap[i][2]) {
        index = i * 2;
      }

      if (i * 2 + 1 < this.heap.length && this.heap[i * 2 + 1][2] > this.heap[index][2]) {
        index = i * 2 + 1;
      }

      if (i !== index) {
        this.swap(i, index);
        i = index;
      } else {
        break;
      }
    }
  }

  top() {
    return this.heap[1];
  }

  output() {
    this.heap.shift();

    return this.heap.map(val => [val[0], val[1]]);
  }
}

var kClosest = function(points, K) {
  const heap = new MaxHeap(K);

  for (let [x, y] of points) {
    const dist = Math.sqrt(x ** 2 + y ** 2);
    heap.add([x, y, dist]);
  }
  // console.log(heap.heap)
  return heap.output();
};