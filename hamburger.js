function toggleNav() {
    let links = document.querySelector("#primary_nav");
    links.classList.toggle("showNav");
}
let hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", toggleNav);