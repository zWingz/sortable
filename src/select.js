/**
 * 选择排序
 */
const { swap, assert } = require('./helper')
function sort(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    let current = arr[i]
    let j = i
    let index = i
    for (; j < len; j ++) {
      if(arr[j] < current) {
        current = arr[j]
        index = j 
      }
    }
    swap(arr, i, index)
  }
  return arr
}

assert(sort)
module.exports = sort
