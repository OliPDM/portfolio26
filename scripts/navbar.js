function setActiveNav(clickedLink) {
    // Alle aktiven Zustände entfernen
    document.querySelectorAll('.navigations-links').forEach(link => {
        link.classList.remove('active');
    });
    // Angeklickten Link aktivieren
    clickedLink.parentElement.classList.add('active');
}