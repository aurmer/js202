// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'

function charCodeAddition (char1,num1) {
  return String.fromCharCode(char1.charCodeAt(0) + num1)
}

function shiftLCAlpha (shiftCount,charMatch) {
  let newChar = charCodeAddition(charMatch,shiftCount)
  if (newChar > 'z') {
    newChar = charCodeAddition(newChar,-26)
  }
  if (newChar < 'a') {
    newChar = charCodeAddition(newChar,26)
  }
  return newChar
}

function cipher (inputString,shiftCount) {
  inputString = inputString.toLowerCase()
  const anyAlphaChar = /[a-z]/g

  return inputString.replace(anyAlphaChar,shiftLCAlpha.bind(null,shiftCount))
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'
function decipher (inputString,shiftCount) {
  inputString = inputString.toLowerCase()
  const anyAlphaChar = /[a-z]/g

  return inputString.replace(anyAlphaChar,shiftLCAlpha.bind(null,-shiftCount))
}
