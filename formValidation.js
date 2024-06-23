function validateForm() {
    let isValid = true;

    
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.style.display = 'none';
    });

    document.getElementById('formError').style.display = 'none';
    document.querySelectorAll('input').forEach(function(el) {
        el.classList.remove('input-error');
    });

  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate username (not empty)
    if (username.trim() === '') {
        document.getElementById('usernameError').textContent = '⚠️ Please provide a name';
        document.getElementById('usernameError').style.display = 'block';
        document.getElementById('username').classList.add('input-error');
        isValid = false;
    }

    // Validate email (must match regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = '⚠️ Please provide a properly formatted email address';
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('email').classList.add('input-error');
        isValid = false;
    }

    // Validate password (minimum 6 characters)
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = '⚠️ Password must be at least 6 characters long';
        document.getElementById('passwordError').style.display = 'block';
        document.getElementById('password').classList.add('input-error');
        isValid = false;
    }

    // Validate password confirmation (must match password)
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = '⚠️ Passwords do not match';
        document.getElementById('confirmPasswordError').style.display = 'block';
        document.getElementById('confirmPassword').classList.add('input-error');
        isValid = false;
    }

    // If there are any errors, show the form error message
    if (!isValid) {
        document.getElementById('formError').style.display = 'block';
    }

    return isValid;
}

// Clear error messages when user starts typing
document.getElementById('username').addEventListener('input', function() {
    document.getElementById('usernameError').style.display = 'none';
    this.classList.remove('input-error');
});

document.getElementById('email').addEventListener('input', function() {
    document.getElementById('emailError').style.display = 'none';
    this.classList.remove('input-error');
});

document.getElementById('password').addEventListener('input', function() {
    document.getElementById('passwordError').style.display = 'none';
    this.classList.remove('input-error');
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    document.getElementById('confirmPasswordError').style.display = 'none';
    this.classList.remove('input-error');
});
