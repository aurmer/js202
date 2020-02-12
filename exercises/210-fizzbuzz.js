// Write a function "fizzbuzz" that returns the fizzbuzz string for an input number.
// A fizzbuzz string is defined as the following:
// For every number from 1 to the input number
// - if that number is not a multiple of 3 or 5, add a period "." to the fizzbuzz string
// - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
// - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
// - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
//
// Examples:
// fizzbuzz(3) --> '..fizz'
// fizzbuzz(15) --> '..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz'
function isDivBy (divisor) {
  if (typeof divisor !== "number") {
    return false
  } else {
    return (number) => {
      if(typeof number !== "number") {
        return false
      } else {
        return number % divisor === 0
      }
    }
  }
}

function fizzbuzz(number) {
  const isDivBy5 = isDivBy(5)
  const isDivBy3 = isDivBy(3)

  if (typeof number !== "number") {
    return ""
  }

  let fizzString = ""
  for (let count=1;count<=number;count++) {
    if (isDivBy3(count)) {
      fizzString += "fizz"
    }
    if (isDivBy5(count)) {
      fizzString += "buzz"
    }
    if (!isDivBy3(count) && !isDivBy5(count)) {
      fizzString += "."
    }
  }

  return fizzString
}
