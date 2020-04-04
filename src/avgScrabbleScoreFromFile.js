let fs = require('fs');
let avgScrabbleScore = require('./avgScrabbleScore');

/**
 * Returns the average scrabble score of all the words the
 * given text file.
 *
 * Use fs.readFileSync to read the contents.
 *
 * Create some sample files yourself. We also supplied
 * sample-words.txt.
 */
function avgScrabbleScoreFromFile(fileName) {
  let text = fs.readFileSync(`./${fileName}`, 'utf8')
  let words = text.slice(0,text.length - 1).split('\n')
  avgScore = avgScrabbleScore(words)
  return avgScore
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScoreFromFile:');

  console.log(avgScrabbleScoreFromFile('test2.txt'));
  console.log(avgScrabbleScoreFromFile('test.txt'));

}

module.exports = avgScrabbleScoreFromFile;
