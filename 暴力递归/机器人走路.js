// 一个机器人在1~N范围内活动,给出开始位置和结束位置,以及总共走动的步数,求一共有几种走法

// 步数范围  终点位置   剩余步数  当前位置
function main(N, E, S, K) {
  // 1
  // return process(N, E, S, K)
  // 优化
  let dp = []
  for (let i = 0; i <= S + 1; i++) {
    for (let j = 0; j <= N + 1; j++) {
      dp[i][j] = -1
    }
  }
  return process(N, E, S, K)
}
function process(N, E, rest, cur) {
  // 首先考虑basecase
  if (rest === 0) {
    return cur === E ? 1 : 0
  }
  // 列出所有可能
  if (cur === 1) {
    return process(N, E, rest - 1, 2)
  }
  if (cur === N) {
    return process(N, E, rest - 1, N - 1)
  }
  return process(N, E, rest - 1, cur + 1) + process(N, E, rest - 1, cur - 1)
}
// 递归过程中存在大量的重复计算,通过表结构优化
function process1(N, E, rest, cur, dp) {
  // 若之前算过,则直接调用
  if (dp[(rest, cur)] != -1) return dp[(rest, cur)]
  // 若没算过,开始计算
  if (cur === 1) {
    dp[rest][cur] = process(N, E, rest - 1, 2)
    return dp[rest][cur]
  }
  if (cur === N) {
    dp[rest][cur] = process(N, E, rest - 1, N - 1)
    return dp[rest][cur]
  }
  dp[rest][cur] = process(N, E, rest - 1, cur + 1) + process(N, E, rest - 1, cur - 1)
  return dp[rest][cur]
}
