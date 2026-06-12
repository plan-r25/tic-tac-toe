const myScore = document.querySelector(".myScore");
const bScore = document.querySelector(".bScore");
const msg = document.querySelector("#msg");
const board = document.querySelector("#board");
const restartBtn = document.querySelector(".restart");
const newBtn = document.querySelector(".new-game");
const choiceBtn = document.querySelectorAll(".btn");

let xTurn = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6], 
  [0, 4, 8],
  [2, 4, 6],
  [2, 5, 8],
  [1, 4, 7],
  [3, 4, 5],
  [6, 7, 8]
];

function gameBoard() {
  const board = [];
  let count = 0;

  function placeMark(index, mark) {
    board[index] = mark;
  }

  function type(n) {
    return n;
  }

  function increaseMyCount() { 
    return count++; 
  };

  function increaseBotcount() {
    return count++;
  }

  return {
    board,
    placeMark,
    type,
    increaseMyCount,
    increaseBotcount
  };
}

const player = gameBoard();
console.log(player.type('x'));
console.log(player.type('o'))

for (let i = 0; i < 9; i++) {
  const cell = document.createElement("button");
  cell.classList.add("item", `box${i}`);
  cell.dataset.index = i;
  board.appendChild(cell);
}


const items = document.querySelectorAll(".item");

function playGame() {
 items.forEach((item) => {
   item.addEventListener("click", (e) => {
     if (xTurn) {
       item.innerText = 'X';
       player.placeMark(e.target.dataset.index, 'X');
       xTurn = false;
       msg.textContent = 'O Turn';
      } else {
        computerMove('O');
      //  item.innerText = 'O';
       player.placeMark(e.target.dataset.index, 'O');
       xTurn = true;
       msg.textContent = 'X Turn';
      }
       item.disabled = true;
       console.log("You clicked :", e.target.dataset.index);
     })
 });

}
playGame();




//checking where can the bot put its mark
function computerMove(type) {
  const emptyBtn = Array.from(items).filter(item => item.innerText === '');
  if(emptyBtn.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * emptyBtn.length);
  const chooseCell = emptyBtn[randomIndex];
  chooseCell.innerText = type;
  console.log("computer clicked:", chooseCell);
  return chooseCell;
}

//choose between X and O
function playerChoice() {
  choiceBtn.forEach(button => {
    button.addEventListener("click", (e) => {
      choiceBtn.forEach(btn => { 
        btn.disabled = true;
      })
     if ( e.currentTarget.value === 'O') {
      computerMove('X');
     } else {
      computerMove('O')
     };
    });
    restartGame(button);
  });
}
playerChoice();

//check for a winner
function checkWinner() {
  player.board 
  winPatterns
  const type = [X, O];
  for (const pattern of player.board) {

  }
}

//restart the current game only
function restartGame(btn) {
  restartBtn.addEventListener("click", () => {
    items.forEach((item) => {
      item.innerText = '';
      item.disabled = false;
    })
    btn.disabled = false;
  })
}
restartGame();

//to refresh the page
newBtn.addEventListener("click", () => {
  location.reload();
})





