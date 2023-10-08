const API_URL = "https://balikpapan-1-api.up.railway.app";

//SIGN IN
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

        fetch(`${API_URL}/auth/daftar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Parse the response JSON
            } else {
                throw new Error('Registration failed');
            }
        })
        .then(data => {
            // Save name and email to localStorage
            // localStorage.setItem('name', data.name);
            // localStorage.setItem('email', data.email);
        
            Swal.fire({
                icon: 'success',
                title: 'Good Job!',
                text: 'Account have been created!',
            }).then(() => {
                window.location.href = 'FE-Balikpapan-1';
            });
        })
        .catch(error => {
            console.error('Registration failed', error);
        });
    });
});


//LOGIN
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = form.querySelector('input[name="email"]').value;
        const password = form.querySelector('input[name="password"]').value;

        const userData = {
            email: email,
            password: password,
        };

        fetch(`${API_URL}/auth/masuk`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Parse the response JSON
            } else {
                throw new Error('Registration failed');
            }
        })
        .then(data => {
            console.log(data);
            localStorage.setItem('name', data.data.name);
            localStorage.setItem('email', data.data.email);
            localStorage.setItem('id', data.data.id);
        
            Swal.fire({
                icon: 'success',
                title: 'Good Job!',
                text: 'Berhasil Login!',
            })
            .then(() => {
                window.location.href = './';
            });
        })
        .catch(error => {
            console.error('Registration failed', error);
        });
    });
});
