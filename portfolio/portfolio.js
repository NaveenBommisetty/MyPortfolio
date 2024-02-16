document.getElementById('myForm').addEventListener('submit', function (event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Reset previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Validate name field
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        event.preventDefault(); // Prevent form submission
    }

    // Validate email field
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Invalid email address';
        event.preventDefault(); // Prevent form submission
    }

    // Validate message field
    if (messageTextarea.value.trim() === '') {
        messageError.textContent = 'Message is required';
        event.preventDefault(); // Prevent form submission
    }
});
