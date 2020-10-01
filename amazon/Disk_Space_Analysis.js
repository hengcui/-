class Deque {
  constructor() {
    this.queue = [];
  }

  front() {
    return this.queue[0];
  }
  back() {
    return this.queue[this.queue.length - 1];
  }
  push(x) {
    while (!this.isEmpty() && this.back() > x) {
      this.queue.pop();
    }

    this.queue.push(x);
  }
  pop(x) {
    if (this.front() !== x) return;
    return this.queue.shift();
  }
  min() {
    return this.front();
  }
  isEmpty() {
    return this.queue === 0;
  }
}

function minDiskSpace(numComputer, hardDiskSpace, segmentLength) {
  const dq = new Deque;
  let min = 0;

  for (let i = 0;i < hardDiskSpace.length;i++) {
    if (i < segmentLength - 1) {
      dq.push(hardDiskSpace[i]);
    } else {
      dq.push(hardDiskSpace[i]);
      min = Math.max(min, dq.min());
      dq.pop(hardDiskSpace[i - segmentLength + 1]);
    }
  }

  return min;
}

console.log(minDiskSpace(3, [8,2,4], 2))
console.log(minDiskSpace(7, [8,2,4,5,6,1,8], 3))