import test from 'ava'
import selectSort from '../src/select'
import { sort1 as insert1, sort2 as insert2} from '../src/insert'
import bubble from '../src/bubble'
import {merge1, merge2} from '../src/merge'
import buket from '../src/buket'
import conterSort from '../src/counterSort'
import quickSort1 from '../src/quickSort'
import quickSort2 from '../src/quickSort2'
import quickSort3 from '../src/quickSort3'
import linkQuickSort1 from '../src/linkQuickSort'
import linkQuickSort2 from '../src/linkQuickSort2'
import maxHeapSort from '../src/max-heap'
import minHeapSort from '../src/min-heap'
import { testSort } from './helper'
import { generateTestCase } from '../src/helper';
test('select sort', (t) => {
  testSort(t, selectSort)
})
test('bubble sort', (t) => {
  testSort(t, bubble)
})
test('merge sort', (t) => {
  testSort(t, merge1)
  testSort(t, merge2)
})
test('insert sort', (t) => {
  testSort(t, insert1)
  testSort(t, insert2)
})
test('buket sort', (t) => {
  testSort(t, buket)
})
test('counter sort', (t) => {
  testSort(t, conterSort)
})
test('quickSort1 sort', (t) => {
  testSort(t, quickSort1)
})
test('quickSort2 sort', (t) => {
  testSort(t, quickSort2)
})
test('quickSort3 sort', (t) => {
  testSort(t, quickSort3)
})
test('linkQuickSort1 sort', (t) => {
  testSort(t, linkQuickSort1)
})
test('linkQuickSort2 sort', (t) => {
  testSort(t, linkQuickSort2)
})
test('maxHeap sort', (t) => {
  testSort(t, maxHeapSort)
})
test('minHeap sort', (t) => {
  const arr = generateTestCase(20)
  const expect = [...arr].sort((a, b) => (a > b ? -1 : 1))
  const receive = minHeapSort(arr)
  t.assert(expect.join(',') === receive.join(','))
})
