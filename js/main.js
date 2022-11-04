console.log("hello")


// fetch the header and footer and place them in the page

fetch("partials/header.htm")
    .then(response => response.text())
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });
