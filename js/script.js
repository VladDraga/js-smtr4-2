const sliderInput = document.querySelector(".slider__input");
const sliderImage = document.querySelector(".slider__image");

sliderInput.addEventListener("input", _.debounce((event) => {
    sliderImage.style.width = `${event.target.value}px`

}, 400),
);

const box = document.querySelector("#box");
const buttonStart = document.querySelector("#buttonStart");

buttonStart.addEventListener("click", secondExercise);


function secondExercise() {
    document.addEventListener("mousemove", _.debounce((event) => {
        const x = event.clientX;
        const y = event.clientY;

        box.style.left = `${x}px`;
        box.style.top = `${y}px`;
    }, 100),
    );
}

