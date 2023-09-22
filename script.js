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

function activateNormalMode(event) {
  event.preventDefault();
  if (isMouseDown) {
    event.target.classList.add("black-cell");
  }
}

function activateEraser(event) {
  event.preventDefault();
  if (isMouseDown) {
    event.target.classList.remove("black-cell");
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
  cell.addEventListener("mousemove", activateNormalMode);
});

const normalMode = document.getElementById("normal-mode");
normalMode.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.addEventListener("mousemove", activateNormalMode);
  });
});

const eraser = document.getElementById("eraser");
eraser.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.removeEventListener("mousemove", activateNormalMode);
    cell.addEventListener("mousemove", activateEraser);
  });
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.classList.remove("black-cell");
  });
});
