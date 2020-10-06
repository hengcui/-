const w1 = "R8,U3,L5,D2";
const w2 = "U9,R6,D7,L4";

function nearestIntersection(w1, w2) {
  const map = new Set();
  const dirs = {
    "L": [0, -1],
    "R": [0, 1],
    "U": [1, 0],
    "D": [-1, 0]
  }

  const w1Arr = w1.split(",");
  let x = 0, y = 0;

  for (let direction of w1Arr) {
    const dir = direction[0], step = parseInt(direction.slice(1));

    for (let i = 0;i < step;i++) {
      x += dirs[dir][0];
      y += dirs[dir][1];

      map.add(`${x}, ${y}`);
    }
  }

  const w2Arr = w2.split(",");
  x = 0, y = 0;

  let minDist = Infinity, minPoint = null;

  for (let direction of w2Arr) {
    const dir = direction[0], step = parseInt(direction.slice(1));

    for (let i = 0;i < step;i++) {
      x += dirs[dir][0];
      y += dirs[dir][1];

      const point = `${x}, ${y}`;
      if (map.has(point)) {
        if (minDist > Math.abs(x) + Math.abs(y)) {
          minDist = Math.abs(x) + Math.abs(y);
          minPoint = point;
        }
      }
    }
  }

  return minPoint;
}

console.log(nearestIntersection(w1, w2))