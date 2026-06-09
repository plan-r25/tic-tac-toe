const parent = document.querySelector(".parent");
let turnO = true;


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

const playerX = player()
console.log(playerX.type('x'));
console.log(playerX.type('o'))
console.log(playerX.comMove(5));

for (let i = 0; i < 9; i++) {

  const div = document.createElement("button");
    div.classList.add("item", `box${i}`);
  let p = document.createElement("p");
  // p.textContent = i;
  div.appendChild(p);
  parent.appendChild(div);


  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (turnO) {
        // playerX.type('x');
        //OR
        item.innerText = 'x';

        turnO = false;
        item.disabled = true;
      } else {
        // playerX.type('o');
        item.innerText = 'o';
        turnO = true;
        item.disabled = true;
      }
      console.log("you cliked:", e.target.textContent);
    })
  })
}