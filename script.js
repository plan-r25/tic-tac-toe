// const myScore = document.querySelector(".myScore");
// const bScore = document.querySelector(".bScore");
// const msg = document.querySelector("#msg");
// const board = document.querySelector("#board");
// const restartBtn = document.querySelector(".restart");
// const newBtn = document.querySelector(".new-game");
// const choiceBtn = document.querySelectorAll(".btn");

// let xTurn = true;
// let computerTurn = true;

// const winPatterns = [
//   [0, 1, 2],
//   [0, 3, 6], 
//   [0, 4, 8],
//   [2, 4, 6],
//   [2, 5, 8],
//   [1, 4, 7],
//   [3, 4, 5],
//   [6, 7, 8]
// ];

// function gameBoard() {
//   const board = [];
//   let count = 0;

//   function placeMark(index, mark) {
//     board[index] = mark;
//   }

//   function type(n) {
//     return n;
//   }

//   function increaseMyCount() { 
//     return count++; 
//   };

//   function increaseBotcount() {
//     return count++;
//   }

//   return {
//     board,
//     placeMark,
//     type,
//     increaseMyCount,
//     increaseBotcount
//   };
// }

// const player = gameBoard();
// console.log(player.type('x'));
// console.log(player.type('o'))

// for (let i = 0; i < 9; i++) {
//   const cell = document.createElement("button");
//   cell.classList.add("item", `box${i}`);
//   cell.dataset.index = i;
//   board.appendChild(cell);
// }


// const items = document.querySelectorAll(".item");

// function humanMode() {
//  items.forEach((item) => {
//    item.addEventListener("click", (e) => {
//      if (xTurn) {
//        item.innerText = 'X';
//        player.placeMark(e.target.dataset.index, 'X');
//        xTurn = false;
//        msg.textContent = 'O Turn';
//       } else {
//        item.innerText = 'O';
//        player.placeMark(e.target.dataset.index, 'O');
//        xTurn = true;
//        msg.textContent = 'X Turn';
//       } 
//        item.disabled = true;
//        choiceBtn.forEach(btn => btn.disabled = true);
//        console.log("You clicked :", e.target.dataset.index);
//      })
//  });
// }
// humanMode();

// function humanVsBot() {
//   let playerMark;
//   let botMark;

//   choiceBtn.forEach(btn => {
//     btn.addEventListener("click", (e) => {
//       choiceBtn.forEach(btn => btn.disabled = true)
//       if (e.currentTarget.value === 'X') {
//         playerMark = 'X';
//         botMark = 'O';
//         computerMove(botMark);
//       } else {
//         playerMark = 'O';
//         botMark = 'X';
//         computerMove(botMark);
//       }
//       items.forEach(item => {
//         item.addEventListener("click", () => {
//           if (item.innerText !== '') return;
//           item.innerText = playerMark;
//           computerMove(botMark);
//         })
//       })
//     })
//     restartGame(btn);
//   })
// }
// humanVsBot();


// //checking where can the bot put its mark
// function computerMove(type) {
//   const emptyBtn = Array.from(items).filter(item => item.innerText === '');
//   if(emptyBtn.length === 0) return null;
//   const randomIndex = Math.floor(Math.random() * emptyBtn.length);
//   const chooseCell = emptyBtn[randomIndex];
//   chooseCell.innerText = type;
//   console.log("computer clicked:", chooseCell);
//   return chooseCell;
// }

// check for a winner
// we can use the every() method to check the winner


// //restart the current game only
// function restartGame(btn) {
//   restartBtn.addEventListener("click", () => {
//     items.forEach((item) => {
//       item.innerText = '';
//       item.disabled = false;
//     })
//     btn.disabled = false;
//   })
// }
// restartGame();

// //to refresh the page
// newBtn.addEventListener("click", () => {
//   location.reload();
// })


const board = [[" ", " ", " "], 
               [" ", " ", " "],
               [" ", " ", " "],
]

let m = [];
let turn = true;
let combo = {
  row: undefined,
  col: undefined
}

const allequal = arr => arr.every(v => v !== " " && v === arr[0]);

const readline = require("readline")

const game = {
  update: function(){
    this.isgameOver();

    if(gameOver) {
      this.updateBoard()
      console.log(`Game over ${winner} won!`);
      process.exit();
    }
    this.updateBoard();
    m = this.possibleMoves();

    if(m.length === 0) {
      gameOver = true;
      console.log("Game over by draw");
      process.exit();
    }
  },

  isgameOver: function(){

    if(allequal(board[0])) {
      gameOver = true;
      winner = board[0][0]
    }
     if(allequal(board[1]))) {
      gameOver = true;
      winner = baord[1][0]
     }
      if(allequal(board[2])) {
        gameOver = true;
        winner = board[2][0]
      }

      if(allequal([board[0][0], board[1][0], board[2][0]])) {
        gameOver = true;
        winner = board[0][0]
      }
       if(allequal([board[0][1], board[1][1], board[2][1]])) {
        gameOver = true;
        winner = board[0][1]
       }
        if(allequal([board[0][2], board[1][2], board[2][2]])) {
          gameOver = true;
          winner = board[0][2]
        }
         if(allequal([board[0][0], board[1][1], board[2][2]])) {
           gameOver = true;
           winner = board[0][0]
         }
          if(allequal([board[0][2], board[1][1], board[2][0]])) {
            gameOver = true;
            winner = board[0][2]
          }

  },
  move: function(c){
    board[+c.row][+c.col] = "X"

    combo.row = undefined
    combo.col = undefined
    this.update()
    setTimeout(() => {
      this.computer()
    }, 3000);
  },

  possibleMoves: function(){
    const p = []

    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[0].length; j++){
        if(board[i][j] === " "){
          p.push({row: i, col: j})
        }
      }
    }
     return p;
  },
  computer: function(){

    console.log(m) 
    if(m.length > 0){
      let ra = Math.round(Math.random() * (m.length - 1))
      board[m[ra].row][m[ra].col] = "O";
    }
    turn = true;
    this.update();
    console.log("ur turn");
  },

  updateBoard: function(){
    console.log("  ")
    board.forEach((arr, i)=> {
      console.log(arr.toString().replace(/,/g, "|"))
    })
  }
}

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawmode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    if(turn) {
      if(combo.row){
        combo.col = key.name
        turn = false
        game.move(combo)
      } else {
        combo.row = key.name
      }
    } else {
      console.log("wait your turn");
    }
  }
});
