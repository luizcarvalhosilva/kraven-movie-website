const mediaQuery = window.matchMedia('(max-width: 768px)');
const mobileMenu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector("#menu-icon");

function displayMenu() {    
    mobileMenu.classList.toggle("modal-open");
    menuIcon.classList.toggle("bx-x");
}

function handleWidthChange(e) {
    if(!e.matches) {
        mobileMenu.classList.remove("modal-open");
        menuIcon.classList.remove("bx-x");
    }
}

mediaQuery.addEventListener('change', handleWidthChange);