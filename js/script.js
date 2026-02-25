// -----------------------------
// Scroll Reveal Animation
// -----------------------------

const sections = document.querySelectorAll(".content");

function revealOnScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// Trigger animation if section already visible
revealOnScroll();