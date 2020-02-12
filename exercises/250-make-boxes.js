// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare (inputNumber) {
  const oneRow = "*".repeat(inputNumber) + "\n"
  const allRowsWithExtraNL = oneRow.repeat(inputNumber)

  return allRowsWithExtraNL.slice(0,-1) //remove final '\n'
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox (boxWidth,boxLength) {
  const midRowCount = Math.max(boxLength-2,0)
  const midColCount = Math.max(boxWidth-2,0)
  const firstLine = (boxLength>=2) ? "*".repeat(boxWidth) + '\n' : ""
  const lastLine = (boxLength>=1) ? "*".repeat(boxWidth) : ""
  const midLine = `*${" ".repeat(midColCount)}*\n`

  return firstLine + midLine.repeat(midRowCount) + lastLine
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner (inputString) {
  if (typeof inputString !== "string") {
    inputString = ""
  }
  const boxWidth = inputString.length + 4
  const topLine = "*".repeat(boxWidth) + "\n"
  const bottomLine = "*".repeat(boxWidth)
  const middleLine = `* ${inputString} *\n`

  return topLine + middleLine + bottomLine
}
