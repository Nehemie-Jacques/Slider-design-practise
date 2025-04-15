const buttons = document.querySelectorAll(".chevron");
const slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide(direction) {
    slides[index].classList.remove("active");

    index += direction;
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides[index].classList.add("active");
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const direction = e.target.id === "next" ? 1 : -1;
        changeSlide(direction);
    });
});

setInterval(() => changeSlide(1), 3000);
