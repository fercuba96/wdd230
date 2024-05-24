const url = 'https://fercuba96.github.io/wdd230/chamber/data/members.json';
const companies = document.querySelector('#directory');
async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.peruvian_comp);
}

const displayCompanies = (per_companies) => {
    per_companies.forEach((per_company) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // fill in the blank
        let portrait = document.createElement('img');
        let dateofbirth = document.createElement('p');
        let placeofbirth = document.createElement('ul');

        fullName.textContent = `${per_company.name} ${per_company.lastname}`;
        dateofbirth.textContent = `Date of birth: ${per_company.birthdate}`;
        placeofbirth.textContent = `Place of birth: ${per_company.birthplace}`;

        portrait.setAttribute('src', per_company.imageurl);
        portrait.setAttribute('alt', `Portrait of ${per_company.name} ${per_company.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(dateofbirth);
        card.appendChild(placeofbirth);


        companies.appendChild(card);
    });
}

getDirectoryData();