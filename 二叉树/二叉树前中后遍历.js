function qian(root) {
  if (root == null || root.length == 0) return []
  let stack = []
  let res = []
  stack.push(root)
  while (stack.length) {
    let cur = stack.pop()
    res.push(cur.val)
    if (cur.right != null) stack.push(cur.right)
    if (cur.left != null) stack.push(cur.left)
  }
  return res
}

function hou(root) {
  if (root == null || root.length == 0) return []
  let stack = []
  let help = []
  stack.push(root)
  while (stack.length) {
    let cur = stack.pop()
    help.push(cur.val)
    if (cur.left != null) stack.push(cur.left)
    if (cur.right != null) stack.push(cur.right)
  }
  return help.reverse()
}
function zhong(root) {
  if (root == null || root.length) return []
  let stack = []
  let res = []
  while (stack.length !== 0 || root != null) {
    if (root != null) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      res.push(root.val)
      root = root.right
    }
  }
  return res
}
