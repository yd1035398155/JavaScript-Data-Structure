// 弹出栈底
function f(stack) {
  let result = stack.pop()
  if (stack.length === 0) return result
  else {
    let last = f(stack)
    stack.push(result)
    return last
  }
}
function reverse(stack) {
  if (stack.length === 0) return
  else {
    let res = f(stack)
    let last = reverse(stack)
    stack.push(res)
  }
}
function main() {
  let arr = [1, 2, 3]
  reverse(arr)
  console.log(arr)
}
main()
