const navLinks =document.querySelectorAll('.header-center nav a');
navLinks .forEach(link => {
    link.addEventListner('click' , () => {
        navLinks.forEach(navLink.classList.remove('active') );
        link.classList.add('active');  
});  
});






  