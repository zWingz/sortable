/**
 * 技术排序
 * 只能用于整数排序
 * 将待排序数组中的值存于线性数组c中
 * c数组下标为arr[i], c[arr[i]]代表有几个该数
 * 例如: arr = [4,5,2,0], c = [1, 0, 1, 0, 1, 1]
 * 最后遍历c, 将对应的数放入ret中
 * ret为已排序数组
 *
 */
const { assert } = require('./helper')

function sort(arr) {
  const len = arr.length
  let max = 0,
    min = 0
  for (let i = 0; i < len; i++) {
    const val = arr[i]
    if (val > max) max = val
    if (val < min) min = val
  }
  const c = []
  for (let i = 0; i < len; i++) {
    const val = arr[i]
    const o = c[val - min] || 0
    c[val - min] = o + 1
  }
  const ret = []
  for (let i = 0; i < c.length; i++) {
    let val = c[i]
    while (val) {
      ret.push(i + min)
      val--
    }
  }
  return ret
}

assert(sort)
