document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();

    const copyrightYear = document.getElementById("copyright");
    if (copyrightYear) {
        copyrightYear.textContent = "© " + currentYear;
    }

    const lastModified = document.lastModified;

    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = "Last modified: " + lastModified;
    }
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#263037";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});