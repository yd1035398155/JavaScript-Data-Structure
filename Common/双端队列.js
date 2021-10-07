//滑动窗口的最大值问题 可用双端队列结构
class WindowMax {
  //（L,R] 左开右闭
  //左->右  大->小
  constructor(a) {
    this.arr = a
    this.L = -1
    this.R = 0
    this.qmax = new Array()
  }
  addNumFromRight() {
    if (this.R == this.arr.length) return
    while (this.qmax.length != 0 && this.qmax[this.qmax.length - 1] < arr[this.R]) {
      this.qmax.pop()
    }
    this.qmax.push(R)
    this.R++
  }
  removeNumFromLeft() {
    if (this.L > this.R - 1) {
      return
    }
    this.L++
    if (this.qmax[0] == this.L) {
      this.qmax.shift()
    }
  }
  getMax() {
    if (this.qmax.length != 0) return this.qmax[this.qmax.length - 1]
    return null
  }
}
// getMaxWindow([4, 3, 5, 4, 3, 3, 6, 7], 3)
// res = [5, 5, 5, 4, 6, 7]
function getMaxWindow(arr, w) {
  if (arr.length < w || arr === null || w < 1) {
    return null
  }
  let qmax = []
  let res = []
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    // 更新最大值下标
    while (qmax.length != 0 && arr[qmax[qmax.length - 1]] <= arr[i]) {
      qmax.pop()
    }
    qmax.push(i)
    // 更新L指针,即过期信息,这里L=i-w,不包括该位置,
    if (i - w === qmax[0]) {
      qmax.shift()
    }
    // 前两步不更新,看看怎么设置的条件
    if (i >= w - 1) {
      res[index++] = arr[qmax[0]]
    }
  }
  return res
}
