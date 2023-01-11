// document.addEventListener("DOMContentLoaded", () => {
//     const nav = document.querySelector(".nav");

//     document.querySelector("#btnNav").addEventListener("click", () => {
//         nav.classList.toggle("nav--open");
//     })

// })

// const hamburger = document.querySelector('.hambuger');
// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle("hidden");
// })


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))