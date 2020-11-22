/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll('section');
let navLnksDomFrg = document.createDocumentFragment();
let navbarList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
*/

function smoothScroll(navlink) {
    let targetId = navlink.getAttribute('href');
    let targetTopOff = (document.getElementById(targetId).offsetTop - 50);
    let distance = targetTopOff - window.pageYOffset;
    scrollBy({ top: distance, behavior: 'smooth' });
}
function chageActiveSec() {
    if (window.pageYOffset >= sections.item(2).offsetTop -100) {
         $(sections.item(2)).siblings().removeClass('active');
        sections.item(2).classList.add('active');
    }else if (window.pageYOffset >= sections.item(1).offsetTop -100) {
        $(sections.item(1)).siblings().removeClass('active');
        sections.item(1).classList.add('active');
    }else if (window.pageYOffset >= sections.item(0).offsetTop -100) {
        $(sections.item(0)).siblings().removeClass('active');
        sections.item(0).classList.add('active');
    }
}
sections.forEach(element => {
    let navLnk = document.createElement('li');
    navLnk.innerHTML = `<a class="menu__link" href="${element.id}">${element.id}</a>`;
    navLnk.firstElementChild.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); smoothScroll(e.target) });
    navLnksDomFrg.append(navLnk);
});
window.onload = chageActiveSec();
navbarList.append(navLnksDomFrg);
window.addEventListener('scroll' , function () {
    chageActiveSec();
} )

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


