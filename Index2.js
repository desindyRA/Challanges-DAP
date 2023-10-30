document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.querySelector('.register-link');

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html'; // Replace 'index.html' with the actual file name of your login page
    });
});
