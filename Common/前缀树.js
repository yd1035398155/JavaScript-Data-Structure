class TrieNode {
  constructor() {
    this.pass = 0
    this.end = 0
    this.next = new Array(26).fill(null)
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode()
  }
  insert(word) {
    if (word == null) return
    let arr = word.split("")
    let node = this.root
    node.pass++
    for (let i of arr) {
      //字符从左往右遍历
      let index = i.charCodeAt() - "a".charCodeAt()
      if (node.next[index] === null) {
        node.next[index] = new TrieNode()
      }
      node = node.next[index]
      node.pass++
    }
    node.end++
  }
}
