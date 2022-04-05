/*
小虎去附近的商店买苹果，奸诈的商贩使用了捆绑交易，只提供6个每袋和8个
每袋的包装包装不可拆分.可是小虎现在只想购买恰好n个苹果，小虎想购买尽
量少的袋数方便携带.如果不能购买恰好n个苹果，小虎将不会购买.输入一个
整数n，表示小虎想购买的个苹果，返回最小使用多少袋子.如果无论如何都不
能正好装下，返回-1.
*/
// function minBag(n) {
//   if (n % 2 != 0) return -1
//   else {
//     let sum = 0
//     // i 表示买多少8个每袋的
//     for (let i = Math.floor(n / 8); i >= 0; i--) {
//       let res = Math.floor((n - i * 8) / 6) //剩余的苹果用6个每袋的装,能装多少带
//       let hasMore = (n - i * 8) % 6
//       if (hasMore == 0) {
//         sum = i + res
//         return sum
//       }
//     }
//     return -1
//   }
// }

/* 优化:
1.先确定8类型的个数,在确定6类型
2.排除奇数和负数
为了引出优化3,先不排除奇数,例如107个苹果,
确定 8*13 = 104, 剩3
    8*12=96,    剩11
		8*11=88     剩19
		8*10=80     剩27
当剩余的苹果大于24时,就不需要往下试了
*/
function minBag(n) {
  if (n % 2 != 0 || n < 0) return -1

  let bag8 = Math.floor(n / 8)
  let bag6 = -1
  let rest = n - 8 * bag8
  while (rest < 24 && bag8 >= 0) {
    let restUseBag6 = minBagBase6(rest)
    if (restUseBag6 != -1) {
      bag6 = restUseBag6
      break
    }
    rest = n - 8 * --bag8
  }
  return bag6 == -1 ? -1 : bag8 + bag6
}
//如果剩余的苹果能够被6个苹果的袋子装完,返回袋子数量,否则返回-1
function minBagBase6(n) {
  return n % 6 == 0 ? n / 6 : -1
}
console.log(minBag(107))
