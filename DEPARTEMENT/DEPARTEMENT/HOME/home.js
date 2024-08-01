// Selection de tous les elements 'a' se trouvant dans 'nav' de 'header-center' et les affecter dans la constante navLinks

const navLinks = document.querySelectorAll('.header-center nav a');

// Pour chaque element (forEach), ajouter un ecouteur d'événements de clic(click)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Appliquer la classe 'active' au lien clique et la retirer des autres liens
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});
