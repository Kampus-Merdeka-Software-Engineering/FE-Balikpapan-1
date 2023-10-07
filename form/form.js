const API_URL = "https://balikpapan-1-api.up.railway.app";


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const password = form.querySelector('input[name="password"]').value;
        const confirmPassword = form.querySelector('input[name="confirmPassword"]').value;

        if (password !== confirmPassword) {
            alert('Password and confirm password do not match');
            return;
        }

        const userData = {
            name: name,
            email: email,
            password: password,
        };

        fetch(`${API_URL}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Registration failed');
            }
        })
        .then(data => {
            console.log('Registration successful', data);
        })
        .catch(error => {
            console.error('Registration failed', error);
        });
    });
});