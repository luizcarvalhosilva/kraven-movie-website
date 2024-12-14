function displayMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuIcon = document.querySelector("#menu-icon");
    if (mobileMenu.classList.contains("modal-open")) {
        mobileMenu.classList.toggle("modal-open");
        menuIcon.classList.toggle("bx-x");
    } else {
        mobileMenu.classList.toggle("modal-open");
        menuIcon.classList.toggle("bx-x");
    }
}