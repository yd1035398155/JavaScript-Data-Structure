function levelOrder(root) {
  if (root != null) {
    let arr = []
    let num = []
    arr.push(root)
    while (arr.length != 0) {
      let cur = arr.shift()
      num.push(cur.val)
      if (cur.left != null) arr.push(cur.left)
      if (cur.right != null) arr.push(cur.right)
    }
    return num
  }
}
