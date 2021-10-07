// 子序列问题
function main() {
  let value = [50, 200, 180, 225, 200]
  let weight = [5, 25, 30, 45, 50]
  // 最多能装多重
  let bagWeight = 100
  // 商品的之前的重量
  let alreadyWeight = 0
  console.log("start")
  //     货物价值,货物重量,背包最大负重,已有负重,来到第i个商品
  let res = process(value, weight, bagWeight, alreadyWeight, 0)
  console.log(res)
}
//                                     i 当前位置 res之前的选择商品的下标
function process(value, weight, bagWeight, alreadyWeight, i) {
  //如果超重,则减去上次加的
  if (alreadyWeight > bagWeight) {
    return -value[i - 1]
  }
  if (i === value.length) {
    return 0
  }
  return Math.max(
    process(value, weight, bagWeight, alreadyWeight, i + 1),
    value[i] + process(value, weight, bagWeight, alreadyWeight + weight[i], i + 1)
  )
}
main()
