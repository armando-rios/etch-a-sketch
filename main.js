const $ = (value) => document.querySelector(value);
const $$ = (value) => document.querySelectorAll(value);

const container = $(".container");
const rowInput = $("#rows");
const rowSubmit = $("#rows-submit");
const changeColor = $("#change-color");
const colorInput = $("#colorInput");

const containerSize = 600;

let rows;

// funcion para cambiar el color
colorInput.addEventListener("submit", (event) => {
  event.preventDefault();
  const paint = $$(".paint");

  paint.forEach((element) => {
    element.addEventListener("mouseover", () => {
      // element.classList.add("paintColor");
      element.style.background = changeColor.value;
    });
  });
  console.log(changeColor.value);
});

// funcion para obtener el numero de filas
rowSubmit.addEventListener("submit", (event) => {
  event.preventDefault();

  container.innerHTML = "";

  rows = parseInt(rowInput.value);
  if (rows > 100) {
    return alert("No puede usar mas de 100");
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
      // element.classList.add("paintColor");
      element.style.background = "red";
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
