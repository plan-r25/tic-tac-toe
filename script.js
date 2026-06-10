const myScore = document.querySelector(".myScore");
const bScore = document.querySelector(".bScore");
const msg = document.querySelector("#msg");
const board = document.querySelector("#board");
const restartBtn = document.querySelector(".restart");
const newBtn = document.querySelector(".new-game");
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

const playerX = player()
console.log(playerX.type('x'));
console.log(playerX.type('o'))
console.log(playerX.comMove(5));

for (let i = 0; i < 9; i++) {
  const cell = document.createElement("button");
  cell.classList.add("item", `box${i}`);
  cell.dataset.index = i;
  board.appendChild(cell);
}

const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
  if (xTurn) {
    item.innerText = 'X';
    xTurn = false;
    msg.textContent = 'O Turn';
  } else {
    item.innerText = 'O';
    xTurn = true;
    msg.textContent = 'X Turn';
  }
  item.disabled = true;
  restartBtn.addEventListner("click", (e) => {

  })

   console.log("You clicked :", e.target.dataset.index);
 })
})

newBtn.addEventListener("click", () => {
  location.reload();
})




function player() {
  function type(n) {
    return n;
  }
  function comMove(ran) {
    return Math.floor(Math.random() * ran);
  }
  return {
    type, 
    comMove
  };
}