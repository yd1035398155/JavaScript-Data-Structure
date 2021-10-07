class Node {
  // 定义节点
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}
function main() {
  let N = 3
  let res = process(1, N, true)
  console.log(res)
}
function process(i, N, isDown) {
  if (typeof res === "undefined") res = []
  if (i > N) return
  process(i + 1, N, true)
  res.push(isDown ? "dwon" : "up")
  process(i + 1, N, false)
  return res
}
main()
