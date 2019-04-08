/**
 * 快排
 * 链表
 */

const { assert, arrToLinkList, linkListToArr, swapLink } = require('./helper')

function sort(arr) {
  const { start, end } = arrToLinkList(arr)
  quickSort(start, end)
  return linkListToArr(start)
}

function quickSort(start, end) {
  if (!start || start === end) return start
  const mid = partition(start, end)
  quickSort(start, mid)
  quickSort(mid.next, end)
  return start
}

function partition(head, end) {
  /* istanbul ignore if */
  if (!head || head === end) return
  let pviot = head // 比较值
  let prevIndex = pviot // 左指针
  let index = pviot.next // 左后指针
  let current = index // 右指针
  const value = pviot.value
  while (current !== end.next) {
    if (current.value < value) {
      swapLink(index, current)
      prevIndex = index
      index = index.next
    }
    current = current.next
  }
  swapLink(pviot, prevIndex)
  return prevIndex
}


sort([3, 2, 1, 5, 4, 9, 3, 10, 3, 0, 12, -1])

assert(sort)

module.exports = sort
