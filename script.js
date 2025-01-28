// Toggle Theme
const toggleTheme = document.querySelector('.toggle-theme');
const body = document.body;

toggleTheme.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Save mode in local storage
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
});

// Load saved theme
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    body.classList.add(savedTheme);
});


const header = document.querySelector('.header');
const goToTopButton = document.createElement('button');
let lastScrollY = window.scrollY;

// Add "Go to Top" button to the document
goToTopButton.classList.add('go-to-top');
goToTopButton.innerHTML = '↑';
document.body.appendChild(goToTopButton);

// Show/Hide header on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        header.style.top = '-100px'; // Hide header
    } else {
        header.style.top = '0'; // Show header
    }
    lastScrollY = window.scrollY;

    // Show/Hide "Go to Top" button
    if (window.scrollY > 300) {
        goToTopButton.style.display = 'block';
    } else {
        goToTopButton.style.display = 'none';
    }
});

// Scroll to top when the button is clicked
goToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
