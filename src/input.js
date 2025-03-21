const buttons = document.querySelectorAll(".chevron");
const slides = document.querySelectorAll(".slide");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const calcNextSlide = e.target.id === "next" ? 1 : -1 ;
        const slideActive = document.querySelector(".active");

        newIndex = calcNextSlide + [...slides].indexOf(slideActive);

        if (newIndex < 0) newIndex = [...slides].length - 1;
        if (newIndex >= [...slides].length) newIndex = 0;
        slides[newIndex].classList.add("active");

        slideActive.classList.remove("active");
    });
});

/* setInterval(() => changeSlide(1), 2000);

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const direction = e.target.id === "next" ? 1 : -1;
        changeSlide(direction);
    });
}); */