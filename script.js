window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.gallery-image');

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    document.querySelector('.left-arrow').addEventListener('click', prevImage);
    document.querySelector('.right-arrow').addEventListener('click', nextImage);

    showImage(currentIndex);
    setInterval(nextImage, 3000);
});
