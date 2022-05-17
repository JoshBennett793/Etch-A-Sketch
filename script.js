const grid = document.querySelector("#grid-box");
let range = document.getElementById("grid-size");


function createGrid(value) {
	console.log(value);
  for (let i = 0; i < value * value; i++) {
		const gridSquare = document.createElement("div");
    gridSquare.className = "grid-square";
    gridSquare.textContent = "";
    grid.appendChild(gridSquare);
  }
	
  grid.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${value}), 1fr)`;
};

function getGridRangeValue() {
	let rangeValue = range.value;
	return parseInt(rangeValue);
}

createGrid(getGridRangeValue());
