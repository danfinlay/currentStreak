module.exports = function currentStreak(gameResults) {
  var streakType = 1
  var prefix
  var result = 0

  // Strip the contents out of their arrays
  var results = gameResults.map(function(res) {
    return res[0]
  })

  results.forEach(function(game) {
    if (game === '') return

    if (game === streakType) {
      result++

    } else {
      result = 1
      streakType = game
    }
  })

  prefix = streakType === 1 ? 'W' : 'L'

  return prefix + String(result)
}
