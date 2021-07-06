// HAMBURGER NAVBAR
const hamburger = document
  .querySelector(".hamburger")
  .addEventListener("click", () => {
    const moboNav = document.querySelector(".mob_nav");
    const hamButton = document.querySelector(".hamButton");
    hamButton.classList.toggle("hamAnimation");
    hamButton.classList.toggle("hamOutAnimation");
    moboNav.classList.toggle("navOpenAnimation");
    moboNav.classList.toggle("hide_mobo_nav");
    moboNav.classList.toggle("fade-in");
    moboNav.classList.toggle("fade-out");
    document.body.classList.toggle("noscroll");
  });

console.log(hamburger)