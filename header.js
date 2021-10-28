const menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".main-container");


menu.addEventListener("click", () => {
    container.classList.toggle("active");
});
