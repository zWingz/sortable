module.exports.swap = function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

module.exports.generateTestCase = function generateTestCase(len) {
  const ret = []
  for(let i = 0; i < len; i ++) {
    ret.push(Math.floor(Math.random() * 100 + Math.random() * 10))
  }
  return ret
}



module.exports.assert = fn => {
  const testArr = generateTestCase(20)
  const expect = [...testArr].sort((a,b) => a > b ? 1 : -1)
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
  if(!link) return []
  let current = link
  let ret = []
  while (current) {
    ret.push(current.value)
    current = current.next
  }
  return ret
}
