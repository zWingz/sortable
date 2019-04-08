/**
 * 降序用小堆树
 */

const { swap } = require('./helper')
function reheap(arr, i, end) {
  /* istanbul ignore if */
  if(end < i) {
    return
  }
  const left = 2 * i + 1
  const right = left + 1
  let minValue = arr[i],
    minIndex = i
  const leftVal = arr[left]
  const rightValue = arr[right]
  if (left <= end && leftVal < minValue) {
    minValue = leftVal
    minIndex = left
  }
  if (right <= end && rightValue < minValue) {
    minValue = rightValue
    minIndex = right
  }
  if (minIndex !== i) {
    swap(arr, i, minIndex)
    reheap(arr, minIndex, end)
  }
}

function sort(arr, m) {
  const len = arr.length
  for (let i = len - 1; i >= 0; i--) {
    reheap(arr, i, len - 1)
  }
  swap(arr, 0, len - 1)
  for (let i = len - 2; i>=0; i--) {
    reheap(arr, 0, i)
    swap(arr,0,i)
  }
  return arr
}

// const caseArr = generateTestCase(20)
// const ret = sort(caseArr)
// console.log(ret.join('') === caseArr.sort((a, b) => a > b ? -1 : 1).join(''))
module.exports = sort
