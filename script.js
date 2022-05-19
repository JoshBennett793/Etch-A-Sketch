// Stylesheet
function getStyleSheet() {
	for (const sheet of document.styleSheets) {
		if (sheet.title === "stylesheet") {
			return sheet;
		}
	}
}
const stylesheet = getStyleSheet();

// Grid
const grid = document.querySelector("#grid-box");
const gridSquare = document.querySelector(".grid-square");

// Toolbar
let paintColor = document.getElementById("paint-color");
let color = paintColor.value;
let randomColor = document.getElementById("random-color");
let greyscale = document.getElementById("greyscale");
let eraser = document.getElementById("eraser");
let range = document.getElementById("grid-size");
let rangeInput = document.querySelector("#range-input");

function createGrid(value) {
  for (let i = 0, j = 1; i < value * value; i++, j++) {
    rangeInput.textContent = `${parseInt(range.value)} x ${parseInt(
      range.value
    )}`;
    const gridSquareDiv = document.createElement("div");
		gridSquareDiv.className = `grid-square grid-square${j}`;
		gridSquareDiv.setAttribute("onMouseOver", "handleMouseOver(event)");
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

paintColor.addEventListener("input", () => {
  color = paintColor.value;
});

function handleMouseOver(event) {
	event.target.style.backgroundColor = `${color}`;
}