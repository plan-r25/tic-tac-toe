const parent = document.querySelector(".parent");

for (let i = 0; i < 9; i++) {

  const div = document.createElement("button");
    div.classList.add("item", `box${i}`);
  let p = document.createElement("p");
  // p.textContent = i;
  div.appendChild(p);
  parent.appendChild(div);
  
  div.addEventListener("click", (e) => {
    if(e.target.className) {
      p.style.background = "blue";
      div.disabled = true;
      
    }
    console.log("you cliked:", e.target.className);
  })
}