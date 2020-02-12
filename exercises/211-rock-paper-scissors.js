// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'
function rockPaperScissorsOLD (player1,player2) {
  const PLAYER1WINS = "player 1"
  const PLAYER2WINS = "player 2"

  if (player1 === "rock") {
    if (player2 === "paper") {
      return PLAYER2WINS
    }
    if (player2 === "scissors") {
      return PLAYER1WINS
    }
  }

  if (player1 === "paper") {
    if (player2 === "rock") {
      return PLAYER1WINS
    }
    if (player2 === "scissors") {
      return PLAYER2WINS
    }
  }

  if (player1 === "scissors") {
    if (player2 === "paper") {
      return PLAYER1WINS
    }
    if (player2 === "rock") {
      return PLAYER2WINS
    }
  }

  return "draw"
}

//fun way to solve by mapping to a calculable value
function rockPaperScissors (player1,player2) {
  const RESULT_MAP = {
    "2": "player 2",
    "0": "player 1",
    "1": "draw"
  }
  const INPUT_OPTIONS = {
    rock: {
      p1mapping: 3,
      p2mapping: 1
    },
    paper: {
      p1mapping: 2,
      p2mapping: 2
    },
    scissors: {
      p1mapping: 1,
      p2mapping: 3
    }
  }

  if (!Object.keys(INPUT_OPTIONS).includes(player1) || !Object.keys(INPUT_OPTIONS).includes(player2)) {
    return false
  }

  player1 = INPUT_OPTIONS[player1].p1mapping
  player2 = INPUT_OPTIONS[player2].p2mapping

  return RESULT_MAP[((player1+player2)%3)]
}
