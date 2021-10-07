class info {
  constructor(dis, h) {
    this.dis = dis
    this.h = h
  }
}
//x为头节点
function process(x) {
  if (x === null) {
    return new info(0, 0)
  }
  // 子树得到两个信息,高度和最大距离
  let L = process(x.left)
  let R = process(x.right)
  // 2种情况:1]x作为路径 2]x不作为路径
  let maxDis = Math.max(L.h + R.h + 1, Math.max(L.dis, R.dis))
  let maxH = Math.max(L.h, R.h) + 1
  return info(maxDis, maxH)
}
function main(head) {
  return process(head).dis
}
