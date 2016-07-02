# currentStreak(games)

A simple javascript function for use with Google Sheets, written for the Santa Cruz Softball League's scoreboard spreadsheet.

Takes an array of game results and returns a string representing the team's current streak.

It's tolerant of partial seasons, draws, losses, and wins.

## Input

Takes a column or row of games, coded as numbers where:

 - 1 is a win
 - 0 is a draw
 - -1 is a loss

 Returns a string like `W1` or `L4` or `D2` for the result.

 ## Testing and running yourself

 - Install node.js
 - Run `npm install` in this directory.
 - run `npm test` to run the test script against the main function, in `index.js`.
