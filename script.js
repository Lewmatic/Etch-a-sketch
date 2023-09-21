const grid = document.getElementById("grid");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    grid.appendChild(square);
  }
  const clearDiv = document.createElement("div");
  clearDiv.classList.add("clear");
  grid.appendChild(clearDiv);
}

let isMouseDown = false;

function handleMouseOver(event) {
  if (isMouseDown) {
    event.target.classList.add("black-square");
  }
}

const squares = grid.querySelectorAll(".grid-square");

grid.addEventListener("mousedown", () => {
  isMouseDown = true;
});

grid.addEventListener("mouseup", () => {
  isMouseDown = false;
});

squares.forEach((square) => {
  square.addEventListener("mousemove", handleMouseOver);
});
