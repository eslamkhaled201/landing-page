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
let toggler = document.querySelector('.toggle-bar');
let navList =document.querySelector('.navbar__list');


document.querySelector('.toggler').addEventListener('click' ,()=>{
    toggler.classList.toggle('toggle');
    if (navList.classList.contains('open')) {
        navList.classList.remove("open")
        navList.classList.add('close');
    }else{
        navList.classList.remove("close")
        navList.classList.add('open');
    }
})

/**
 * End Global Variables
 **/

/** 
 * Begin Main Functions
*/

// build the nav

sections.forEach(element => {
    let navLnk = document.createElement('li');
    navLnk.innerHTML = `<a class="menu__link" href="${element.id}">${element.id}</a>`;
    navLnk.firstElementChild.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); smoothScroll(e.target) });
    navLnksDomFrg.append(navLnk);
    window.addEventListener('scroll' , function () {
        chageActiveSecTo(element);
    })
    window.onload = chageActiveSecTo(element);
});

navbarList.append(navLnksDomFrg);
// Add class 'active' to section when near top of viewport
function chageActiveSecTo(section) {
    if (window.pageYOffset >= section.offsetTop -100) {
         $(section).siblings().removeClass('active');
        $(section).addClass('active');
    }
}

// Scroll to anchor ID using scrollTO event

function smoothScroll(navlink) {
    let targetId = navlink.getAttribute('href');
    let targetTopOff = (document.getElementById(targetId).offsetTop - 50);
    let distance = targetTopOff - window.pageYOffset;
    scrollBy({ top: distance, behavior: 'smooth' });
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


