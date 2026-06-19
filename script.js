// const myScore = document.querySelector(".myScore");
// const bScore = document.querySelector(".bScore");
// const msg = document.querySelector("#msg");
 const board = document.querySelector("#board");
// const restartBtn = document.querySelector(".restart");
// const newBtn = document.querySelector(".new-game");
// const choiceBtn = document.querySelectorAll(".btn");

let turn = true;

const Gameboard = {
  gameboard: [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ],
  winPatterns: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
};

//for loop to create html btns
for (let i = 0; i < 9; i++) {
  const btn = document.createElement("button");
  btn.classList.add("item");
  btn.dataset.index = i;
  console.log(btn.dataset.index);
  // btn.textContent = i;
  board.appendChild(btn);
};

const items = document.querySelectorAll(".item");

(function game() {
  items.forEach((btn) => {
    btn.addEventListener("click", (e) => {
    if(turn) {
      if(btn.dataset.index === '0') {
        btn.innerText = "x";
        Gameboard.gameboard[0][0] = btn.textContent;
      }
    }
    })
  })
})()

//node js
// const board = [[" ", " ", " "], 
//                [" ", " ", " "],
//                [" ", " ", " "],
// ]

// let m = [];
// let turn = true;
// let combo = {
//   row: undefined,
//   col: undefined
// }

// const allequal = arr => arr.every(v => v !== " " && v === arr[0]);

// const readline = require("readline")

// let gameOver = false;
// let winner = '';

// const game = {
//   update: function(){
//     this.isgameOver();

//     if(gameOver) {
//       this.updateBoard()
//       console.log(`Game over ${winner} won!`);
//       process.exit();
//     }
//     this.updateBoard();
//     m = this.possibleMoves();

//     if(m.length === 0) {
//       gameOver = true;
//       console.log("Game over by draw");
//       process.exit();
//     }
//   },

//   isgameOver: function(){

//     if(allequal(board[0])) {
//       gameOver = true;
//       winner = board[0][0]
//     }
//      if(allequal(board[1])) {
//       gameOver = true;
//       winner = board[1][0]
//      }
//       if(allequal(board[2])) {
//         gameOver = true;
//         winner = board[2][0]
//       }

//       if(allequal([board[0][0], board[1][0], board[2][0]])) {
//         gameOver = true;
//         winner = board[0][0]
//       }
//        if(allequal([board[0][1], board[1][1], board[2][1]])) {
//         gameOver = true;
//         winner = board[0][1]
//        }
//         if(allequal([board[0][2], board[1][2], board[2][2]])) {
//           gameOver = true;
//           winner = board[0][2]
//         }
//          if(allequal([board[0][0], board[1][1], board[2][2]])) {
//            gameOver = true;
//            winner = board[0][0]
//          }
//           if(allequal([board[0][2], board[1][1], board[2][0]])) {
//             gameOver = true;
//             winner = board[0][2]
//           }

//   },
//   move: function(c){
//     board[+c.row][+c.col] = "X"

//     combo.row = undefined
//     combo.col = undefined
//     this.update()
//     this.computer()
//   },
//   possibleMoves: function(){
//     const p = []

//     for(let i = 0; i < board.length; i++) {
//       for(let j = 0; j < board[0].length; j++){
//         if(board[i][j] === " "){
//           p.push({row: i, col: j})
//         }
//       }
//     }
//      return p;
//   },
//   computer: function(){

//     console.log(m) 
//     if(m.length > 0){
//       let ra = Math.round(Math.random() * (m.length - 1))
//       board[m[ra].row][m[ra].col] = "O";
//     }
//     turn = true;
//     this.update();
//     console.log("your turn");
//   },

//   updateBoard: function(){
//     console.log("Updating board")
//     board.forEach((arr, i)=> {
//       console.log(arr.toString().replace(/,/g, "|"))
//     })
//   }
// }
 
// readline.emitKeypressEvents(process.stdin);
// process.stdin.setRawMode(true);

// process.stdin.on('keypress', (str, key) => {
//   if (key.ctrl && key.name === 'c') {
//     process.exit();
//   } else {
//     if(turn) {
//       if(combo.row){
//         combo.col = key.name
//         turn = false
//         game.move(combo)
//       } else {
//         combo.row = key.name
//       }
//     } else {
//       console.log("wait your turn");
//     }
//   }
// });
