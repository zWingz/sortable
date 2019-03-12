/**
 * 插入排序
 */
const { swap, assert } = require('./helper')

function sort(arr) {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    let preIndex = i - 1
    const current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}

function sort2(arr) {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    let j = i
    // 类似冒泡, 逐步冒泡到对应的位置
    while (j >= 0 && arr[j - 1] > arr[j]) {
      swap(arr, j - 1, j)
      j --
    }
  }
  return arr
}
assert(sort)
assert(sort2)
