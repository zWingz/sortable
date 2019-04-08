/**
 * 归并排序
 */

const { assert } = require('./helper')

function sort(arr) {
  return merge1(arr, 0, arr.length - 1)
}

// 需要指定数组的left和right边界
// 在原数组上进行比较
function merge1(arr, left, right) {
  if (left >= right) {
    return [arr[left]]
  }
  const mid = Math.floor((right - left) / 2 + left)
  let leftArr = merge1(arr, left, mid)
  let rightArr = merge1(arr, mid + 1, right)
  let ret = []
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      ret.push(leftArr.shift())
    } else {
      ret.push(rightArr.shift())
    }
  }
  return ret.concat(leftArr).concat(rightArr)
}

// 通过slice来分割数组
// 在slice数组中进行比较
// 不需要left和right边界
function merge2(arr) {
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = merge2(arr.slice(0, mid))
  const right = merge2(arr.slice(mid))
  let ret = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      ret.push(left.shift())
    } else {
      ret.push(right.shift())
    }
  }
  return ret.concat(left).concat(right)
}

assert(sort)
assert(merge2)

module.exports = {
  merge1: sort,
  merge2
}
