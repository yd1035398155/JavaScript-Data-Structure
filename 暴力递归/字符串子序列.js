function main(str) {
  process(str, 0, [])
}
// 当前来到i位置,要和不要,两条路
// arr为之前的选择所形成的列表
function process(str, i, arr) {
  // 走到尽头就打印所选择的结果
  if (i === str.length) {
    if (arr.length != 0) console.log(arr.join(""))
    return
  }
  // 要当前节点
  const strInclude = arr.slice()
  strInclude.push(str[i])
  process(str, i + 1, strInclude)
  // 不要当前节点
  const strNoInclude = arr.slice()
  process(str, i + 1, strNoInclude)
}
main("abc")
