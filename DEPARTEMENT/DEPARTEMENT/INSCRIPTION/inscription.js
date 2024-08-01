function validateForm() {
    document.getElementById('validation').style.display = 'block';
}

function handleCheckboxClick(div) {
    // Toggle the class 'checked' on the clicked div
    div.classList.toggle('checked');

    // Find the checkbox inside the clicked div
    var checkbox = div.querySelector('.check1');

    // Toggle the checked property of the checkbox
    checkbox.checked = !checkbox.checked;
}
