const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const image = document.getElementById("image");

// when someone clicks the hamburger  menu button
navToggle.addEventListener("click", () =>{
    const visibility = nav.getAttribute("data-visible");
    // if the nav is closed, open it
    if(visibility === "false"){
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true)
    }
    // if the nav is open, close it
    else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false)
    }
})