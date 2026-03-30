// ---------------------------
// FADE-IN LA SCROLL SMOOTH
// ---------------------------
window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-in").forEach(card => {
        let position = card.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            card.classList.add("show");
        }
    });
});

// ---------------------------
// SLIDE SLOGAN INTERACTIV CU FADE
// ---------------------------
const slogans = [
    "Best Efforts",
    "From 0 to Ultra in 4.5 months",
    "Every km counts",
    "Run, Rest, Repeat"
];

let index = 0;
const sloganElement = document.querySelector(".hero-slogan");

if (sloganElement) {
    function changeSlogan() {
        // Fade-out
        sloganElement.style.opacity = 0;

        setTimeout(() => {
            // Schimb text
            sloganElement.innerText = slogans[index];
            // Fade-in
            sloganElement.style.opacity = 1;
            // Următorul slogan
            index = (index + 1) % slogans.length;
        }, 500); // jumătate de secundă fade
    }

    // Rulează la interval
    setInterval(changeSlogan, 4000);
}

// ---------------------------
// SCROLL TO SECTIONS
// ---------------------------
function scrollToSection(id) {
    const section = document.getElementById(id);
    if(section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}