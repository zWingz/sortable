/**
 * 快排
 * 每次parition, 取left为基准pviot
 * 使用index=left + 1来辅助记录小于pviot的值的索引
 * 从左边第二个,left + 1开始遍历
 * 如果arr[i] < pviot, 则将arr[index]和arr[i]交换
 * 此时index左边全部小于pviot
 * 最后将pviot与index交换, 此时pviot左边全部小于pviot, 右边则全部大于
 * 返回pivot下标
 * 利于原有数组进行排序
 */
const { swap, assert } = require('./helper')

function sort(arr) {
  return quickSort(arr, 0 ,arr.length)
}

function quickSort(arr, left, right) {
  if(left >= right) return arr
  const paritionIndex = partition(arr, left, right)
  quickSort(arr, left, paritionIndex)
  quickSort(arr, paritionIndex + 1, right)
  return arr
}

function partition(arr, left ,right) {
  // 拿最左当佐哨兵
  let pviot = arr[left]
  // 从左边第二个开始, 复用原来数组来节省空间
  let index = left + 1
  for(let i = index; i < right; i ++) {
    if(arr[i] < pviot) {
      swap(arr, i, index)
      index ++
    }
  }
  // 确定好位置后, 将原来哨兵与idnex - 1交换
  // 此时index - 1左边全部比哨兵小, 右边比哨兵大
  swap(arr, left, index - 1)
  return index - 1
}

assert(sort)
