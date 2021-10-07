function isFullTree(root) {
  if (root === null) return true
  let res = process(root)
  return res.num == 1 << (res.height - 1)
  class returnType {
    constructor(height, num) {
      this.height = height
      this.num = num
    }
  }
  function process(root) {
    if (root === null) {
      return new returnType(0, 0)
    }
    let l = process(root.left)
    let r = process(root.right)
    let height = Math.max(l.height, r.height) + 1
    let num = l.num + r.num + 1
    return new returnType(height, num)
  }
}
