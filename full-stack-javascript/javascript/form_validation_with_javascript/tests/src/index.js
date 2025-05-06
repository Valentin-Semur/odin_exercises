import "./styles.css";

const form = document.getElementById('registration-form');
const email = document.getElementById('email');
const postalCode = document.getElementById('postal-code');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const validators = {
    validateEmail() {
        if (email.validity.typeMismatch) {
            email.setCustomValidity('Please enter a valid email address');
        } else {
            email.setCustomValidity('');
        }
        email.reportValidity();
    },
    validatePostalCode() {
        if (postalCode.value.length !== 5) {
            postalCode.setCustomValidity('Please enter a valid postal code (5 digits)');
        } else {
            postalCode.setCustomValidity('');
        }
        postalCode.reportValidity();
    },
    validatePassword() {
        if (password.value.length < 8) {
            password.setCustomValidity('Password must be at least 8 characters long');
        } else {
            password.setCustomValidity('');
        }
        password.reportValidity();
    },
    validateConfirmPassword() {
        if (confirmPassword.value !== password.value) {
            confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            confirmPassword.setCustomValidity('');
        }
        confirmPassword.reportValidity();
    }
};

// Add event listeners to all fields
const fields = [
    { element: email, validate: validators.validateEmail },
    { element: postalCode, validate: validators.validatePostalCode },
    { element: password, validate: validators.validatePassword },
    { element: confirmPassword, validate: validators.validateConfirmPassword }
];

fields.forEach(field => {
    field.element.addEventListener('input', field.validate);
});

// Add event listener to the form submit button
function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission

    // Validate all fields before submitting
    Object.values(validators).forEach(validate => validate());

    // Check if the form is valid
    if (form.checkValidity()) {
        const formData = {
            email: email.value,
            country: form.country.value,
            postalCode: postalCode.value,
            password: password.value,
        };
        console.log('Form submitted:', formData);
        form.reset(); // Reset the form after submission
    } else {
        console.log('Form is invalid. Please correct the errors.');
    }
}

form.addEventListener('submit', handleSubmit);


