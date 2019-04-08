/**
 * 桶排序
 * 计算出数组arr的最大值和最小值只差 max - min
 * 设定分为m桶, 那么每桶的范围 range = (max - min) / m
 * 第一桶[0, range], 第二桶[range, 2range] ... [(m-1)\*range, \m*range]
 * 遍历数组arr, 通过 arr[i] / range 可以得出应归入哪一个桶
 * 可以在归入桶同是使用二分插入法插入, 此时每个桶都是有序的
 * 也可以在归入后, 对每一个桶进行排序
 * 最后将所有桶concat起来
 * 排序完成
 */

const { assert, insert } = require('./helper')

function s(arr, buket = 4) {
  const len = arr.length
  let max = arr[0],
    min = arr[0]
  const buk = []
  for (let i = 1; i < len; i++) {
    const val = arr[i]
    if (val > max) max = val
    if (val < min) min = val
  }
  // 计算范围
  const range = (max - min + 1) / buket
  // 分桶
  for (let i = 0; i < len; i++) {
    const val = arr[i]
    const index = Math.floor(val / range)
    if (buk[index] !== undefined) {
      // 插入到已排好序的桶中
      insert(buk[index], val)
    } else {
      buk[index] = [val]
    }
  }
  const bukL = buk.length
  let ret = []
  // 合并桶
  for (let i = 0; i < bukL; i++) {
    ret = ret.concat(buk[i])
  }
  return ret
}

assert(s)

module.exports = s
