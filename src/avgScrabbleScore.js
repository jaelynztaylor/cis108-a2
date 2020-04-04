let scrabbleScore = require('./scrabbleScore');

/**
 * Given an array of words, return the average scrabble
 * score.
 *
 * Use your implementation of scrabbleScore.
 */
function avgScrabbleScore(words) {
  let count = 0;
  for (let word of words) {
    count = count + scrabbleScore(word)
  }

  avgScore = count / words.length
  return avgScore
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScore:');

  console.log(avgScrabbleScore(['jackie']))
  console.log(avgScrabbleScore(['hello', 'world']))
  console.log(avgScrabbleScore(['coding', 'is', 'something', 'else']))
}

module.exports = avgScrabbleScore;
