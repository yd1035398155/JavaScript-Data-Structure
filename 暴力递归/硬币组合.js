// 给定一堆面值的硬币arr = [1,2,5,4,3,10]
// 一个目标值aim = 1000
// 求有多少种方式,每种面值的硬币有无数个
let arr = [1, 2, 5, 4, 3, 10]
let aim = 10
main(arr, aim)
function main(arr, aim) {
  // console.log(process1(arr, 0, aim))
  // console.log(process2(arr, aim))
  process2(arr, aim) === process3(arr, aim) ? console.log("S") : console.log("F")
}
//arr固定,来到i位置时,使用i和i以后的货币,共有多少种方法能组成rest
function process1(arr, i, rest) {
  // basecase
  if (i === arr.length) {
    return rest === 0 ? 1 : 0
  }
  let res = 0
  for (let zhang = 0; arr[i] * zhang <= rest; zhang++) {
    res += process1(arr, i + 1, rest - arr[i] * zhang)
  }
  return res
}
// 改为 动态规划
function process2(arr, aim) {
  if (arr === null || arr.length === 0) return 0
  let N = arr.length
  let dp = []
  for (let row = 0; row <= N; row++) {
    dp[row] = []
    for (let col = 0; col <= aim; col++) {
      dp[row][col] = 0
    }
  }
  dp[N][0] = 1
  // 从倒数第二行开始添
  for (let row = N - 1; row >= 0; row--) {
    // 从第0列开始添
    for (let rest = 0; rest <= aim; rest++) {
      let res = 0
      for (let zhang = 0; arr[row] * zhang <= rest; zhang++) {
        res += dp[row + 1][rest - arr[row] * zhang]
      }
      dp[row][rest] = res
    }
  }
  return dp[0][aim]
}
// 动态规划优化 dp[row][rest] 可依赖dp[row][rest-arr[row]]+dp[row+1][rest]
function process3(arr, aim) {
  if (arr === null || arr.length === 0) return 0
  let N = arr.length
  let dp = []
  for (let row = 0; row <= N; row++) {
    dp[row] = []
    for (let col = 0; col <= aim; col++) {
      dp[row][col] = 0
    }
  }
  dp[N][0] = 1
  // 从倒数第二行开始添
  for (let row = N - 1; row >= 0; row--) {
    // 从第0列开始添
    for (let rest = 0; rest <= aim; rest++) {
      dp[row][rest] = dp[row + 1][rest]
      if (rest - arr[row] >= 0) {
        // 当前值等于    rest的前一个偏移量+ 0张的情况
        dp[row][rest] += dp[row][rest - arr[row]]
      }
    }
  }
  return dp[0][aim]
}
