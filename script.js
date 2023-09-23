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
    event.target.style.backgroundColor = "black";
  }
}

function activateEraser(event) {
  event.preventDefault();
  if (isMouseDown) {
    event.target.style.backgroundColor = "white";
  }
}

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  const color = `#${hexR}${hexG}${hexB}`;

  return color;
}

function activateRainbowMode(event) {
  event.preventDefault();
  if (isMouseDown) {
    event.target.style.backgroundColor = `${generateRandomColor()}`;
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
    cell.removeEventListener("mousemove", activateEraser);
    cell.removeEventListener("mousemove", activateRainbowMode);
    cell.addEventListener("mousemove", activateNormalMode);
  });
});

const rainbowMode = document.getElementById("rainbow-mode");
rainbowMode.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.removeEventListener("mousemove", activateEraser);
    cell.removeEventListener("mousemove", activateNormalMode);
    cell.addEventListener("mousemove", activateRainbowMode);
  });
});

const eraser = document.getElementById("eraser");
eraser.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.removeEventListener("mousemove", activateNormalMode);
    cell.removeEventListener("mousemove", activateRainbowMode);
    cell.addEventListener("mousemove", activateEraser);
  });
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});
