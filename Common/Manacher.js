// 求字符串中最大的回文字符串长度
//关键:回文半径数组
function manacher(s) {
  if (s.length === 0 || s === null) {
    return 0
  }
  let str = manacherString(s)
  let R = -1 //右边界
  let C = -1 //中心
  let pArr = [] //回文半径数组
  let max = Number.MIN_VALUE
  for (let i = 0; i < str.length; i++) {
    // 两种大情况:1.i在R外,直接暴力扩
    // 2.i在R内,分三种情况
    // 1>i的半径完全在R内 2>i的半径压住R 3>i的半径在R外
    // 先求出i至少回文的半径
    pArr[i] = R > i ? Math.min(R - i, pArr[C * 2 - i]) : 1
    // 开始往外扩
    while (i + pArr[i] < str.length && i - pArr[i] > -1) {
      if (str[i + pArr[i]] === str[i - pArr[i]]) {
        pArr[i]++
      } else {
        break
      }
    }
    if (R < i + pArr[i]) {
      R = i + pArr[i]
      C = i
    }
    max = Math.max(max, pArr[i])
  }
  // 半径-1为原字符串的长度
  return max - 1
}
function manacherString(s) {
  let str = []
  let index = 0
  for (let i = 0; i <= s.length * 2; i++) {
    str[i] = (i & 1) == 0 ? "#" : s[index++]
  }
  return str.join("")
}
