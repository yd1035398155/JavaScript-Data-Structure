function getNextArray(str) {
  if (str.length == 1) {
    return [-1]
  }
  let next = []
  next[0] = -1
  next[1] = 0
  let i = 2 //next数组开始位置
  let cn = 0 //与i-1比较的位置,也是i-1的next值
  while (i < str.length) {
    // 当i-1与前缀的最后一位相等时,i的最长前缀为i-1最长前缀+1
    if (str[i - 1] === str[cn]) {
      next[i++] = ++cn
    } else if (cn > 0) {
      cn = next[cn]
    } else {
      next[i++] = 0
    }
  }
  return next
}
function KMP(str1, str2) {
  if (str1.length < str2.length) {
    return -1
  }
  let i1 = 0
  let i2 = 0
  let next = getNextArray(str2)
  while (i1 < str1.length && i2 < str2.length) {
    if (str1[i1] == str2[i2]) {
      i1++
      i2++
    } else if (i2 == 0) {
      i++
    } else {
      i2 = next[i2]
    }
  }
  return i2 == str.length ? i1 - i2 : -1
}
