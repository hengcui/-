let MinHeap = function() {
  let heap = [,]
  // 堆中元素数量
  this.getSize = ()=> heap.length - 1
  // 插入
  this.add = (key) => {
      heap.push(key)
      // 获取存储位置
      let i = heap.length-1
      while (Math.floor(i/2) > 0 && heap[i] < heap[Math.floor(i/2)]) {  
          swap(heap, i, Math.floor(i/2)); // 交换 
          i = Math.floor(i/2); 
      }
  }
  // 删除堆头并返回
  this.poll = () => {
      if(heap.length > 1) {
          if(heap.length === 2) return heap.pop()
          let num = heap[1]
          heap[1] = heap.pop()
          heapify(1)
          return num
      }
      return null
  }
  // 获取堆头
  this.top = () => {
      return heap.length > 1 ? heap[1]:null
  }
  // 堆化
  let heapify = (i) => {
      let k = heap.length-1
      // 自上而下式堆化
      while(true) {
          let minIndex = i
          if(2*i <= k && heap[2*i] < heap[i]) {
              minIndex = 2*i
          }
          if(2*i+1 <= k && heap[2*i+1] < heap[minIndex]) {
              minIndex = 2*i+1
          }
          if(minIndex !== i) {
              swap(heap, i, minIndex)
              i = minIndex
          } else {
              break
          }
      }
  } 
  let swap = (arr, i, j) => {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
  }
}


let MaxHeap = function() {
  let heap = [,]
  // 堆中元素数量
  this.getSize = ()=>heap.length - 1
  // 插入大顶堆
  this.add = (key) => {
      heap.push(key)
      // 获取存储位置
      let i = heap.length-1
      while (Math.floor(i/2) > 0 && heap[i] > heap[Math.floor(i/2)]) {  
          swap(heap, i, Math.floor(i/2)); // 交换 
          i = Math.floor(i/2); 
      }
  }
  // 获取堆头
  this.top = () => {
      return heap.length > 1 ? heap[1]:null
  }
  // 删除堆头并返回
  this.poll = () => {
      if(heap.length > 1) {
          if(heap.length === 2) return heap.pop()
          let num = heap[1]
          heap[1] = heap.pop()
          heapify(1)
          return num
      }
      return null
  }
  // 堆化
  let heapify = (i) => {
      let k = heap.length-1
      // 自上而下式堆化
      while(true) {
          let maxIndex = i
          if(2*i <= k && heap[2*i] > heap[i]) {
              maxIndex = 2*i
          }
          if(2*i+1 <= k && heap[2*i+1] > heap[maxIndex]) {
              maxIndex = 2*i+1
          }
          if(maxIndex !== i) {
              swap(heap, i, maxIndex)
              i = maxIndex
          } else {
              break
          }
      }
  } 
  let swap = (arr, i, j) => {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
  }
}
/**
* initialize your data structure here.
*/
var MedianFinder = function() {
this.maxHeap = new MaxHeap();
this.minHeap = new MinHeap();
this.count = 0;
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
this.count++;

this.maxHeap.add(num);
// console.log(this.maxHeap.poll())
this.minHeap.add(this.maxHeap.poll());

if (this.count % 2 !== 0) {
  this.maxHeap.add(this.minHeap.poll());
}
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
// console.log(this.maxHeap, this.minHeap)
if (this.count % 2 === 0) {
  return (this.maxHeap.top() + this.minHeap.top()) / 2;
} else {
  return this.maxHeap.top();
}
};