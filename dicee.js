const h1 = document.querySelector("h1");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const btn = document.querySelector(".btn");
let random1 = Math.round(Math.random() * 5 + 1);
let random2 = Math.round(Math.random() * 5 + 1);
img1.setAttribute("src", `/images/dice${random1}.png`);
img2.setAttribute("src", `/images/dice${random2}.png`);
if (random1 > random2) {
  h1.textContent = "Player1 Wins🚩";
  console.log("");
} else if (random1 === random2) {
  h1.textContent = "Draw📍";
} else {
  h1.textContent = "Player2 Wins🚩";
}
