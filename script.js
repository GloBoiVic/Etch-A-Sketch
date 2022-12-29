let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);
  let draw = document.querySelector("#draw");
  draw.style.color = "white";
  draw.innerHTML = "Click to start sketching";

  document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.tagName != "BUTTON") {
      click = !click;
      if (click) {
        draw.style.color = "#7FFF00";
        draw.innerHTML = "Sketch Activated!";
      } else {
        draw.innerHTML = "Click to resume sketching";
        draw.style.color = "white";
      }
    }
  });

  let btnPopup = document.querySelector("#popup");
  btnPopup.addEventListener("click", function () {
    let size = getSize();
    createBoard(size);
  });
});

function createBoard(size) {
  let sketchBoard = document.querySelector(".sketch-board");

  sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    sketchBoard.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let userInput = prompt("Pick a board size");
  let message = document.querySelector("#message");
  if (userInput == "") {
    message.innerHTML = "Please enter a number";
  } else if (userInput < 0 || userInput > 100) {
    message.innerHTML = "Provide a number between 1 and 100";
  } else {
    return userInput;
  }
}

function colorDiv() {
  if (click) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = "black";
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function resetBoard() {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => {
    div.style.backgroundColor = "";
  });
}
