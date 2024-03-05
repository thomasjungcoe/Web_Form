const email = document.getElementById('email');

email.addEventListener('input', (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please enter a valid email address!');
    } else {
        email.setCustomValidity('');
    }
})