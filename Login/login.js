// Simple localStorage-based user system for demo purposes

// Handle Login
if (document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const user = JSON.parse(localStorage.getItem(username));
        if (user && user.password === password) {
            window.location.href = "home.html";
        } else {
            document.getElementById('login-error').textContent = "Invalid credentials!";
        }
    });
}

// Handle Sign Up
if (document.getElementById('signup-form')) {
    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const surname = document.getElementById('surname').value.trim();
        const dob = document.getElementById('dob').value;
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const username = document.getElementById('new-username').value.trim();
        const password = document.getElementById('new-password').value;

        if (localStorage.getItem(username)) {
            document.getElementById('signup-error').textContent = "Username already exists!";
        } else if (
            name.length < 2 ||
            surname.length < 2 ||
            !dob ||
            !email ||
            !phone ||
            username.length < 3 ||
            password.length < 3
        ) {
            document.getElementById('signup-error').textContent = "Please fill all fields correctly.";
        } else {
            localStorage.setItem(username, JSON.stringify({
                name,
                surname,
                dob,
                email,
                phone,
                password
            }));
            window.location.href = "login.html";
        }
    });
}