class UionFind {
  constructor(capacity) {
    this.parent = [];
    this.rank = [];

    for (let i = 0;i < capacity;i++) {
      this.parent.push(i);
      this.rank.push(1);
    }
  }

  union(a, b) {
    let p = this.find(a);
    let q = this.find(b);

    if (p === q) return;

    if (this.rank[p] > this.rank[q]) {
      this.parent[q] = p;
      this.rank[p] += this.rank[q];
    } else {
      this.parent[p] = q;
      this.rank[q] += this.rank[p];
    }
  }

  find(a) {
    if (this.parent[a] === a) {
      return a;
    } else {
      return this.parent[a] = this.find(this.parent[a]);
    }
  }

  findMaxIndex() {
    let max = 0;
    let index = 0;

    for (let i = 0;i < this.rank.length;i++) {
      if (this.rank[i] > max) {
        max = this.rank[i];
        index = i;
      }
    }

    return index;
  }
}

function itemAssociation(items) {
  const map = new Map;
  let index = 0;
  for (let [item1, item2] of items) {
    if (!map.has(item1)) map.set(item1, index++);
    if (!map.has(item2)) map.set(item2, index++);
  }

  const uf = new UionFind(index);

  for (let i = 0;i < items.length;i++){
    uf.union(map.get(items[i][0]), map.get(items[i][1]));
  }

  let maxIndex = uf.findMaxIndex();
  const res = [];
  for (let [key, value] of map) {
    if (uf.find(value) === maxIndex) {
      res.push(key);
    }
  }

  return res;
}

console.log(itemAssociation([["a", "b"], ["b", "c"], ["d", "e"],["e", "f"], ["d", "g"], ["h", "i"]]));