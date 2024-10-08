const $ = (value) => document.querySelector(value);
const $$ = (value) => document.querySelectorAll(value);

const container = $(".container");

const rows = 10 ** 2;

for (let index = 0; index < rows; index++) {
    container.innerHTML += `<div class="paint"></div>`;
}

const paint = $$(".paint");

paint.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.add("paintColor");
    });
    const resetBtn = $("#reset");
    resetBtn.addEventListener("click", () => {
        element.classList.remove("paintColor");
    });
});
