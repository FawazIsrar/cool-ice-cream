/* script.js - Scroll-triggered animations & general utilities */

// ===== Scroll reveal animations =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.rightani, .leftani, .bottomani');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
};

// ===== Scroll progress indicator =====
const initScrollProgress = () => {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + '%';
    });
};

// ===== Hero grid images =====
const setHeroGridImages = () => {
    const gridBoxes = document.querySelectorAll('.grid .grid-box');
    const heroImages = [
        'images/hero-grid1.jpg',
        'images/hero-grid2.jpg',
        'images/hero-grid3.jpg',
        'images/hero-grid4.jpg'
    ];
    gridBoxes.forEach((box, i) => {
        if (heroImages[i]) {
            box.style.backgroundImage = `url('${heroImages[i]}')`;
            box.style.backgroundSize = 'cover';
            box.style.backgroundPosition = 'center';
        }
    });
};

// ===== Toast helper (global) =====
window.showToast = function(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.background = type === 'error' ? '#e05c5c' : '#27ae60';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.4s';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
};

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    initScrollProgress();
    setHeroGridImages();
});
