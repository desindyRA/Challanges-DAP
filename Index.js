// index.js
document.addEventListener('DOMContentLoaded', function() {
    const registerLink = document.querySelector('.register-link');

    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'Index2.html'; // Ganti 'index2.html' dengan nama file halaman pendaftaran yang sesuai
    });
});
