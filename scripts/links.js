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
            displayLinks(data.wlinks);
        } catch (error) {
            console.error('Fetch error', error);
        }

    }

    const displayLinks = (wlinks) => {
        wlinks.forEach((weeklink) => {
            // Create elements to add to the div.cards element
            let wlist = document.createElement('li');
            let linkname = document.createElement('a');

            // Build the h2 content out to show the prophet's full name
            wlist.textContent = `${weeklink.weeks.week} :`;
            linkname.textContent = `${weeklink.weeks.links.title}`;

            // fill in the blank
            // Build the image portrait by setting all the relevant attributes
            linkname.setAttribute('href', `${weeklink.weeks.links.url}`);

            // Append the section(card) with the created elements
            //fill in the blank
            wlist.appendChild(linkname);

            learnlink.appendChild(wlist);
        }); // end of arrow function and forEach loop
    }
    getLinks();
});