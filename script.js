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
let toolbar = document.querySelector("#toolbar");
let paintColor = document.getElementById("paint-color");
let color = paintColor.value;
let randomColor = document.getElementById("random-color");
let grayscale = document.getElementById("grayscale");
const eraser = document.getElementById("eraser");
let range = document.getElementById("grid-size");
const rangeInput = document.querySelector("#range-input");
const button = document.querySelector("#clear");

function createGrid(value) {
  for (let i = 0, j = 1; i < value * value; i++, j++) {
    rangeInput.textContent = `${parseInt(range.value)} x ${parseInt(
      range.value
    )}`;
    const gridSquareDiv = document.createElement("div");
    gridSquareDiv.className = "grid-square";
    gridSquareDiv.setAttribute("onMouseEnter", "handleMouseEnter(event)");
    gridSquareDiv.style.filter = "brightness(100%)";
    gridSquareDiv.textContent = "";
    grid.appendChild(gridSquareDiv);
  }

  grid.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${value}), 1fr)`;
};

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function increaseBrightness(event) {
  if (event.target.style.filter === "brightness(100%)") {
    event.target.style.filter = "brightness(90%)";
  } else if (event.target.style.filter === "brightness(90%)") {
      event.target.style.filter = "brightness(80%)";
  } else if (event.target.style.filter === "brightness(80%)") {
      event.target.style.filter = "brightness(70%)";
  } else if (event.target.style.filter === "brightness(70%)") {
      event.target.style.filter = "brightness(60%)";
  } else if (event.target.style.filter === "brightness(60%)") {
      event.target.style.filter = "brightness(50%)";
  } else if (event.target.style.filter === "brightness(50%)") {
      event.target.style.filter = "brightness(40%)";
  } else if (event.target.style.filter === "brightness(40%)") {
      event.target.style.filter = "brightness(30%)";
  } else if (event.target.style.filter === "brightness(30%)") {
      event.target.style.filter = "brightness(20%)";
  } else if (event.target.style.filter === "brightness(20%)") {
    event.target.style.filter = "brightness(10%)";
  } else {
    event.target.style.filter = "brightness(0%)";
  }
};

function handleMouseEnter(event) {
  if (randomRadio.checked === true) {
    let randomColor = getRandomColor();
    event.target.style.filter = "brightness(100%)";
    event.target.style.backgroundColor = `${randomColor}`;
  } else if (grayscaleRadio.checked === true) {
    increaseBrightness(event);    
  } else if (eraserRadio.checked === true) {
    event.target.style.filter = "brightness(100%)";
    event.target.style.backgroundColor = "white";
  } else {
    event.target.style.filter = "brightness(100%)";
    event.target.style.backgroundColor = `${color}`;
  }
};

range.addEventListener("input", () => {
  grid.textContent = "";
  createGrid(parseInt(range.value));
});

const randomRadio = document.querySelector("input[name=random]");
const grayscaleRadio = document.querySelector("input[name=grayscale]");
const eraserRadio = document.querySelector("input[name=eraser]");

paintColor.addEventListener("click", () => {
  color = paintColor.value;
  randomRadio.checked = false;
  grayscaleRadio.checked = false;
  eraserRadio.checked = false;
});

randomRadio.addEventListener("change", () => {
  if (randomRadio.checked === true) {
    grayscaleRadio.checked = false;
    eraserRadio.checked = false;
  }
});

grayscaleRadio.addEventListener("change", () => {
  if (grayscaleRadio.checked === true) {
    randomRadio.checked = false;
    eraserRadio.checked = false;
  }
});

eraserRadio.addEventListener("change", () => {
  if (eraserRadio.checked === true) {
    randomRadio.checked = false;
    grayscaleRadio.checked = false;
  }
});

button.addEventListener("click", () => {
  grid.textContent = "";
  createGrid(parseInt(range.value));
});

setInterval(function() {
  toolbar.style.borderColor = getRandomColor();
},2000);

createGrid(parseInt(range.value));