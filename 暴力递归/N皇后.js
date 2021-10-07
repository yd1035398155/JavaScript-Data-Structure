/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  // 初始化棋盘
  const arr = new Array(n)
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n).fill(".")
  }
  // 枚举所有可能
  let res = []
  const helper = (row) => {
    if (row === n) {
      let test = arr.slice()
      for (let i = 0; i < n; i++) {
        test[i] = test[i].join("")
      }
      res.push(test)
      return
    }
    for (let col = 0; col < n; col++) {
      if (isValue(row, col)) {
        arr[row][col] = "Q"
        helper(row + 1)
        arr[row][col] = "."
      }
    }
  }
  // 判断是否同行同列同斜线
  function isValue(row, col) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i][j] == "Q" && (col === j || Math.abs(row - i) === Math.abs(col - j))) return false
      }
    }
    return true
  }
  helper(0)
  return res
}
