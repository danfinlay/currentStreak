var test = require('tape')
var assert = require('assert')
var currentStreak = require('./')

test('currentStreak function', function(t) {
  t.plan(4)

  var input1 = [1,0,-1,-1]
  var expected1 = 'L2'
  var result1 = currentStreak(input1)
  t.equal(result1, expected1)

  var input2 = [1,0,-1,-1,1,1,1]
  var expected2 = 'W3'
  var result2 = currentStreak(input2)
  t.equal(result2, expected2)

  var input = [1,0,-1,-1,1,1,1, 0, 0]
  var expected = 'D2'
  var result = currentStreak(input2)
  t.equal(result, expected)

  var input = [1,0,-1,-1,1,1,1, undefined, undefined]
  var expected = 'W4'
  var result = currentStreak(input2)
  t.equal(result, expected)
})
