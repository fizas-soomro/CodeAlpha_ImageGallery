const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const searchInput = document.getElementById("searchInput");
const filters = document.querySelectorAll(".filter");
const modeToggle = document.getElementById("modeToggle");

let currentIndex = 0;

/* Lightbox open */
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        openLightbox(img.src);
    });
});

function openLightbox(src) {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
}

/* Close */
closeBtn.onclick = () => {
    lightbox.style.display = "none";
};

/* Next */
nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
};

/* Prev */
prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
};

/* Filter */
filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        btn.classList.add("active");

        const value = btn.dataset.filter;

        images.forEach(img => {
            if (value === "all" || img.dataset.category === value) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    });
});

/* Search */
searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    images.forEach(img => {
        const title = img.dataset.title.toLowerCase();
        img.style.display = title.includes(value) ? "block" : "none";
    });
});