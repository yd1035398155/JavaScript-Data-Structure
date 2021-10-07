function treeMaxWidth(tree) {
  if (tree == null) return 0
  let arr = []
  // 当前层数和当前层数的节点数
  let curLevel = 1
  let curLevelNodes = 0
  let maxWidth = -1
  let map = {}
  map[tree] = 1
  arr.push(tree)
  while (arr.length != 0) {
    let cur = arr.shift()
    let curNodeLevel = map[cur]
    // 当前节点是否还在当层
    if (curNodeLevel == curLevel) {
      curLevelNodes++
    } else {
      // 若进入下一层,则刷新最大宽度,进入下一层,将节点数重置为1
      maxWidth = Math.max(maxWidth, curLevelNodes)
      curLevel++
      curLevelNodes = 1
    }
    // 分别将节点的左右子树加入队列
    if (tree.left != null) {
      arr.push(tree.left)
      map[tree.left] = curLevel + 1
    }
    if (tree.right != null) {
      arr.push(tree.right)
      map[tree.right] = curLevel + 1
    }
  }
  // 若为满二叉树,到最后一行后不会进入下一行
  maxWidth = Math.max(maxWidth, curLevelNodes)
  return maxWidth
}
