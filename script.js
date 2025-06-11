// Dynamic navigation and section switching
const navLinks = document.querySelectorAll('.glass-navbar a');
const sections = document.querySelectorAll('.section');



function showSection(sectionId) {
    sections.forEach(sec => {
        if (sec.id === sectionId) {
            sec.classList.add('active');
        } else {
            sec.classList.remove('active');
        }
    });
    navLinks.forEach(link => {
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = this.dataset.section;
        showSection(section);
        history.replaceState(null, '', `#${section}`);
    });
});

// On page load, show section from hash or default to home
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    showSection(hash);
});

// Handle touch events for better mobile experience
document.addEventListener('touchstart', function(e) {
    if (e.target.closest('.service-card')) {
        e.target.closest('.service-card').style.transform = 'scale(0.98)';
    }
}, { passive: true });

document.addEventListener('touchend', function(e) {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.style.transform = '';
    });
}, { passive: true });
