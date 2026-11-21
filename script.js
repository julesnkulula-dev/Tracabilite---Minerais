// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fermer le menu mobile après un clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Filtre de recherche dans le glossaire
const glossaryFilter = document.getElementById('glossaryFilter');
const glossaryItems = document.querySelectorAll('.glossary-item');

glossaryFilter.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    glossaryItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(term) ? 'block' : 'none';
    });
});