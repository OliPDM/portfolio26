function init() {
    renderProjects(),
        renderComments(),
        initContactForm(),
        includeHTML()
}

/////// side translation ///////
let currentLanguage = 'en';

function setLanguageDE() {
    currentLanguage = 'de';
    localStorage.setItem('preferredLanguage', 'de');
    translatePage('de');
    if (document.getElementById('comment_img')) {
        renderComments();
    }
    document.getElementById('de_button')?.classList.add('active');
    document.getElementById('en_button')?.classList.remove('active');
}

function setLanguageEN() {
    currentLanguage = 'en';
    localStorage.setItem('preferredLanguage', 'en');
    translatePage('en');
    if (document.getElementById('comment_img')) {
        renderComments();
    }
    document.getElementById('en_button')?.classList.add('active');
    document.getElementById('de_button')?.classList.remove('active');
}

function translatePage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[lang]?.[key];
        if (translation) {
            element.innerHTML = translation;
        }
    });
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        const translation = translations[lang]?.[key];
        if (translation) {
            element.placeholder = translation;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    if (savedLang === 'en') {
        setLanguageEN();
        setLanguageENModal();
    } else {
        setLanguageDE();
        setLanguageDEModal();
    }
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTarget = urlParams.get('scrollTo');
    if (scrollTarget) {
        setTimeout(() => {
            const targetElement = document.getElementById(scrollTarget);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    }
});


/////// Modal ///////

function setLanguageDEModal() {
    currentLanguage = 'de';
    localStorage.setItem('preferredLanguage', 'de');
    translatePage('de');
    if (document.getElementById('comment_img')) {
        renderComments();
    }
    document.getElementById('de_button_modal')?.classList.add('active');
    document.getElementById('en_button_modal')?.classList.remove('active');
}

function setLanguageENModal() {
    currentLanguage = 'en';
    localStorage.setItem('preferredLanguage', 'en');
    translatePage('en');
    if (document.getElementById('comment_img')) {
        renderComments();
    }
    document.getElementById('en_button_modal')?.classList.add('active');
    document.getElementById('de_button_modal')?.classList.remove('active');
}