// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'
function numberJoinerWhile (num1,num2) {
  let accumulator = ""
  let count = num1
  while(count<=num2) {
    accumulator += count + '_'
    count++
  }

  return accumulator.slice(0,-1)
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.
function numberJoinerFor (num1,num2) {
  let accumulator = ""

  for(let count = num1; count<=num2; count++) {
    accumulator += count + '_'
  }

  return accumulator.slice(0,-1)
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3
function numberJoinerFancy (num1,num2,delimiter) {
  let accumulator = ""

  if (typeof delimiter !== "string") {
    delimiter = "_"
  }

  for(let count = num1; count<=num2; count++) {
    accumulator += count
    if(count != num2) {
      accumulator += delimiter
    }
  }

  return accumulator
}
