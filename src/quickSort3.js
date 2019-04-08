/**
 * 快排
 * 每次sort, 取数组最左为基准值pviot
 * 新增两个left, right数组
 * 从left+1开始遍历
 * 小于基准的push到left中
 * 其余push到right中
 * 最后对left和right进行递归
 * 然后合并[...left, pviot, ...right]
 * 
 * 此方法利用了额外的空间存储数组
 * 
 */
const { assert } = require('./helper')

function sort(arr) {
  return quickSort(arr, 0, arr.length)
}

function quickSort(arr) {
  if (!arr.length) return arr
  const pivot = arr[0]
  let leftArr = [], rightArr = []
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i]
    if (val < pivot) {
      leftArr.push(val)
    } else {
      rightArr.push(val)
    }
  }
  return quickSort(leftArr)
    .concat([pivot])
    .concat(quickSort(rightArr))
}

assert(sort)
module.exports = sort
