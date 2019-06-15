//HomeWork for HackYour Future
//Javascript2 week 1
//Author:Rakhshanda Rashid
//A code contains a function to find the shortest length word in an array.


function shortestWordInArray(wordsLength) {
    let shortestLengthWord = wordsLength[0]; 
    for (let i in wordsLength) {
      if (wordsLength[i].length < shortestLengthWord.length) {
        shortestLengthWord = wordsLength[i];
      }
    }
    return shortestLengthWord; // shortestWord is ø
  }
  const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
  let searchShortestWordInArray = shortestWordInArray(danishWords);
  console.log("Shortest word in the array is "+" "+searchShortestWordInArray); // Returns 'ø'

  