// 给一个数组,有两个人,每次从数组两端抽牌,求获胜者的分数
function main(arr) {
  if (arr === null || arr.length === 0) return 0
  return Math.max(first(arr, 0, arr.length - 1), later(arr, 0, arr.length - 1))
}

function later(arr, L, R) {
  if (L == R) return 0
  return Math.min(first(arr, L + 1, R), first(arr, L, R - 1))
}

function first(arr, L, R) {
  if (L == R) return arr[L]
  return Math.max(arr[L] + later(arr, L + 1, R), arr[R] + later(arr, L, R - 1))
}

console.log(main([1, 2, 100, 4]))

//改动态规划2021/8/22
function My_Dp(arr) {
  if (arr === null || arr.length === 0) return 0
  let len = arr.length
  let f = new Array(len)
  let s = new Array(len)
  for (let i = 0; i < len; i++) {
    f[i] = new Array(len)
    s[i] = new Array(len)
    f[i][i] = arr[i]
    s[i][i] = 0
  }
  let row = 0
  let col = 1
  while (col < len) {
    let i = row
    let j = col
    while (i < len && j < len) {
      f[i][j] = Math.max(arr[i] + s[i + 1][j], arr[j] + s[i][j - 1])
      s[i][j] = Math.min(f[i + 1][j], f[i][j - 1])
      i++
      j++
    }
    col++
  }
  console.log(Math.max(f[0][len - 1], s[0][len - 1]))
}
