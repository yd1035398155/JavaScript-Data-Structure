//左边界
// [1,2,2,2,2,3] target =2,返回1,含义为小于2的有1个
// [1,1,3,3,3,3,3]  target = 2,返回2,小于target的有2个
function left_binary(nums, target) {
  if (nums.length === 0) return -1
  let left = 0
  let right = nums.length //注意
  //注意,left = right时结束
  while (left < right) {
    let mid = left + ((right - left) >> 1)
    if (nums[mid] === target) {
      right = mid //注意
    } else if (target < nums[mid]) {
      right = mid //注意
    } else if (nums[mid] < target) {
      left = mid + 1 //注意
    }
  }
  return left
}
// 同理右边界
// [1,2,2,2,2,3] target =2,返回4,表示有length-1 -4 个大于target
// [1,1,3,3,3,3,3]  target = 2,返回1,length-2个
function right_binary(nums, target) {
  if (nums.length === 0) return -1
  let left = 0
  let right = nums.length //注意
  //注意,left = right时结束
  while (left < right) {
    let mid = left + ((right - left) >> 1)
    if (nums[mid] === target) {
      left = mid + 1 //注意
    } else if (target < nums[mid]) {
      right = mid //注意
    } else if (nums[mid] < target) {
      left = mid + 1 //注意
    }
  }
  return left - 1
}

//https://www.cnblogs.com/kyoner/p/11080078.html
