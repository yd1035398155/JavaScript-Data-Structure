//宽度优先遍历的基础上
//1.若某节点右子树存在而左子树不存在,返回false
//2.条件1满足的情况下,若左右孩子不双全,则接下来的节点全为叶节点
function isCBT(root) {
  if (root === null) return true
  let arr = []
  let l = null
  let r = null
  // 条件2的开关
  let flag = false
  arr.push(root)
  while (arr.length != 0) {
    let cur = arr.shift()
    l = cur.left
    r = cur.right
    // 条件1和条件2
    if ((l == null && r != null) || (flag && (l != null || r != null))) return false
    if (l != null) arr.push(l)
    if (r != null) arr.push(r)
    if (l == null || r == null) flag = true
  }
  return true
}
