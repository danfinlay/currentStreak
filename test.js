var test = require('tape')
var assert = require('assert')
var currentStreak = require('./')

test('currentStreak function', function(t) {
  t.plan(3)

  var input1 = [[1],[0],[0],[""],[""],[""],[""],[""],[""],[""]]
  var expected1 = 'L2'
  var result1 = currentStreak(input1)
  t.equal(result1, expected1)

  var input1 = [[1],[0],[1],[1],[""],[""],[""],[""],[""],[""]]
  var expected1 = 'W2'
  var result1 = currentStreak(input1)
  t.equal(result1, expected1)

  var input1 = [[1],[0],[1],[1],[1]]
  var expected1 = 'W3'
  var result1 = currentStreak(input1)
  t.equal(result1, expected1)

})
