document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'Zahra' && password === 'student-nf23') {
        window.location.href = 'sukses.html';
    } else {
        alert('Login . Silakan coba lagi!');
    }
});