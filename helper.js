module.exports.swap = function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

module.exports.generateTestCase = function generateTestCase(len) {
  const ret = []
  for (let i = 0; i < len; i++) {
    ret.push(Math.floor(Math.random() * 100 + Math.random() * 10))
  }
  return ret
}

module.exports.assert = fn => {
  const testArr = exports.generateTestCase(20)
  const expect = [...testArr].sort((a, b) => (a > b ? 1 : -1))
  const receive = fn(testArr)
  console.log(receive.join('') === expect.join(''))
}

class Link {
  constructor(value) {
    this.next = null
    this.value = value
  }
}
module.exports.Link = Link
module.exports.arrToLinkList = function arrToLinkList(arr) {
  let current, start, end
  for (let i = 0; i < arr.length; i++) {
    if (!current) {
      current = new Link(arr[i])
      start = current
    } else {
      current.next = new Link(arr[i])
      current = current.next
    }
  }
  end = current
  return {
    start,
    end
  }
}

module.exports.swapLink = function swapLink(from, to) {
  let tmp = to.value
  to.value = from.value
  from.value = tmp
}

module.exports.linkListToArr = function toArr(link) {
  if (!link) return []
  let current = link
  let ret = []
  while (current) {
    ret.push(current.value)
    current = current.next
  }
  return ret
}

/**
 * 插入到有序数组中
 * 二分法
 *
 * @param {*} arr
 * @param {*} val
 */
module.exports.insert = function insert(arr, val) {
  function _insert(arr, val, left, right) {
    if (left >= right) {
      arr.splice(arr[left] > val ? left : left + 1, 0, val)
      return
    }
    const mid = Math.floor((right - left) / 2) + left
    const midVal = arr[mid]
    if (midVal === val) {
      arr.splice(mid + 1, 0, val)
      return
    }
    if (midVal > val) {
      _insert(arr, val, left, mid - 1)
    } else {
      _insert(arr, val, mid + 1, right)
    }
  }
  _insert(arr, val, 0, arr.length - 1)
}
