function bfs(node) {
  if (node == null) return
  let set = new Set()
  let arr = new Array()
  set.add(node)
  arr.push(node)
  while (arr.length != 0) {
    let cur = arr.shift()
    // 第10行可换成具体的操作
    console.log(cur.value)
    for (let i of cur.next) {
      if (!set.has(i)) {
        arr.push(i)
        set.add(i)
      }
    }
  }
}
