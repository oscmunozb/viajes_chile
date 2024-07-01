// Cambio de color del navbar (cambio de bg-opacity)
const navbar = document.getElementById("navbar-fixed");
window.onscroll = function funcionNav() {
    if (document.documentElement.scrollTop >= 210) {
        navbar.classList.add("bg-opacity-100");
        navbar.classList.remove("bg-opacity-10");
    }
    else {
        navbar.classList.add("bg-opacity-10");
        navbar.classList.remove("bg-opacity-100");
    }
};

// Tooltip de Bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))