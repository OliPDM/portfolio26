function setActiveNav(clickedLink) {
    // Alle aktiven Zustände entfernen
    document.querySelectorAll('.navigations-links').forEach(link => {
        link.classList.remove('active');
    });
    // Angeklickten Link aktivieren
    clickedLink.parentElement.classList.add('active');
    closeModal();
}

function toggleModal() {
    let modal = document.querySelector('.modal');
    let burgerMenu = document.querySelector('#burger_menu');
    modal.classList.toggle('show');
    if (modal.classList.contains('dNone')) {
        modal.classList.remove('dNone');
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    } else {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.classList.add('dNone');
        }, 300);
    }
}

function closeModal(params) {
    let modal = document.querySelector('modal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.classList.add('dNone');
    }, 300);
}