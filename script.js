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
const eraser = document.getElementById("eraser");
let range = document.getElementById("grid-size");
const rangeInput = document.querySelector("#range-input");
const button = document.querySelector("#clear");

function createGrid(value) {
  for (let i = 0, j = 1; i < value * value; i++, j++) {
    rangeInput.textContent =
     `${parseInt(range.value)} x ${parseInt(range.value)}`;
    const gridSquareDiv = document.createElement("div");
    gridSquareDiv.className = `grid-square grid-square${j}`;
    gridSquareDiv.setAttribute("onMouseEnter", "handleMouseEnter(event)");
    gridSquareDiv.textContent = "";
    grid.appendChild(gridSquareDiv);
  }

  grid.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${value}), 1fr)`;
}

function handleMouseEnter(event) {
  if (eraserRadio.checked === false) {
    event.target.style.backgroundColor = `${color}`;
    console.log(randomRadio.checked, greyscaleRadio.checked, eraserRadio.checked);
  } else {
      event.target.style.backgroundColor = "white";
      console.log(randomRadio.checked, greyscaleRadio.checked, eraserRadio.checked);
  }
}

createGrid(parseInt(range.value));

range.addEventListener("input", () => {
  grid.textContent = "";
  createGrid(parseInt(range.value));
});

paintColor.addEventListener("input", () => {
  color = paintColor.value;
  randomRadio.checked = false;
  greyscaleRadio.checked = false;
  eraserRadio.checked = false;
});

paintColor.addEventListener("click", () => {
  eraserRadio.checked = false;
});

const randomRadio = document.querySelector("input[name=random]");
const greyscaleRadio = document.querySelector("input[name=greyscale]");
const eraserRadio = document.querySelector("input[name=eraser]");
  
randomRadio.addEventListener("change", () => {
  if (randomRadio.checked === true) {
    greyscaleRadio.checked = false;
    eraserRadio.checked = false;
  }
});
  
greyscaleRadio.addEventListener("change", () => {
  if (greyscaleRadio.checked === true) {
    randomRadio.checked = false;
    eraserRadio.checked = false;
  }
});
  
eraserRadio.addEventListener("change", () => {
  if (eraserRadio.checked === true) {
    randomRadio.checked = false;
    greyscaleRadio.checked = false;
  }
});
  
button.addEventListener("click", () => {
  grid.textContent = "";
  createGrid(parseInt(range.value));
});