document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");

    let currentIndex = 0;

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        actualizarCarrousel();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        actualizarCarrousel();
    });

    function actualizarCarrousel() {
        images.forEach((img, index) => {
            if (index === currentIndex) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    }

    actualizarCarrousel();
});