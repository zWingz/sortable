/**
 * 快排
 * 链表
 */

const { assert, arrToLinkList, linkListToArr } = require('./helper')

function sort(arr) {
  const { start, end } = arrToLinkList(arr)
  const ret = quickSort(start, end)
  return linkListToArr(ret ? ret.head : null)
}

function quickSort(head) {
  let leftHead, rightHead, leftEnd, rightEnd
  if (!head) return
  let current
  const value = head.value
  current = head.next
  // if(!current) return head
  head.next = null
  while (current) {
    if (current.value < value) {
      if (!leftHead) {
        leftHead = current
      } else {
        leftEnd.next = current
      }
      leftEnd = current
      current = current.next
      leftEnd.next = null
    } else {
      if (!rightHead) {
        rightHead = current
      } else {
        rightEnd.next = current
      }
      rightEnd = current
      current = current.next
      rightEnd.next = null
    }
  }
  let newleft = quickSort(leftHead)
  let newRight = quickSort(rightHead)
  let retHead = head,
    retEnd = head

  if(newleft) {
    retHead = newleft.head
    newleft.end.next = head
    retEnd = head
  }
  if(newRight) {
    retEnd.next = newRight.head
    retEnd = newRight.end
  }

  return {
    head: retHead,
    end: retEnd
  }
}

assert(sort)
