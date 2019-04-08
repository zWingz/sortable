/**
 * 插入排序
 */
const { swap, assert } = require('./helper')

function sort1(arr) {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    // [0, i - 1] 是已排序序列
    let preIndex = i - 1
    const current = arr[i]
    // 从 i - 1 开始逐步往前面比较
    // 如果比current大, 则往后移一位
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    // 放在比current小的数后面
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
assert(sort1)
assert(sort2)
module.exports = {
  sort1,
  sort2
}
