// 画出所有节点,依次将权重从小到大的边连接,每次判断新加入的边会不会产生环
// 问题关键在于环的判断
// 准备一个哈希表,将节点和集合对应起来,开始每个节点就是一个集合,随后集合开始合并

class UnionFind {
  constructor() {
    this.map = new Map()
  }
  initMap(nodes) {
    for (let i of nodes) {
      let set = new Array()
      set.push(i)
      this.map.set(i, set)
    }
  }
  isSameSet(from, to) {
    let setfrom = this.map.get(from)
    let setto = this.map.get(to)
    return a == b
  }
  union(from, to) {
    let setfrom = this.map.get(from)
    let setto = this.map.get(to)
    for (let i of setto) {
      setfrom.push(i)
      this.map.set(i, setfrom)
    }
  }
}
class PriorityQueue {
  constructor(func) {
    this.arr = new Array()
    this.func = func
  }
  pop() {
    return this.arr.pop()
  }
  push(arg) {
    this.arr.push(arg)
    this.arr.sort(this.func)
  }
  isEmpty() {
    return this.arr.length === 0
  }
}
function compare(e1, e2) {
  return e2.weight - e1.weight
}
function kruscalMST(graph) {
  let unionfind = new UnionFind()
  unionfind.initMap(graph.nodes.values())
  // 按照权重从小到大弹出
  let priorityQueue = new PriorityQueue(compare)
  for (let edge of graph.edges) {
    priorityQueue.push(edge)
  }
  let res = new Set()
  while (priorityQueue.isEmpty()) {
    let Edge = priorityQueue.pop()
    if (!unionfind.isSameSet(Edge.from, Edge.to)) {
      res.add(Edge)
      unionfind.union(Edge.from, Edge.to)
    }
  }
  return res
}
function primMST(graph) {
  // 解锁的边进入小根堆(队)
  let priorityQueue = new PriorityQueue(compare)
  let set = new Set()
  let res = new Set()
  //for考虑了森林的情况,若不是森林则可以不需要for
  for (let node of graph.nodes.values()) {
    //node是开始点
    if (!set.has(node)) {
      set.add(node)
      for (let Edge of node.edges) {
        //由一个点,解锁所有相邻边
        priorityQueue.push(Edge)
      }
      while (!priorityQueue.isEmpty()) {
        let Edge = priorityQueue.pop() //弹出解锁边中权重最小的边
        let toNode = Edge.to //一个可能的新点
        //不含有的时候,就是新点
        if (!set.has(toNode)) {
          set.add(toNode)
          res.add(Edge)
          for (let nextEdge of toNode.edges) {
            priorityQueue.push(nextEdge)
          }
        }
      }
    }
  }
  return res
}

export { UnionFind, PriorityQueue, compare }
