// ---------------------------
// FADE-IN LA SCROLL
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


const slogans = [
    "Best Efforts",
    "From 0 to Ultra in 4.5 months",
    "Every km counts",
    "Run, Rest, Repeat"
];

let index = 0;
const sloganElement = document.querySelector(".hero-slogan");

if (sloganElement) {
    setInterval(() => {
        index = (index + 1) % slogans.length;
        sloganElement.innerText = slogans[index];
    }, 4000); // schimbă sloganul la fiecare 4 secunde
}


function scrollToSection(id) {
    const section = document.getElementById(id);
    if(section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}