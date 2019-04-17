window.onload = init;

function init(){
    // header button event listeners
    document.querySelector('#home')
        .addEventListener('click', displayHome);

    document.querySelector('#care')
        .addEventListener('click', displayCare);

    document.querySelector('#biology')
        .addEventListener('click', displayBio);

    document.querySelector('#about')
        .addEventListener('click', displayAbout);

    // Theme selection event listeners
    document.querySelector('#')
        .addEventListener('change', )
    
}
// These functions toggle the content displayed on the page
function displayHome(event){
    event.preventDefault();
    classCleaner();

    document.querySelector('#carePage').classList.add = 'd-none';
    document.querySelector('#bioPage').classList.add = 'd-none';
    document.querySelector('#aboutPage').classList.add = 'd-none';
}

function displayCare(event){
    event.preventDefault();
    classCleaner();

    document.querySelector('#homePage').classList.add = 'd-none';
    document.querySelector('#bioPage').classList.add = 'd-none';
    document.querySelector('#aboutPage').classList.add = 'd-none';
}

function displayBio(event){
    event.preventDefault();
    classCleaner();

    document.querySelector('#homePage').classList.add = 'd-none';
    document.querySelector('#carePage').classList.add = 'd-none';
    document.querySelector('#aboutPage').classList.add = 'd-none';
}

function displayAbout(event){
    event.preventDefault();
    classCleaner();

    document.querySelector('#homePage').classList.add = 'd-none';
    document.querySelector('#bioPage').classList.add = 'd-none';
    document.querySelector('#carePage').classList.add = 'd-none';
}

// This function toggles the theme of the page's layout.


// This function clears out classes to prevent accidental stacking.
function classCleaner(){
    document.querySelector('#homePage').classList.remove = 'd-none';
    document.querySelector('#carePage').classList.remove = 'd-none';
    document.querySelector('#bioPage').classList.remove = 'd-none';
    document.querySelector('#aboutPage').classList.remove = 'd-none';
}