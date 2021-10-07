function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
// 冒泡排序 O(N^2) 稳定
function bubbleSort(arr) {
  // 第一层控制第二层遍历的长度
  for (let n = arr.length - 1; n > 0; n--) {
    // 第二层遍历时,交换两值
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      }
    }
  }
}
// 插入排序 O(N^2) 稳定
function insertSort(arr) {
  for (let n = 1; n < arr.length; n++) {
    for (let i = n - 1; i >= 0 && arr[i] > arr[i + 1]; i--) {
      let temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
    }
  }
}
// 希尔排序 O(N^2) 不稳定
function shellSort(arr) {
  if (arr === null || arr.length < 2) return
  let len = arr.length
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      for (let j = i - gap; j >= 0 && arr[j] > arr[j + gap]; j -= gap) {
        swap(arr, j, j + gap)
      }
    }
  }
}
//选择排序
function selectSort(arr) {
  let index, max
  // 要有n-1趟
  for (let n = arr.length - 1; n > 0; n--) {
    index = 0
    max = arr[0]
    // 每趟更新下标和最大值
    for (let i = 0; i <= n; i++) {
      if (arr[i] > max) {
        index = i
        max = arr[i]
      }
    }
    // console.log("index:" + index, "n:" + n);
    // 将最大值交换到末尾
    let temp = arr[n]
    arr[n] = arr[index]
    arr[index] = temp
  }
}
// 归并排序 **********
function mergeSort(arr) {
  if (arr.length < 2 || arr == null) {
    return
  }
  process(arr, 0, arr.length - 1)
}
function process(arr, L, R) {
  if (L == R) {
    return
  }
  let middle = L + ((R - L) >> 1)
  // console.log("L:" + L, "middle:" + middle, "R:" + R)
  process(arr, L, middle)
  process(arr, middle + 1, R)
  merge(arr, L, middle, R)
}
function merge(arr, L, M, R) {
  let help = new Array(R - L + 1)
  // 左边数组指针
  let i = L
  // 右边数组指针
  let j = M + 1
  // help临时指针
  let t = 0
  while (i <= M && j <= R) {
    help[t++] = arr[i] <= arr[j] ? arr[i++] : arr[j++]
  }
  while (i <= M) {
    help[t++] = arr[i++]
  }
  while (j <= R) {
    help[t++] = arr[j++]
  }
  for (i = 0; i < help.length; i++) {
    arr[L + i] = help[i]
  }
}
// 快排
function quickSort(arr, L, R) {
  if (L < R) {
    swap(arr, L + Math.floor(Math.random() * (R - L + 1)), R)
    let p = partition(arr, L, R)
    quickSort(arr, L, p[0] - 1)
    quickSort(arr, p[1] + 1, R)
  }
}
// 处理arr[1...r]的函数
// 默认以arr[r]做划分,分成三段, <arr[r] ||  === arr[r] ||  >arr
// 返回等于区域的左边界和右边界
function partition(arr, L, R) {
  let start = L //左边界
  let end = R //右边界
  while (L < end) {
    if (arr[L] < arr[R]) {
      swap(arr, start++, L++)
    } else if (arr[L] > arr[R]) {
      swap(arr, --end, L)
    } else {
      L++
    }
  }
  swap(arr, end, R)
  return [start, end]
}

function heapSort(arr) {
  if (arr === null || arr.length < 2) return
  // 1.将数组变成大根堆,O(Nlog N)
  for (let i = 0; i < arr.length; i++) {
    // O(N)
    heapInsert(arr, i) //O(log N)
  }
  // 若只进行大根堆
  /*
	for(let i = arr.length-1;i<=0;i--){
		heapify(arr,i,arr.length)
	}
	*/
  // 2.将尾节点与根节点交换,此时最大值在数组末尾固定,--heapsize
  let heapSize = arr.length
  swap(arr, 0, --heapSize)
  // 3.从0开始转换为大根堆,并继续交换跟节点和尾节点
  while (heapSize > 0) {
    heapify(arr, 0, heapSize) //O(log N)
    swap(arr, 0, --heapSize) //O(1)
  }
}
// 从index向上
function heapInsert(arr, index) {
  // 当index节点大于父节点时,向上交换
  while (index != 0 && arr[index] > arr[Math.floor((index - 1) / 2)]) {
    swap(arr, index, Math.floor((index - 1) / 2))
    index = Math.floor((index - 1) / 2)
  }
}
// 从index向下
function heapify(arr, index, heapSize) {
  let left = index * 2 + 1 //左孩子的下标
  // 当左孩子存在时
  while (left < heapSize) {
    // 两个孩子中,谁的值大,把下标赋值给largest
    let largest = left + 1 < heapSize && arr[left] < arr[left + 1] ? left + 1 : left
    // 父与子中,谁的值大,把下标赋值给largest
    largest = arr[index] > arr[largest] ? index : largest
    if (largest === index) {
      break
    }
    swap(arr, index, largest)
    index = largest
    left = index * 2 + 1
  }
}
//  计数排序 注意:不能对小数进行排序,且空间浪费大
function countSort(arr) {
  if (arr === null || arr.length < 2) return
  // 1.求最大最小值
  let len = arr.length
  let max = arr[0]
  let min = arr[0]
  arr.forEach((element) => {
    if (element > max) max = element
    if (element < min) min = element
  })
  // 2.建立一个辅助数组help, help = new Array(max-min+1).fill(0)
  let help = new Array(max - min + 1).fill(0)
  // 3.遍历原始数组,help[arr[i]-min]++
  for (let i = 0; i < arr.length; i++) {
    help[arr[i] - min]++
  }
  // 4.将help的累加数导入到arr中
  let p1 = 0 //p1为指向原数组的指针
  for (i = 0; i < max - min + 1; i++) {
    //i为指向辅助数组的指针
    while (help[i] != 0) {
      arr[p1++] = i + min
      help[i] -= 1
    }
  }
}
function bucketSort(arr) {
  if (arr === null || arr.length < 2) return
}
function radixSort(arr) {
  if (arr === null || arr.length < 2) return
  RadixSort(arr, 0, arr.length - 1, maxBits(arr))
}
function RadixSort(arr, L, R) {}
function maxBits(arr) {}
