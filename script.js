const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const resizeBtn = document.querySelector(".resize");
const blackBtn = document.querySelector(".black");
const rainbowBtn = document.querySelector(".rainbow");

function randomRgb() {
  return Math.floor(Math.random() * 256);
}

function createCells(size) {
  container.innerHTML = ""; // Clear existing cells
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.className = "div";
    div.style.flex = `0 0 calc(100% / ${size})`;
    container.appendChild(div);
  }
}
createCells(16); // Initial grid size

resizeBtn.addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter new grid size (4-100):"), 10);
  if (isNaN(newSize) || newSize < 4 || newSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  createCells(newSize);
});

rainbowBtn.addEventListener("click", () => {
  container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("div")) {
      event.target.style.backgroundColor = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`; // Set random color with opacity
    }
  });
});

blackBtn.addEventListener("click", () => {
  container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("div")) {
      event.target.style.backgroundColor = `rgb(${0}, ${0}, ${0})`; // Set to black
    }
  });
});

resetBtn.addEventListener("click", () => {
  const divs = document.querySelectorAll(".div");
  divs.forEach((div) => {
    div.style.backgroundColor = "";
  });
});
