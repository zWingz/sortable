/**
 * 快排
 * 每次parition, 取最左节点为基准值pviot
 * 从最左以及最右节点开始, start和end
 * **目的是要调整为end右边的大于基准, start左边的小于基准**
 * 从右节点开始, 如果节点大于基准值, 则右节点 end--
 * 否则,将arr[start]设为该节点, 既小的跑到了左边
 * 从start开始遍历, 如果节点小于基准值, 则start++
 * 否则, 将arr[end]设为该节点, 既大的跑到了左边
 * 如果start >= end
 * 此时start左边全部小于基准, 右边大于基准
 * 将arr[start]设为基准值
 * 返回start下标
 * 继续递归
 * 利于原有数组进行排序
 */


const { assert } = require('./helper')

function sort(arr) {
  return quickSort(arr, 0, arr.length)
}

function quickSort(arr, left, right) {
  if (left >= right) return arr
  const paritionIndex = partition(arr, left, right)
  quickSort(arr, left, paritionIndex)
  quickSort(arr, paritionIndex + 1, right)
  return arr
}

function partition(arr, left, right) {
  // 拿最左当佐哨兵
  let pviot = arr[left]
  // 从左边第二个开始, 复用原来数组来节省空间
  let start = left
  let end = right - 1

  while (start < end) {
    while (start < end && arr[end] >= pviot) {
      end--
    }
    arr[start] = arr[end]
    while (start < end && arr[start] < pviot) {
      start++
    }
    arr[end] = arr[start]
  }
  arr[start] = pviot
  return start
}

assert(sort)

module.exports = sort
