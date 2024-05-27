const url = 'https://fercuba96.github.io/wdd230/chamber/data/members.json';
const companies = document.querySelector('#directory');
async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.peruvian_comp);
}

const displayCompanies = (per_companies) => {
    per_companies.forEach((per_company) => {
        let companyinfo = document.createElement('section');
        let compName = document.createElement('h2');
        let portrait = document.createElement('img');
        let detailcomp = document.createElement('p');
        let websitcomp = document.createElement('ul');

        compName.textContent = `${per_company.name}`;
        detailcomp.textContent = `${per_company.address} - ph#: ${per_company.phone} - Membership: ${per_company.membership_level}`;
        websitcomp.textContent = `${per_company.website}`;

        portrait.setAttribute('src', per_company.image);
        portrait.setAttribute('alt', `Portrait of ${per_company.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '150');

        companyinfo.appendChild(compName);
        companyinfo.appendChild(portrait);
        companyinfo.appendChild(detailcomp);
        companyinfo.appendChild(websitcomp);


        companies.appendChild(companyinfo);
    });
}

getDirectoryData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
