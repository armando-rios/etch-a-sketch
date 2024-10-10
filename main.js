const $ = (value) => document.querySelector(value);
const $$ = (value) => document.querySelectorAll(value);

const container = $(".container");
const rowInput = $("#rows");
const rowSubmit = $("#rows-submit");

let rows;

// funcion para obtener el numero de filas
rowSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    rows = parseInt(rowInput.value) ** 2;
    for (let index = 0; index < rows; index++) {
        container.innerHTML += `<div class="paint" id="paint"></div>`;
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
    const paint = $$("#paint");
    paint.forEach((element) => {
        element.classList.remove("paintColor");
    });
});
