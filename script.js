document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);
  console.log("hi");
});

function createBoard(size) {
  let sketchBoard = document.querySelector(".sketch-board");

  sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = "salmon";
    sketchBoard.insertAdjacentElement("beforeend", div);
  }
}
