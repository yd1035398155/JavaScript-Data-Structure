//分成两种情况
// 1.p1和p2互为祖先
// 2.p1和p2不互为祖先
function lowestCommonAncestor(root, p1, p2) {
  if (root === null || root === p1 || root === p2) return root
  let l = lowestCommonAncestor(root.left, p1, p2)
  let r = lowestCommonAncestor(root.right, p1, p2)
  if (l != null && r != null) return root
  return l != null ? l : r
}
