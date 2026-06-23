const myScore = document.querySelector(".myScore");
const botScore = document.querySelector(".bScore");
const msg = document.querySelector("#msg");
 const board = document.querySelector("#board");
const restartBtn = document.querySelector(".restart");
const newBtn = document.querySelector(".new-game");
// const choiceBtn = document.querySelectorAll(".btn");

const originalText = msg.textContent;
let turn = true;
let gameover = true;

function scoreBoard() {
  let score = 0;

  const xScore = () => {score++};
  const oScore = () => {score++};
  const getScore = () => score;

  return {
    xScore,
    oScore,
    getScore
  };
}

const xscore = scoreBoard();
const oscore = scoreBoard();

const Gameboard = {
  gameboard: ['', '', '', '', '', '', '', '', ''],
  placemark(ind, mark) {
    this.gameboard[ind] = mark;
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
    for(let pattern of this.winPatterns) {
      let val1 = this.gameboard[pattern[0]];
      let val2 = this.gameboard[pattern[1]];
      let val3 = this.gameboard[pattern[2]];
      if (val1 !== "" && val1 === val2 && val2 === val3) {
        msg.textContent = `${val1} wins`;
        items.forEach(btn => btn.disabled = true);
        setTimeout(() => {
          items.forEach(btn => {
            btn.innerText = "";
            btn.disabled = false;
        });
          this.gameboard = ['', '', '', '', '', '', '', '', ''];
          msg.textContent = originalText;
          turn = true;
        }, 2000)
        return true;
      }
    }
  },
  computer() {
    const emptyBtn = Array.from(items).filter(item => item.innerText === "");

    if(emptyBtn.length === 0) return;

    const ran = Math.floor(Math.random() * emptyBtn.length);
    const chooseBtn = emptyBtn[ran];

    const actIndex = Number(chooseBtn.dataset.index);

    chooseBtn.innerText = "O";
    this.placemark(actIndex, "O");
    chooseBtn.disabled = true;

    if(this.isGameOver()) {
      oscore.oScore();
      botScore.textContent = oscore.getScore();
      return;
    };
    msg.textContent = "X turn";

    turn = true;
  },
  resartGame: (function() {
    restartBtn.addEventListener("click", () => {
      items.forEach(btn => {
        btn.innerText = "";
        btn.disabled = false;
      });
      this.gameboard = ['', '', '', '', '', '', '', '', ''];
      msg.textContent = originalText;
      turn = true;
    })
  })(),
  newGame: (function() {
    newBtn.addEventListener("click", () => {
      location.reload();
    })
  })()
};

//for loop to create html buttons
for (let i = 0; i < 9; i++) {
  const btn = document.createElement("button");
  btn.classList.add("item");
  btn.dataset.index = i;
  // console.log(btn.dataset.index);
  // btn.textContent = i;
  board.appendChild(btn);
};

const items = document.querySelectorAll(".item");

//function to push index btn into the gameboard arr
(function move() {
  items.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (turn && btn.innerText === "") {
        btn.innerText = "X"
        
        let ind = Number(e.currentTarget.dataset.index);
        Gameboard.placemark(ind, "X");
        btn.disabled = true;
        turn = false;
        if (Gameboard.isGameOver()) {
          xscore.xScore();
          myScore.textContent = xscore.getScore();
          return;
        };
        msg.textContent = "O trun";
        setTimeout(() => {
         Gameboard.computer();
        }, 1000)
      }
    });
  })
})();

