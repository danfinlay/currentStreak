module.exports = function currentStreak(gameResults) {
  var streakType, prefix
  var result = 0

  gameResults.forEach(function(game) {
    if (typeof game === 'undefined') return

    if (streakType === undefined) {
      streakType = game
    }

    if (game === streakType) {
      result++
    } else {
      result = 1
      streakType = game
    }
  })

  prefix = streakType === 1 ? 'W' : streakType === -1 ? 'L' : 'D'

  return prefix + String(result)
}
