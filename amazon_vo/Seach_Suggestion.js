/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
class PriorityQueue {
  constructor(size) {
    this.collection = [];
    this.size = size;
  }

  enqueue(element) {
    let added = false;

    for (let i = 0;i < this.collection.length;i++) {
      if (element < this.collection[i]) {
        this.collection.splice(i, 0, element);
        added = true;
        break;
      }
    }

    if (!added) this.collection.push(element);

    if (this.collection.length > this.size) this.collection.pop();
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
    this.pq = new PriorityQueue(3);
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode;
  }

  enqueue(word) {
    let p = this.root;

    for (let char of word) {
      if (!p.children[char]) {
        p.children[char] = new TrieNode;
      }

      p.children[char].pq.enqueue(word);
      // console.log(char, p.children[char].pq)
      p = p.children[char];
    }

    p.isEnd = true;
  }

  startWith(word) {
    let p = this.root;

    for (let char of word) {
      if (!p.children[char]) return [];

      p = p.children[char];
    }

    return p.pq.collection;
  }
}
var suggestedProducts = function(products, searchWord) {
  const trie = new Trie;

  for (let product of products) {
    trie.enqueue(product);
  }
  // console.log(trie)
  const res = [];

  for (let i = 0;i < searchWord.length;i++) {
    const prefix = searchWord.substr(0, i + 1);
    // console.log(prefix)
    res.push(trie.startWith(prefix));
  }
  // console.log(res)
  return res;
};