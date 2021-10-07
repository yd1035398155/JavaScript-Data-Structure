// 前驱节点:...............前面.......
// 后继节点:中序遍历中节点的后面一个节点
/*
分两种情况: 1.该节点有右树时,后继为右树最左的孩子
					 2.没有右树时,向上查找,直到该节点为父节点的左孩子,后继为父节点(整颗树最后的一个节点后继为null)
*/
class node {
  constructor(val, left = null, right = null, parent = null) {
    this.val = val
    this.left = left
    this.right = right
    this.parent = parent
  }
}
function getSuccessorNode(root) {
  if (root === null) return root
  if (root.right != null) return getLeftMost(root.right)
  else {
    parent = root.parent
    while (parent != null && parent.left != root) {
      root = parent
      parent = root.parent
    }
    return parent
  }

  function getLeftMost(node) {
    if (node === null) return node
    while (node.left != null) {
      node = node.left
    }
    return node
  }
}
