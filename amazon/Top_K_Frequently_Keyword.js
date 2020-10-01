class PriorityQueue {
  constructor(map) {
    this.collection = [];
    this.map = map;
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

function topKFrequentlyKeyword(k, keywords, reviews) {
  const map = new Map;

  for (let keyword of keywords) {
    map.set(keyword, 0);
  }

  for (let review of reviews) {
    const words = review.split(" ");
    const set = new Set;

    for (let word of words) {
      word = word.toLowerCase();

      if (map.has(word) && !set.has(word)) {
        map.set(word, map.get(word) + 1);
      }
    }
  }

  const pq = new PriorityQueue(map);

  for (let key of map.keys()) {
    pq.enqueue(key);
  }
  // console.log(pq)
  const res = [];
  while (!pq.isEmpty() && k > 0) {
    res.push(pq.dequeue());
    k--;
  }

  return res;
}



const keywords1 = ["anacell", "cetracular", "betacellular"];
const reviews1 = [
  "Anacell provides the best services in the city",
  "betacellular has awesome services",
  "Best services provided by anacell, everyone should use anacell",
];

console.log(topKFrequentlyKeyword(2, keywords1, reviews1)); //["anacell", "betacellular"]

const keyword2 = ["anacell", "betacellular", "cetracular", "deltacellular", "eurocell"];
const reviews2 = [
  "I love anacell Best services; Best services provided by anacell",
  "betacellular has great services",
  "deltacellular provides much better services than betacellular",
  "cetracular is worse than anacell",
  "Betacellular is better than deltacellular.",
];

console.log(topKFrequentlyKeyword(2, keyword2, reviews2)); //["betacellular", "anacell"]