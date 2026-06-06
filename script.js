const parent = document.querySelector(".parent");

for (let i = 0; i < 9; i++) {

  const div = document.createElement("button");
  div.classList.add("item");
  let p = document.createElement("p");
  p.textContent = i;
  div.appendChild(p);
  parent.appendChild(div);
  
  div.addEventListener("click", (e) => {
    console.log("you cliked:", e.target.textContent);
  })
}