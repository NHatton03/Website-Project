document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("menuButton");
    const dropdown = document.querySelector(".dropdown");

    console.log(button, dropdown)

    if (!button || !dropdown) return;

    button.addEventListener("click", () => {
        dropdown.classList.toggle("show");
    });
});