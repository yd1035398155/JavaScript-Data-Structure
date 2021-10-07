class Graph {
  //  key:点编号   value:实际的点
  nodes = new Map()
  edges = new Set()
}
class Node {
  constructor(value) {
    this.value = value
  }
  // 入度
  in = 0
  // 出度
  out = 0
  //由此节点发散的直接邻居
  next = new Array()
  //此节点发散出去的边
  edges = new Array()
}
class Edge {
  // int:weight Node:from,to
  constructor(weight, from, to) {
    this.weight = weight
    this.from = from
    this.to = to
  }
}
function createGragh(matrix) {
  let graph = new Graph()
  for (let i = 0; i < matrix.length; i++) {
    let from = matrix[i][0]
    let to = matrix[i][1]
    let weight = matrix[i][2]
    // 创建节点
    if (!graph.nodes.has(from)) {
      graph.nodes.set(from, new Node(from))
    }
    if (!graph.nodes.has(to)) {
      graph.nodes.set(to, new Node(to))
    }
    // 初始化节点
    let fromNode = graph.nodes.get(from)
    let toNode = graph.nodes.get(to)
    // 创建边
    let newEdge = new Edge(weight, from, to)
    // 添加邻居节点
    fromNode.next.push(toNode)
    // 更新出度入度
    fromNode.out++
    toNode.in++
    // 把边添加到节点和图中
    fromNode.edges.push(newEdge)
    graph.edges.push(newEdge)
  }
}
export { Graph, Node, Edge, createGragh }
