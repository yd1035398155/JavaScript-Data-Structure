var inorderTraversal = function (root) {
  if (root == null) return []
  let stack = []
  let num = []
  while (stack.length != 0 || root != null) {
    if (root != null) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      num.push(root.val)
      root = root.right
    }
  }
  return num
}
