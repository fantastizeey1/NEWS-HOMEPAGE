// Selecting the navigation menu and buttons
const nav = document.querySelector('nav');
const showNavButton = document.getElementById('menu-open');
const closeNavButton = document.getElementById('menu-close');

// Event listener for toggling the navigation menu
showNavButton.addEventListener('click', () => {
    nav.style.display = 'flex';
    showNavButton.style.display = 'none';
    closeNavButton.style.display = 'block';
});

closeNavButton.addEventListener('click', () => {
    nav.style.display = 'none';
    showNavButton.style.display = 'block';
    closeNavButton.style.display = 'none';
});

