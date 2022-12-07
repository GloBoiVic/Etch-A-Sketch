const container = document.getElementById("container");

function createGrid(rows, columns) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-column", columns);
  // console.log(container);
  // console.log(rows);
  // console.log(columns);
  for (i = 0; i < rows * columns; i++) {
    let square = document.createElement("div");
    // square.innerText = (i + 1); //labels the squares... remove when not needed
    container.appendChild(square).className = "grid-item";
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
      // console.log(square)
    });
  }
}

createGrid(16, 16);
