// Write a function "matrixAdd" which is given two two-dimensional arrays, and
// returns a new two-dimensional array containing their matrix sum.
// Example:
// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]


function matrixAdd (arr1,arr2) {
  return arr1.map((innerArray,idx1) => {
    return innerArray.map((number,idx2) => {
      return number + arr2[idx1][idx2]
    })
  })
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "matrixMultiply" which is given two two-dimensional arrays;
// you can assume the matricies are of size 2x2.
// It should return the result of matrix multiplication of the two matricies.
// What is matrix multiplication? https://tinyurl.com/j6jgh2u
//
// Example:
// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]

function twoDArrayGetColumn (arr1,colNumber) {
  return arr1.map((ele) => ele[colNumber])
}

function twoDArrayGetRow (arr1,rowNumber) {
  return arr1[rowNumber]
}

function dotMult (arr1,arr2) {
  return arr1.reduce( (accum,ele,idx) => accum+ele*arr2[idx],0)
}

function matrixMultiply (arr1,arr2) {
  const resultLength = arr1.length
  const resultWidth = arr2[0].length

  let resultArray = []

  for(let currentY=0;currentY<resultLength;currentY++) {
    resultArray[currentY] = []
    for(let currentX=0;currentX<resultWidth;currentX++) {
      resultArray[currentY][currentX] = dotMult(twoDArrayGetRow(arr1,currentY),twoDArrayGetColumn(arr2,currentX))
    }
  }
  return resultArray
}
