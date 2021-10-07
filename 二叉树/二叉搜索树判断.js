// 节点的比左子树大,比右子树小
let preValue = Number.MIN_VALUE
// 中序遍历
function checkBST(root) {
  if (root === null) return true
  let isLeftBST = checkBST(root.left)
  // 若左子树不为二叉搜索树
  if (!isLeftBST) {
    return false
  }
  if (root.val <= preValue) {
    return false
  } else {
    preValue = root.val
  }
  return checkBST(root.right)
}
// 栈结构,一直压左子树,直到为空
function checkBST2(root) {
  if (root == null) return []
  let stack = []
  while (stack.length != 0 || root != null) {
    if (root != null) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      if (root.val <= preValue) {
        return false
      } else {
        preValue = root.val
      }
      root = root.right
    }
  }
  return true
}

//利用二叉树题目套路求解
function checkBST3(root) {
  return process(root).isBST

  class info {
    constructor(isBST, max, min) {
      this.isBST = isBST
      this.max = max
      this.min = min
    }
  }
  function process(root) {
    if (root === null) {
      return null
    }
    let l = process(root.left)
    let r = process(root.right)

    let min = root.val
    let max = root.val
    if (root.left != null) {
      min = Math.min(min, l.min)
      max = Math.max(min, l.max)
    }
    if (root.right != null) {
      min = Math.min(min, r.min)
      max = Math.max(min, r.max)
    }
    let isBST = true
    if (l != null && (!l.isBST || l.max >= root.val)) {
      isBST = false
    }
    if (r != null && (!r.isBST || r.min >= root.val)) {
      isBST = false
    }
    return new info(isBST, max, min)
  }
}
