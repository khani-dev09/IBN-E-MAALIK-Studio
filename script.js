window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
const lightbox = GLightbox({
    selector: '.glightbox'
});
AOS.init({
    duration: 1000,
    once: true
});
function reveal() {
    let elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});
function reveal() {
    let elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);

// 👇 IMPORTANT: page load pe bhi run karo
reveal();
function filterImages(category) {
    let items = document.querySelectorAll(".item");

    items.forEach(item => {
        if (category === "all") {
            item.style.display = "block";
        } else if (item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
const buttons = document.querySelectorAll(".filter-buttons button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});