const grid = document.querySelector("#grid-box");
const gridSquare = document.querySelector(".grid-square");
let range = document.getElementById("grid-size");
let rangeInput = document.querySelector("#range-input");

function createGrid(value) {
  for (let i = 0; i < value * value; i++) {
		rangeInput.textContent = `${parseInt(range.value)} x ${parseInt(range.value)}`;
    const gridSquareDiv = document.createElement("div");
    gridSquareDiv.className = "grid-square";
    gridSquareDiv.textContent = "";
    grid.appendChild(gridSquareDiv);
  }

  grid.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${value}), 1fr)`;
}

createGrid(parseInt(range.value));

range.addEventListener("input", () => {
  grid.textContent = "";
  createGrid(parseInt(range.value));
});
