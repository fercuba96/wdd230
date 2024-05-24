document.addEventListener("DOMContentLoaded", function () {

    const baseURL = "https://fercuba96.github.io/wdd230/";
    const linksURL = "https://fercuba96.github.io/wdd230/data/links.json";
    const learnlink = document.querySelector('#learninglinks');
    async function getLinks() {
        try {
            const response = await fetch(linksURL);

            if (!response.ok) {
                throw new Error('Network response is not ok')
            }
            const data = await response.json();
            displayLinks(data.weeks);
        } catch (error) {
            console.error('Fetch error', error);
        }

    }

    const displayLinks = (weeks) => {
        weeks.forEach((week) => {
            // Create a list item for the week
            let weekListItem = document.createElement('li');
            let weekTitle = document.createElement('h3');
            weekTitle.textContent = `${week.week}`;
            weekListItem.appendChild(weekTitle);

            let linksList = document.createElement('ul');

            week.links.forEach((link) => {
                let linkListItem = document.createElement('li');
                let linkElement = document.createElement('a');
                linkElement.textContent = link.title;
                linkElement.setAttribute('href', link.url);
                linkListItem.appendChild(linkElement);
                linksList.appendChild(linkListItem);
            });

            weekListItem.appendChild(linksList);

            learnlink.appendChild(weekListItem);
        });
    }
    getLinks();
});