//每个节点的左子树与右子树高度差不超过1
function isBalanced(root) {
  return process(root).isBalance
  class returnType {
    constructor(isBalance, height) {
      this.isBalance = isBalance
      this.height = height
    }
  }
  function process(root) {
    if (root === null) {
      return new returnType(true, 0)
    }
    let l = process(root.left)
    let r = process(root.right)
    let height = Math.max(l.height, r.height) + 1
    let isBalance = l.isBalance && r.isBalance && Math.abs(l.height - r.height) < 2
    return new returnType(isBalance, height)
  }
}
