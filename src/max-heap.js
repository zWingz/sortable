/**
 * 堆排序
 * 继续大堆树和小堆树
 * 大堆树: 父节点永远比子节点大, 但是兄弟节点之间不比较
 * 小堆树: 父节点永远比子节点小, 但兄弟节点不比较
 *
 * 升序使用大堆树, 降序使用小堆树
 *
 * 树节点i的左右子节点分别是 **2xi+1** 和 **2xi+2**
 *
 * 原理:
 * 先将树结构调整为大堆树, 此时数的根节点为最大值
 * 用根节点与最后一个节点交换, 此时最大值位于数组最后方
 * 重新从[0, i-1]构建大堆树, 继续循环上一步
 *
 * 将父节点转成大堆算法:
 * 1. 假设最大值在根节点, 记录为topIndex, maxValue和maxIndex
 * 2. 如果左子节点比maxValue大, 则更新maxValue和maxIndex
 * 3. 如果右子节点比maxValue大, 则更新
 * 4. 如果maxIndex不等于topIndex, 则交换两者
 * 5. 由于节点的变化,需要重新构建maxIndex所在的树为大堆树
 *
 */
const { swap, assert } = require('./helper')

/**
 * 构建大堆树, 既根节点比子节点都大, 但是兄弟节点互相不比较
 *
 * @param {*} arr
 * @param {*} top
 * @param {*} [end=arr.length - 1]
 */
function reheap(arr, top, end = arr.length - 1) {
  // 左节点下标
  const left = top * 2 + 1
  // 右节点下标
  const right = top * 2 + 2
  // 假设最大点在根节点
  let maxIndex = top
  // 如果左节点比最大节点大, 则把最大节点设在左边
  if (left <= end && arr[left] > arr[maxIndex]) {
    maxIndex = left
  }
  // 如果右节点比最大节点大, 则把最大节点设在右边
  if (right <= end && arr[right] > arr[maxIndex]) {
    maxIndex = right
  }
  // 如果最大节点下标发生改变
  // 则将根节点于其替换
  // 由于子节点更换, 会影响到孙树, 则需要重新构建子节点的大堆树
  if (top !== maxIndex) {
    // 交换根节点与子节点位置
    swap(arr, top, maxIndex)
    // 重新构建index所在的树为大堆树
    reheap(arr, maxIndex, end)
  }
}

/**
 * 将无序数组转成大堆树解构
 *
 * @param {*} arr
 */
function arrToHeapTree(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    reheap(arr, i, arr.length - 1)
  }
}

function sort(arr) {
  // 首先先把数组初始化为一颗大堆树
  arrToHeapTree(arr)
  // 这时候根节点是数组中最大的点
  // 根节点与尾节点替换, 此时最大的节点在最后, 剔除掉后重新构建大堆树
  // 继续重复步骤
  // 进行尾递归, 因为每次递归, 最大的都会插入该次遍历的最后
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   // 交换根节点
  //   swap(arr, 0, i)
  //   // 重新构建大堆树
  //   reheap(arr, 0, i - 1)
  // }
  swap(arr, 0, arr.length - 1)
  for (let i = arr.length - 2; i >= 0; i--) {
    reheap(arr, 0, i)
    swap(arr, 0, i)
  }
  return arr
}

assert(sort)
module.exports = sort
