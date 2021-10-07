// 一条路走到黑
function DFS(node) {
  if (node === null) return
  let set = new Set()
  let arr = new Array()
  set.add(node)
  arr.push(node)
  console.log(node)
  while (arr.length != 0) {
    let cur = arr.pop()
    for (let i of cur.next) {
      if (!set.has(i)) {
        set.add(i)
        arr.push(cur)
        arr.push(i)
        console.log(i)
        break
      }
    }
  }
}
