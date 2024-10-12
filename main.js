const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const container = $(".container");
const rowInput = $("#rows");
const rowSubmit = $("#rows-submit");
const changeColor = $("#change-color");
const colorInput = $("#colorInput");
const resetBtn = $("#reset")
const containerSize = 600;
let rows;

const addPaintListeners = () => {
  $$(".paint").forEach((element) => {
    element.onmouseover = () => (element.style.background = changeColor.value);
  });
};

const dibujarCuadros = (rows) => {
  if (rows > 100 || rows < 1)
    return alert("No puede usar mas de 100 o menos de 1");
    container.innerHTML = ""
  const totalSquares = rows ** 2;
  const squareSize = `${containerSize / rows}px`;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("paint");
    square.style.width = squareSize;
    square.style.height = squareSize;
    container.appendChild(square);
  }
  addPaintListeners();
};

rowSubmit.onsubmit = (e) => {
  e.preventDefault();
  dibujarCuadros(parseInt(rowInput.value));
};

colorInput.onsubmit = (e) => e.preventDefault();

resetBtn.onclick = () =>
  $$(".paint").forEach((el) => (el.style.background = ""));

dibujarCuadros(10);
