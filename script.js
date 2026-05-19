document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('open');
        });
    }

    // Scroll Reveal (Intersection Observer) Logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});

// Loader Logic - Runs when everything (images, etc.) is fully loaded
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('loader-hidden');
    }
});