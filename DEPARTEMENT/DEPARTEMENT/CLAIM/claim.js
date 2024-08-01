function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var studentID = document.getElementById('studentID').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    
    var isValid = true; // Initialiser la variable isValid à true par défaut
    
    // Validation du champ Full Name
    if (fullName === '') {
        document.getElementById('fullNameError').textContent = 'Please enter your full name.';
        isValid = false; // La validation a échoué
    } else {
        document.getElementById('fullNameError').textContent = '';
    }
    
    // Validation du champ Email
    if (email === '') {
        document.getElementById('emailError').textContent = 'Please provide a valid email address.';
        isValid = false; // La validation a échoué
    } else {
        document.getElementById('emailError').textContent = '';
    }
    
    // Validation du champ Student/Staff ID
    if (studentID === '') {
        document.getElementById('studentIDError').textContent = 'Please enter your identification number.';
        isValid = false; // La validation a échoué
    } else {
        document.getElementById('studentIDError').textContent = '';
    }
    
    // Validation du champ Phone Number
    if (phoneNumber === '' || phoneNumber==='abcdefghigklmnopqrstupwyz') {
        document.getElementById('phoneNumberError').textContent = 'Please provide a valid phone number.';
        isValid = false; // La validation a échoué
    } else {
        document.getElementById('phoneNumberError').textContent = '';
    }
    
    // Affichage de la section de validation si tous les champs sont remplis
    if (fullName !== '' && email !== '' && studentID !== '' && phoneNumber !== '') {
        document.getElementById('validation').style.display = 'block';
    }
}
