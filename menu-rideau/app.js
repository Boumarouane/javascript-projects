let button = document.getElementById("container-button");
let nav = document.getElementById("nav-container");
let close = document.getElementById("close-nav");

button.addEventListener("click", () => {
    nav.style.width = "100%";
});

close.addEventListener("click", () => {
    nav.style.width = "0%";
});

