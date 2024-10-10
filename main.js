const $ = (value) => document.querySelector(value);
const $$ = (value) => document.querySelectorAll(value);

const container = $(".container");
const rowInput = $("#rows");
const rowSubmit = $("#rows-submit");

const containerSize = 650;

let rows;

// funcion para obtener el numero de filas
rowSubmit.addEventListener("submit", (event) => {
  event.preventDefault();

  container.innerHTML = "";

  rows = parseInt(rowInput.value);
    if(rows > 100) {
        return alert("No puede usar mas de 100")
    }
    
  const totalSquares = rows ** 2;

  const squareSize = containerSize / rows;

  for (let index = 0; index < totalSquares; index++) {
    const square = document.createElement("div");
    square.classList.add("paint");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
  const paint = $$(".paint");

  paint.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.classList.add("paintColor");
    });
  });
});

const resetBtn = $("#reset");
resetBtn.addEventListener("click", () => {
  const paint = $$(".paint");
  paint.forEach((element) => {
    element.classList.remove("paintColor");
  });
});
