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

    // Dark Mode Logic
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Fungsi untuk set tema
    const setTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', theme);
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.contains('dark-mode');
            setTheme(isDark ? 'light' : 'dark');
        });
    }

    // Scroll Reveal (Intersection Observer) Logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Hentikan observasi setelah muncul agar lebih ringan
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px' // Memicu animasi sedikit sebelum elemen terlihat penuh
    });

    document.querySelectorAll('[class*="reveal"]').forEach((el) => observer.observe(el));
});

// Loader Logic - Runs when everything (images, etc.) is fully loaded
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('loader-hidden');
    }
});