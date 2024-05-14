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
        main.style.background = "white";
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

const kp1 = document.querySelector("#password1");
const kp2 = document.querySelector("#password2");
const message = document.querySelector('#formmessage');

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (kp1.value !== kp2.value) {
        message.textContent = "❗Passwords do not match!";
        message.style.visibility = "visible";
        kp2.style.backgroundColor = "#fff0f3";
        kp2.value = "";
        kp2.focus();
    } else {
        message.style.display = "none";
        kp2.style.backgroundColor = "#fff";
        kp2.style.color = "#000";
    }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}