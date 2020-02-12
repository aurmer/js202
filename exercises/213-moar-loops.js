// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Complete the removeZAnimals function as described below:

function removeZAnimals () {
  const animals = ["alligator", "zebra", "crocodile", "giraffe"]
  const NOMATCH = -1

  let animalsWithoutZ = []

  for (let idx=0; idx < animals.length; idx++) {
    if(animals[idx].search(/[zZ]/) === NOMATCH) {
      animalsWithoutZ.push(animals[idx])
    }
  }
  return animalsWithoutZ
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeAnyWordWithZ" that takes 1 argument: an array of strings
// It should return a new array that has all of the items in the passed-in array minus
// any words that contain the letter 'z' or 'Z' (case-insensitive)
function removeAnyWordWithZ (stringArr) {
  let wordsWithoutZ = []
  const NOMATCH = -1

  for (let idx=0; idx < stringArr.length; idx++) {
    if(stringArr[idx].search(/[zZ]/) === NOMATCH) {
      wordsWithoutZ.push(stringArr[idx])
    }
  }
  return wordsWithoutZ
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeWordsWithChar" that takes 2 arguments:
// 1) an array of strings
// 2) a string of length 1 (ie: a single character)
// It should return a new array that has all of the items in the first argument
// except those that contain a character in the second argument (case-insensitive).
//
// Examples:
// removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'b') --> ['aaa', 'ccc']
// removeWordsWithChar(['pizza', 'beer', 'cheese'], 'E') --> ['pizza']
function removeWordsWithChar (stringArr, char) {
  let wordsWithoutChar = []
  const NOMATCH = -1
  const charRegX = new RegExp(`[${char}]`,'i')

  for (let idx=0; idx < stringArr.length; idx++) {
    if(stringArr[idx].search(charRegX) === NOMATCH) {
      wordsWithoutChar.push(stringArr[idx])
    }
  }
  return wordsWithoutChar
}
