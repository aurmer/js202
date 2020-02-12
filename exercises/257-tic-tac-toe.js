// Write a function "ticTacToe" which takes a two-dimensional array of size 3x3.
// Each cell in the two dimensional array can be one of 'O', 'X', or null.
// Return 'O' if O makes a winning row.
// Return 'X' if X makes a winning row.
// Return null if there is no winning row on the board.
//
// Examples:
// > ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null
function twoDArrayGetColumn (arr1,colNumber) {
  return arr1.map((ele) => ele[colNumber])
}

function rotateBoard (gameBoard) {
  return gameBoard.map( (ele,idx) => twoDArrayGetColumn(gameBoard,idx) )
}

function getBoardDiags(gameBoard) {
  let diags = [[],[]]

  for(let idx=0;idx<gameBoard.length;idx++) {
    diags[0].push(gameBoard[idx][idx])
    diags[1].push(gameBoard[idx][gameBoard.length-1-idx])
  }
  return diags
}

function filterForUniqueValues(arr1) {
  return arr1.filter( (ele,idx,arr) => arr.indexOf(ele) === idx )
}

function checkPathsForWin (arr1) {
  for(path of arr1) {
    const uniqueOnRow = filterForUniqueValues(path)
    if (uniqueOnRow.length === 1 && uniqueOnRow[0] !== null) {
      return uniqueOnRow[0]
    }
  }
  return null
}

function ticTacToe (gameBoard) {
  const rotatedGameBoard = rotateBoard(gameBoard)
  const gameBoardDiags = getBoardDiags(gameBoard)
  //check rows
  return  checkPathsForWin([...gameBoard,...rotatedGameBoard,...gameBoardDiags])
}
