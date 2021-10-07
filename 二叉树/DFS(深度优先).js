//等于先序遍历
function DFS(root) {
  if (root != null) {
    let arr = []
    let num = []
    arr.push(root)
    while (arr.length != 0) {
      let cur = arr.pop()
      num.push(cur.val)
      if (cur.right != null) arr.push(cur.right)
      if (cur.left != null) arr.push(cur.left)
    }
  }
}
