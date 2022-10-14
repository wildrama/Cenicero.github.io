const section = document.querySelector(".rop");

let maxScrollLeft = section.scrollWidth - section.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
intervalo = setInterval(function () {
    rop.scrollLeft = rop.scrollLeft + step;
    if (rop.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (rop.scrollLeft === 0) {
      step = step * -1;
    }
    }, 10);
};

const stop = () => {
    clearInterval(intervalo);
};

section.addEventListener("mouseover", () => {
    stop();
});

section.addEventListener("mouseout", () => {
    start();
});

start();