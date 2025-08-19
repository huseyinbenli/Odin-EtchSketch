const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const resizeBtn = document.querySelector(".resize");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.className = "div";
  container.appendChild(div);
}

function randomRgb() {
  return Math.floor(Math.random() * 256);
}

container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("div")) {
    event.target.style.backgroundColor = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
  }
});

resetBtn.addEventListener("click", () => {
  const divs = document.querySelectorAll(".div");
  divs.forEach((div) => {
    div.style.backgroundColor = "";
  });
});
