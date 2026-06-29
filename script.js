// const myScore = document.querySelector(".myScore");
// const botScore = document.querySelector(".bScore");
const msg = document.querySelector("#msg");
 const board = document.querySelector("#board");
// const restartBtn = document.querySelector(".restart");
// const newBtn = document.querySelector(".new-game");
// // const choiceBtn = document.querySelectorAll(".btn");

for (let i = 0; i < 9; i++) {
  const btn = document.createElement("button");
  btn.classList.add("item");
  btn.dataset.index = i;
  board.appendChild(btn);
}

const originalText = msg.textContent;

let turn = true;
const items = document.querySelectorAll(".item");

const Gameboard = {
  gameboard: ['', '', '', '', '', '', '', '', ''],
  placeMark(ind, mark) {
    return this.gameboard[ind] = mark;
  },
  winPatterns: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  isGameOver() {
    const isDraw = Array.from(items).include('');
    for(let pattern of this.winPatterns) {
      const [val1, val2, val3] = pattern.map(index => items[index].innerText);
      
      if(val1 !== '' && val1 === val2 && val2 === val3) {
        msg.textContent = `${val1} wins`;
        return true;
      }
      if(!isDraw) {
        msg.textContent = "Draw";
      }
    }
  },
  move() {
    items.forEach(btn => {
      btn.addEventListener("click", (e) => {
        let index = Number(btn.dataset.index);
        if(turn) {
          btn.innerText = "X";
          Gameboard.placeMark(index, "X")
          btn.disabled = true;
          turn = false;
          Gameboard.isGameOver();
          setTimeout(() => {
            Gameboard.computerMove()
          }, 1500)
        }
      });
    })
  },
  computerMove() {
    const emptyBtns = Array.from(items).filter(item => item.innerText === '');

    if (emptyBtns.length === 0) return;

    const ran = Math.floor(Math.random() * emptyBtns.length);
    const ranMark = emptyBtns[ran];

    const ind = Number(ranMark.dataset.index);
    ranMark.innerText = "O";
    ranMark.disabled = true;
    turn = true;
    this.placeMark(ind, "O");
    this.isGameOver();
  }
}

Gameboard.move();










// const originalText = msg.textContent;
// let turn = true;
// // let gameover = true;

// function scoreBoard() {
//   let score = 0;
//   const Score = () => {score++};
//   const getScore = () => score;
//   return {
//     Score,
//     getScore
//   };
// }

// const xscore = scoreBoard();
// const oscore = scoreBoard();

// const Gameboard = {
//   gameboard: ['', '', '', '', '', '', '', '', ''],
//   placemark(ind, mark) {
//     this.gameboard[ind] = mark;
//   },
//   winPatterns: [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ],
//   isGameOver() {
//     const isDraw = !this.gameboard.includes("");

//     for(let pattern of this.winPatterns) {
//       let val1 = this.gameboard[pattern[0]];
//       let val2 = this.gameboard[pattern[1]];
//       let val3 = this.gameboard[pattern[2]];
//       if (val1 !== "" && val1 === val2 && val2 === val3) {
//         items[pattern[0]].style.background = "red";
//         items[pattern[1]].style.background = "red";
//         items[pattern[2]].style.background = "red";
//         items.forEach(btn => btn.disabled = true);

//         this.gameboard = ['', '', '', '', '', '', '', '', ''];
//         msg.textContent =`${val1} wins`;
//         turn = true;   

//         setTimeout(() => {
//         msg.textContent = originalText;

//           items.forEach(btn => {
//             items[pattern[0]].style.background = "white";
//             items[pattern[1]].style.background = "white";
//             items[pattern[2]].style.background = "white";
//             btn.innerText = "";
//             btn.disabled = false;
//         });
//         }, 3500) 
//          return true;
//       }
//       if(isDraw) {
//         this.gameboard = ['', '', '', '', '', '', '', '', ''];
//         msg.textContent = "It's a draw";
//         turn = true;
//         setTimeout(() => {
//           msg.textContent = originalText;

//           items.forEach(btn => {
//             btn.innerText = "";
//             btn.disabled = false;
//           });
//         }, 2000)
//         return true;
//       }
//     }
//   },
//   computer() {
//     const emptyBtn = Array.from(items).filter(item => item.innerText === "");

//     if(emptyBtn.length === 0) return;

//     const ran = Math.floor(Math.random() * emptyBtn.length);
//     const chooseBtn = emptyBtn[ran];

//     const actIndex = Number(chooseBtn.dataset.index);

//     chooseBtn.innerText = "O";
//     this.placemark(actIndex, "O");
//     chooseBtn.disabled = true;

//     if(this.isGameOver()) {
//       oscore.Score();
//       botScore.textContent = oscore.getScore();
//       return;
//     };
//     msg.textContent = "X turn";

//     turn = true;
//   },
//   restartGame() {
//       items.forEach(btn => {
//         btn.innerText = "";
//         btn.disabled = false;
//       });
//       this.gameboard = ['', '', '', '', '', '', '', '', ''];
//       msg.textContent = originalText;
//       turn = true;
//   }
// };
// restartBtn.addEventListener("click", Gameboard.restartGame);
// newBtn.addEventListener("click", () =>  {
//   location.reload();
// });

// //for loop to create html buttons
// for (let i = 0; i < 9; i++) {
//   const btn = document.createElement("button");
//   btn.classList.add("item");
//   btn.dataset.index = i;
//   // console.log(btn.dataset.index);
//   // btn.textContent = i;
//   board.appendChild(btn);
// };

// const items = document.querySelectorAll(".item");

// //function to push index btn into the gameboard arr
// (function move() {
//   items.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       if (turn && btn.innerText === "") {
//         btn.innerText = "X"
        
//         let ind = Number(e.currentTarget.dataset.index);
//         Gameboard.placemark(ind, "X");
//         btn.disabled = true;
//         turn = false;
//         if (Gameboard.isGameOver()) {
//           xscore.Score();
//           myScore.textContent = xscore.getScore();
//           return;
//         };
//         msg.textContent = "O trun";
//         setTimeout(() => {
//          Gameboard.computer();
//         }, 1000)
//       }
//     });
//   })
// })();





// Source - https://stackoverflow.com/q/42062178
// Posted by Solomon Bothwell
// Retrieved 2026-06-26, License - CC BY-SA 3.0

// Board state 'object'
/* function State(old) {
  // Prior board states can be loaded in during minmax recursion
  if (typeof old !== 'undefined') {
    this.board = old.board.slice(0);
  } else {
  // Otherwise start with empty board
    this.board = ['E','E','E','E','E','E','E','E','E'];  
  }
  // Terminal game flag
  this.result = 'active';
  // Current player flag
  this.turn = "X";
  // Label to identify move that results in this state during recursion
  this.element = "";
  // Function to switch active player for minmax scoring
  this.advanceTurn = function() {
    this.turn = this.turn === "X" ? "O" : "X";
  }
  // Function to determine if game is complete
  this.isTerminal = function() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.board[a] !== 'E' && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        this.result = this.board[a];
        return true;
      } 
    } 
    if (this.moves().length < 1) {
        this.result = 'DRAW';
        return true;
    }
    return false;
  }
  // Function to find all possible moves
  this.moves = function() {
    arr = this.board.reduce(function(array,el,index){
      if (el === 'E') {
        array.push(index);
      }
      return array;
    },[]);
    return arr;
  }
}

// Recursive minmax function
function minmax(state) {
  // 1) If the state is terminal, return the score from O's perspective
  if (state.isTerminal() === true) {
    if (state.result === 'X') {
      return  -10; 
    } else if (state.result === 'O') {  
      return 10;
    } else {
      return 0;
    }
  } 

  // Generate list of possible new game states (moves) 
  newStatesSet = state.moves().map(function (el) {
    var newState = new State(state);
    newState.board[el] = state.turn.slice(0);
    newState.advanceTurn();
    newState.element = el;
    return newState;
  });  

  // Array to hold all child scores
  var newStateScores = [];

  // For each of these states, add the minmax score of 
  // that state to the scoreList
  newStatesSet.forEach(function(newState) {
    var newStateScore = minmax(newState);
    newStateScores.push(newStateScore);
  });
  stateScore = Math.min(...newStateScores);
  return stateScore;
}

function aiMove(state) {
  var possibleScores = [];
  var possibleMoves = [];
  var possibleStates = state.moves().map(function(el) {
    var newState = new State(state);
    possibleMoves.push(el);
    newState.board[el] = 'O';
    possibleScores.push(minmax(newState));
    return newState;
  });
  if (possibleMoves.length < 1) {
    return -1;
  }
  console.log(possibleStates);
  console.log(possibleScores);
  function indexOfMax(arr) {
    var max = arr.reduce(function(a,b) {
      return b > a ? b : a;   
    });
    return arr.indexOf(max);
  }
  return possibleMoves[indexOfMax(possibleScores)];
}  

var game = new State();
game.board = ['E','E','E',
              'O','E','E',
              'X','E','X']
game.turn = 'O';
//console.log(minmax(game));
console.log(aiMove(game)); */
