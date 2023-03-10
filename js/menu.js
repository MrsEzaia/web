const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".item__burger");
const closeIcon = document.querySelector(".burger__close");
const menuIcon = document.querySelector(".btn");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = ".icon__burger";
  }
}

hamburger.addEventListener("click", toggleMenu);
