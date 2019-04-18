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
    document.querySelector('#light-button')
        .addEventListener('click', lightTheme);
    
    document.querySelector('#dark-button')
        .addEventListener('click', darkTheme);

    document.querySelector('#lake-button')
        .addEventListener('click', lakeTheme);
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

    document.querySelector('#homePage').classList.add('d-none');
    document.querySelector('#bioPage').classList.add('d-none');
    document.querySelector('#carePage').classList.add('d-none');
}

// This function toggles the theme of the page's layout.
function lightTheme(event){
    event.preventDefault();
    let sideBar = document.querySelector('.sidebar-home');
    let headBar = document.querySelector('.head');
    let content = document.querySelector('.content');
    let footer = document.querySelector('.footer');
    clearTheme();

    headBar.classList.add('headerBar-light');
    sideBar.classList.add('sidebar-light');
    content.classList.add('content-light');
    footer.classList.add('footer-light');
}

function darkTheme(event){
    event.preventDefault();
    let sideBar = document.querySelector('.sidebar-home');
    let headBar = document.querySelector('.head');
    let content = document.querySelector('.content');
    let footer = document.querySelector('.footer');
    clearTheme();

    headBar.classList.add('headerBar-dark');
    sideBar.classList.add('sidebar-dark');
    content.classList.add('content-dark');
    footer.classList.add('footer-dark');
}
function lakeTheme(event){
    event.preventDefault();
    let sideBar = document.querySelector('.sidebar-home');
    let headBar = document.querySelector('.head');
    let content = document.querySelector('.content');
    let footer = document.querySelector('.footer');
    clearTheme()
    headBar.classList.add('headerBar-lake');
    sideBar.classList.add('sidebar-lake');
    content.classList.add('content-lake');
    footer.classList.add('footer-lake');
}

// This function clears out classes to prevent accidental stacking.
function classCleaner(){
    document.querySelector('#homePage').classList.remove('d-none');
    document.querySelector('#carePage').classList.remove('d-none');
    document.querySelector('#bioPage').classList.remove('d-none');
    document.querySelector('#aboutPage').classList.remove('d-none');
}

// This function clears theme class names seperately to prevent accidental stacking.
function clearTheme(){
    let sideBar = document.querySelector('.sidebar-home');
    let headBar = document.querySelector('.head');
    let content = document.querySelector('.content');
    let footer = document.querySelector('.footer');
    // sidebars
    if(sideBar.classList.contains('sidebar-light')){
        sideBar.classList.remove('sidebar-light');
    }
    if(sideBar.classList.contains('sidebar-dark')){
        sideBar.classList.remove('sidebar-dark');
    }
    if(sideBar.classList.contains('sidebar-lake')){
        sideBar.classList.remove('sidebar-lake');
    }
    // content area
    if(content.classList.contains('content-light')){
        content.classList.remove('content-light');
    }
    if(content.classList.contains('content-dark')){
        content.classList.remove('content-dark');
    }
    if(content.classList.contains('content-lake')){
        content.classList.remove('content-lake');
    }
    // header
    if(headBar.classList.contains('headerBar-light')){
        headBar.classList.remove('headerBar-light');
    }
    if(headBar.classList.contains('headerBar-dark')){
        headBar.classList.remove('headerBar-dark');
    }
    if(headBar.classList.contains('headerBar-lake')){
        headBar.classList.remove('headerBar-lake');
    }
    // footers
    if(footer.classList.contains('footer-light')){
    footer.classList.remove('footer-light');
    }
    if(footer.classList.contains('footer-dark')){
    footer.classList.remove('footer-dark');
    }
    if(footer.classList.contains('footer-lake')){
    footer.classList.remove('footer-lake');
    }
}