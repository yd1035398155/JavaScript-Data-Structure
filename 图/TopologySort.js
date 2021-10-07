function topologySort(graph) {
  // key:节点 value:入度
  let map = new Map()
  // 入度为零的节点
  let arr = new Array()
  // 先将图中所有节点加入到map中,入度为0的加入到arr中
  for (let i of graph.nodes.values()) {
    map.set(i, i.value)
    if (i.in === 0) {
      arr.push(i)
    }
  }
  //拓扑排序的结果,依次加入res中
  let res = new Array()
  while (arr.length != 0) {
    let cur = arr.shift()
    res.push(cur)

    for (i of cur.next) {
      // 更新入度
      map.set(i, map.get(i) - 1)
      // 更新入度为0的队列
      if (map.get(i) === 0) arr.push(i)
    }
  }
  return res
}
