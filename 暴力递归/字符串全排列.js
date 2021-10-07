function main(str) {
  let words = str.split("")
  let res = []
  process(0, words, res)
  console.log(res)
}
// i-1之前的位置全固定,i之后可任意交换,words固定,res为结果
function process(i, words, res) {
  if (i === words.length) {
    res.push(words.join(""))
    return
  }
  for (let j = i; j < words.length; j++) {
    swap(words, i, j)
    process(i + 1, words, res)
    swap(words, i, j)
  }
}
function swap(words, i, j) {
  let temp = words[i]
  words[i] = words[j]
  words[j] = temp
}
main("abcd")
