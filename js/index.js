// Function to validate the registration form
function validateForm() {
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Regular expressions for validation
    var nameRegex = /^[a-zA-Z]{3,15}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validation for first name
    if (!nameRegex.test(firstName)) {
        alert("First name must be between 3 and 15 characters long and contain only alphabets.");
        return false;
    }

    // Validation for last name
    if (!nameRegex.test(lastName)) {
        alert("Last name must be between 3 and 15 characters long and contain only alphabets.");
        return false;
    }

    // Validation for email
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validation for password
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
        return false;
    }

    // If all validations pass, return true
    return true;
}
