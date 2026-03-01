function toggleLanguageIcon() {
    document.getElementById('de_active')?.classList.toggle('dNone');
    document.getElementById('en_active')?.classList.toggle('dNone');
}


// document.addEventListener('DOMContentLoaded', function () {
//     let projectContainer = document.querySelector('.project_container');

//     if (projectContainer) {
//         projectContainer.addEventListener('mouseover', function () {
//             console.log("maus ist über dem element");

//             document.getElementById('overlay')?.classList.remove('dNone');
//             document.getElementById('overlay')?.classList.add('overlay');
//             document.getElementById('projectImg')?.classList.remove('project-container-img');
//             document.getElementById('projectImg')?.classList.add('zoomed');
//         });

//         projectContainer.addEventListener('mouseout', function () {
//             document.getElementById('overlay')?.classList.add('dNone');
//             document.getElementById('overlay')?.classList.remove('overlay');
//             document.getElementById('projectImg')?.classList.remove('zoomed');
//             document.getElementById('projectImg')?.classList.add('project-container-img');
//         });
//     }
// });