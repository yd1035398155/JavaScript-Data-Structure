// 给定一个有序数组arr,代表数轴上从左到右有n个点arr[0],...,arr[n-1],每个点代表长度
// 给定一个整数L,代表一个长度为L的绳子,求绳子最多能覆盖其中几个数组上的点
// 数组: 2 4 8 9 12 17
// L:5
// 绳子覆盖4到9共三个点
function main() {
  let arr = [2, 4, 8, 9, 12, 17]
  let L = 5
  let res = maxPoint(arr, L)
  console.log(res)
}
main()

function maxPoint(arr, L) {
  let res = 1
  for (let i = 0; i < arr.length; i++) {
    let nearest = nearestIndex(arr, i, arr[i] - L)
    res = Math.max(res, i - nearest + 1)
  }
  return res
}
//在arr[0...R]范围上,找满足>=value的最左位置
function nearestIndex(arr, R, value) {
  let L = 0
  let index = R
  while (L <= R) {
    let mid = L + ((R - L) >> 1)
    if (arr[mid] >= value) {
      index = mid
      R = mid - 1
    } else {
      L = mid + 1
    }
  }
  return index
}
