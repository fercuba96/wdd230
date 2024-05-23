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

    if (hamButton) {
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
        });
    }
    const visitsDisplay = document.querySelector(".visits");

    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

    if (visitsDisplay) {
        if (numVisits !== 0) {
            visitsDisplay.textContent = numVisits;
        } else {
            visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
        }
    }
    numVisits++;

    localStorage.setItem("numVisits-ls", numVisits);

    const kp1 = document.querySelector("#password1");
    const kp2 = document.querySelector("#password2");
    const message = document.querySelector('#formmessage');
    if (kp2) {
        kp2.addEventListener("focusout", checkSame);
    }
    function checkSame() {
        if (kp1.value !== kp2.value) {
            message.textContent = "❗Key Phrases DO NOT MATCH!";
            message.style.visibility = "show";
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

    if (range) {
        range.addEventListener('change', displayRatingValue);
        range.addEventListener('input', displayRatingValue);
    }

    function displayRatingValue() {
        if (rangevalue) {
            rangevalue.innerHTML = range.value;
        }
    }

    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');

    const url_home = 'https://api.openweathermap.org/data/2.5/weather?lat=-12.06&lon=-76.94&appid=e1681f168c1a7023a0730ec3ead6d05c&units=imperial';

    async function apiFetch() {
        try {
            const response = await fetch(url_home);
            if (response.ok) {
                const data_home = await response.json();
                displayResults(data_home);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    apiFetch();

    function displayResults(data_home) {
        if (currentTemp && weatherIcon && captionDesc) {
            currentTemp.innerHTML = `${data_home.main.temp}&deg;F`;
            const iconsrc = `https://openweathermap.org/img/w/${data_home.weather[0].icon}.png`;
            let desc = data_home.weather[0].description;
            weatherIcon.setAttribute('src', iconsrc);
            weatherIcon.setAttribute('alt', desc);
            captionDesc.textContent = `${desc}`;
        }
    }
});