class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert (word) {
    let p = this.root;

    for (let char of word) {
      if (!p.children.hasOwnProperty(char)) {
        p.children[char] = new TrieNode();
      }

      p = p.children[char];
    }

    p.isEnd = true;
  }

  find (word) {
    let p = this.root;

    for (let char of word) {
      if (!p.children.hasOwnProperty(char)) {
        return false;
      }

      p = p.children[char];
    }

    return p.isEnd;
  }

  startsWith(word) {
    let p = this.root;

    for (let char of word) {
      if (!p.children.hasOwnProperty(char)) {
        return false;
      }

      p = p.children[char];
    }

    return true;
  }
}

var findWords = function(board, words) {
  if (!words.length || !board || !board.length || !board[0].length) return [];
  const trie = new Trie();
  //intialize trie tree
  for (let word of words) {
    trie.insert(word);
  }

  const m = board.length, n = board[0].length;
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  const visited = new Array(m).fill(null).map(val => new Array(n).fill(false));
  const res = [];

  for (let i = 0;i < m;i++) {
    for (let j = 0;j < n;j++) {
      dfs(board, i, j, board[i][j], visited);
    }
  }

  function inArea(i, j) {
    return i >= 0 && j >= 0 && i < m && j < n;
  }
  function dfs(board, i, j, prefix, visited) {
    if (!trie.startsWith(prefix)) return;

    if (trie.find(prefix) && !res.includes(prefix)) {
      res.push(prefix);
    }

    visited[i][j] = true;

    for (let k = 0;k < 4;k++) {
      const new_x = i + dirs[k][0];
      const new_y = j + dirs[k][1];

      if (inArea(new_x, new_y) && !visited[new_x][new_y]) {
        dfs(board, new_x, new_y, prefix + board[new_x][new_y], visited);
      }
    }

    visited[i][j] = false;
  }

  return res.sort();
};