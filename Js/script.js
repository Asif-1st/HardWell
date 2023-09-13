// active nav bar

var menu = document.querySelector("#menu");
var nav = document.querySelector("#nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-xmark");
  nav.classList.toggle("nav-active");
});

window.onscroll = () => {
    nav.classList.remove("nav-active");
    menu.classList.remove("fa-xmark");
}




