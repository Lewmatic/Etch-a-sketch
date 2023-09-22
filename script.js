const grid = document.getElementById("grid");

grid.draggable = false;

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    grid.appendChild(cell);
  }
  const clearDiv = document.createElement("div");
  clearDiv.classList.add("clear");
  grid.appendChild(clearDiv);
}

let isMouseDown = false;

function handleMouseOver(event) {
  event.preventDefault();
  if (isMouseDown) {
    event.target.classList.add("black-cell");
  }
}

const cells = grid.querySelectorAll(".grid-cell");
cells.forEach((cell) => {
  cell.draggable = false;
});

grid.addEventListener("mousedown", () => {
  isMouseDown = true;
});

grid.addEventListener("mouseup", () => {
  isMouseDown = false;
});

cells.forEach((cell) => {
  cell.addEventListener("mousemove", handleMouseOver);
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.classList.remove("black-cell");
  });
});
