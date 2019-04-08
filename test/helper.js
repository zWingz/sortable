const { assert } = require('../src/helper')

module.exports.testSort = function testSort(t, sort) {
  let count = 100
  while(count) {
    t.assert(assert(sort) === true)
    count --
  }
}
