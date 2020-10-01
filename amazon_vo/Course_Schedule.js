/**
 * 题目可以变换为， 检查是否是一个有向无环图
 * 解法是拓扑排序， 当拓扑排序后依然存在入度不为0 的点时， 说明有环的存在
 * 拓扑排序的解法：
 * 1. 求出每个点的入度值(indegree)(通向点的edge个数), 将入度值为0 的点推入栈
 * 2. 当栈不为空时， 出栈， 删除出栈的点(其实是模拟删除的过程， 将所有连接的点入度 -1 即可)
 * 3. 如果2 过程之后， 入栈入度值为0的点
 */
var canFinish = function(numCourses, prerequisites) {
  const indegrees = new Array(numCourses).fill(0);
  const adjacents = new Array(numCourses).fill(null).map(val => []);

  for (let [base, pre] of prerequisites) {
    indegrees[base]++;
    adjacents[pre].push(base);
  }
  // console.log(indegrees)
  const queue = [];
 
  for (let i = 0;i < indegrees.length;i++) {
    if (indegrees[i] === 0) queue.push(i);
  }
  //  console.log(queue)
  while (queue.length) {
    const front = queue.shift();
    numCourses--;

    for (let adjacent of adjacents[front]) {
      indegrees[adjacent]--;
      if (indegrees[adjacent] === 0) queue.push(adjacent);
    }
  }

  return numCourses === 0;
};

/**
 * Course_Schedule_2
 */

var findOrder = function(numCourses, prerequisites) {
  let indegrees = new Array(numCourses).fill(0);
  let map = new Map();

  for (let [base, prev] of prerequisites) {
    indegrees[base]++;
    if (map.has(prev)) {
      map.get(prev).push(base);
    } else {
      map.set(prev, [base]);
    }
  }

  const queue = [];
  const res = [];

  for (let i = 0;i < numCourses;i++) {
    if (indegrees[i] === 0) {
      queue.push(i);
      res.push(i);
    }
  }

  while (queue.length) {
    const top = queue.shift();
    const neighbours = map.has(top) ? map.get(top) : [];
    
    for (let i = 0;i < neighbours.length;i++) {
      indegrees[neighbours[i]]--;

      if (indegrees[neighbours[i]] === 0) {
        queue.push(neighbours[i]);
        res.push(neighbours[i]);
      }
    }
  }

  return res.length === numCourses ? res : [];
};