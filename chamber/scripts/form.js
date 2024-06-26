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

    document.getElementById("projectinfo").textContent = "WDD230 Course project";

    document.getElementById("contactinfo").textContent = "Chamber:  +51 934 163 838 / fercuba96@gmail.com";

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    const joinForm = document.getElementById('joinChamber');
    const submissionTimeDiv = document.getElementById('timestamp');

    joinForm.addEventListener('submit', function (event) {
        if (joinForm.checkValidity()) {

            const now = new Date();
            const dateTimeString = now.toLocaleString();


            submissionTimeDiv.textContent = `Form submitted on: ${dateTimeString}`;
        } else {
            event.preventDefault(); // Prevent submission if form is not valid

        }
    });

});

