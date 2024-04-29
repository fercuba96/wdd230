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