const navLinks = document.querySelectorAll('.header-center nav a');
navLinks.forEach(link => {
    link.addEventListner('click', () => {
        navLinks.forEach(navLink.classList.remove('active'));
        link.classList.add('active');


    })
});
// Fonction pour activer le bouton du niveau sélectionné
  //cilck sur button du niveaux 
function toggleLevel(level) {
    const buttons = document.querySelectorAll('.level button');
    buttons.forEach(button => {
        if (button.textContent === level) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
    // Fonction pour filtrer les listes d'étudiants en fonction de la recherche
function searchFiles() {
    // Récupérer le texte de recherche saisi par l'utilisateur
    const searchText = document.getElementById('searchInput').value.toLowerCase();

    // Afficher toutes les listes
    const allLists = document.querySelectorAll('.Container .List');
    allLists.forEach(list => {
        list.style.display = 'block';
    });

    // Filtrer et afficher uniquement les listes contenant le texte de recherche
    const filteredLists = document.querySelectorAll('.Container .List p');
    filteredLists.forEach(list => {
        const listText = list.textContent.toLowerCase();
        const parentList = list.closest('.List');
        if (!listText.includes(searchText)) {
            parentList.style.display = 'none';
        }
    });
}
// Événement chargé lorsque le document HTML est entièrement chargé
document.addEventListener('DOMContentLoaded', function() {
    const telechargerButtons = document.querySelectorAll('.telecharger'); // Utiliser querySelectorAll pour obtenir tous les éléments
    const googleSheetUrl ='./liste.html';

    telechargerButtons.forEach(function(button) {
        button.addEventListener('click', function(event) { // Ajouter l'écouteur d'événements sur chaque bouton de téléchargement
            event.preventDefault(); // Empêcher le comportement par défaut du lien
            window.open(googleSheetUrl, '_blank'); // Ouvre le lien dans une nouvelle fenêtre
        });
    });
});





