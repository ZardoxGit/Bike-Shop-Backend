let burgerMenu = document.getElementsByClassName('fa-bars')[0]
let navBar = document.getElementsByClassName('nav-links')[0]

burgerMenu.addEventListener('click',
function () {
    if (navBar.style.display === "none") {
        navBar.style.display = "block"
    } else {
        navBar.style.display = "none";
    }
}
);

/*burgerMenu.addEventListener('click', 
function () {
    navBar.classList.toggle('active');
}

)*/