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
        let dateofbirth = document.createElement('p');
        let placeofbirth = document.createElement('ul');

        compName.textContent = `${per_company.name}`;
        dateofbirth.textContent = `Date of birth: ${per_company.birthdate}`;
        placeofbirth.textContent = `Place of birth: ${per_company.birthplace}`;

        portrait.setAttribute('src', per_company.image);
        portrait.setAttribute('alt', `Portrait of ${per_company.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        companyinfo.appendChild(compName);
        companyinfo.appendChild(portrait);
        companyinfo.appendChild(dateofbirth);
        companyinfo.appendChild(placeofbirth);


        companies.appendChild(companyinfo);
    });
}

getDirectoryData();