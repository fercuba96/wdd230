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
    document.getElementById("contactinfo").textContent = "Chamber:  +51 934 163 838 / fercuba96@gmail.com";

    document.getElementById("projectinfo").textContent = "WDD230 Course project";


    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });


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

    const temponeday = document.querySelector('#temp-oneday');
    const temptwoday = document.querySelector('#temp-twoday');
    const tempthreeday = document.querySelector('#temp-threeday');

    const url_forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=e1681f168c1a7023a0730ec3ead6d05c&units=imperial'

    async function apiFetchone() {
        try {
            const response = await fetch(url_forecast);
            if (response.ok) {
                const data_forecast = await response.json();
                displayWeather(data_forecast);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    apiFetchone();

    function displayWeather(data_forecast) {
        if (temponeday && temptwoday && tempthreeday) {
            temponeday.innerHTML = `${data_forecast.list[8].main.temp}&deg;F`;
            temptwoday.innerHTML = `${data_forecast.list[16].main.temp}&deg;F`;
            tempthreeday.innerHTML = `${data_forecast.list[24].main.temp}&deg;F`;

        }
    }


    const url = 'https://fercuba96.github.io/wdd230/chamber/data/members.json';
    const companiesContainer = document.querySelector('#spotlight');

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    async function getDirectoryData() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            const filteredCompanies = data.peruvian_comp.filter(company =>
                company.membership_level === "Gold" || company.membership_level === "Silver"
            );
            const shuffledCompanies = shuffle(filteredCompanies);
            const numToDisplay = 3;
            const companiesToDisplay = shuffledCompanies.slice(0, numToDisplay);
            companiesContainer.innerHTML = '';
            companiesToDisplay.forEach(company => {
                companiesContainer.appendChild(createCompanyCard(company));
            });
        } catch (error) {
            console.error('Error when fetching', error);
        }
    }

    function createCompanyCard(company) {
        const card = document.createElement('div');
        card.className = 'company-card';

        const name = document.createElement('h3');
        name.textContent = company.name;

        const image = document.createElement('img');
        image.src = company.image;
        image.alt = company.name;

        const address = document.createElement('p');
        address.textContent = company.address;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${company.phone}`;

        const membership = document.createElement('p');
        membership.textContent = `Membership: ${company.membership_level}`;

        const website = document.createElement('a');
        website.href = company.website;
        website.target = '_blank';
        website.textContent = `${company.website}`;

        const otherInfo = document.createElement('p');
        otherInfo.textContent = company.other_information;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(website);
        card.appendChild(otherInfo);

        return card;
    }

    getDirectoryData();

    (function (window) {

        var dismissibleItem = function (el, type, value) {

            var html = '<span>' + value + ' <button type="button" class="close">X</button></span>';

            el.removeAttribute('data-component');
            el.removeAttribute('data-value');
            el.removeAttribute('data-type');

            el.classList.add('dismissible', 'dismissible-' + type);

            el.innerHTML = html;

            el.querySelector('.close').addEventListener('click', function (event) {
                var height = el.offsetHeight,
                    opacity = 1,
                    timeout = null;
                function reduceHeight() {
                    height -= 2;
                    el.setAttribute('style', 'height: ' + height + 'px; opacity: ' + opacity);
                    if (height <= 0) {
                        window.clearInterval(timeout);
                        timeout = null;
                        el.remove();
                    }
                }
                function fade() {
                    opacity -= .1;
                    el.setAttribute('style', 'opacity: ' + opacity);
                    if (opacity <= 0) {
                        window.clearInterval(timeout);
                        timeout = window.setInterval(reduceHeight, 1);
                    }
                }
                timeout = window.setInterval(fade, 25);
            });

        };

        var dismissibles = Array.prototype.slice.call(document.querySelectorAll('[data-component="dismissible-item"]'));
        if (dismissibles.length) {
            var today = new Date().getDay();
            if (today >= 1 && today <= 3) {
                for (var i = 0; i < dismissibles.length; i++) {
                    var type = dismissibles[i].getAttribute('data-type'),
                        value = dismissibles[i].getAttribute('data-value');
                    new dismissibleItem(dismissibles[i], type, value);
                }
            }
        }

    })(window)

});
