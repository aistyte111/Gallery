document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("[data-carousel]");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector("[data-carousel-button='prev']");
    const nextButton = document.querySelector("[data-carousel-button='next']");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    prevButton.addEventListener("click", showPrevSlide);
    nextButton.addEventListener("click", showNextSlide);

    // Show the initial slide
    showSlide(currentIndex);
});