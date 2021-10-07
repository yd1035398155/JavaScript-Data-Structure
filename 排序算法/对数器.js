function rightMethod(arr) {
  return arr.sort((a, b) => a - b)
}
function generateRandomArray(size, max) {
  let arr = new Array(Math.floor(size * Math.random()))
  for (let i = 0; i < arr.length; i++) {
    arr[i] = max * Math.random() - max * Math.random()
  }
  return arr
}
function isEqual(arr1, arr2) {
  if (arr1 == null && arr2 == null) return true
  if ((arr1 == null && arr2 != null) || (arr1 != null && arr2 == null)) return false
  if (arr1.length != arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return false
  }
  return true
}
