document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "image/iphone_2.jpg",
        "image/iphone_1.jpg",
        // Add more images here
    ];

    // Get all sections
    const sections = document.querySelectorAll(".content-section");

    // Function to change image
    function changeImage(slideshowImg, index) {
        slideshowImg.style.opacity = 0;
        setTimeout(() => {
            slideshowImg.src = images[index];
            slideshowImg.style.opacity = 1;
        }, 3000);
    }

    // Setup auto-slide functionality (every 3 seconds)
    let currentIndex = 0;
    setInterval(() => {
        sections.forEach((section) => {
            const slideshowImg = section.querySelector(".slideshow-img");
            if (slideshowImg) {
                currentIndex = (currentIndex + 1) % images.length;
                changeImage(slideshowImg, currentIndex);
            }
        });
    }, 3000); // Auto-slide every 3 seconds

    // Event listener for next and previous buttons
    sections.forEach((section, index) => {
        const nextBtn = section.querySelector(".arrow-right");
        const prevBtn = section.querySelector(".arrow-left");
        const slideshowImg = section.querySelector(".slideshow-img");

        nextBtn.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % images.length;
            changeImage(slideshowImg, currentIndex);
        });

        prevBtn.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            changeImage(slideshowImg, currentIndex);
        });
    });
});
