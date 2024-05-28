document.addEventListener('DOMContentLoaded', () => {
    
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password === confirmPassword) {
                document.getElementById('registerForm').classList.add('hidden');
                document.getElementById('successMessage').classList.remove('hidden');
            } else {
                alert('As senhas não coincidem!');
            }
        });
    }
});
document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('mainContainer').style.transform = 'translateX(-100vw)';
    setTimeout(() => {
        window.location.href = 'home.html'; // Substitua 'home.html' pela página de destino após o login
    }, 500); // Deve ser igual ao tempo da transição no CSS
});

document.getElementById('registerLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registerContainer').style.transform = 'translateX(-100vw)';
    setTimeout(() => {
        window.location.href = 'register.html';
    }, 500); // Deve ser igual ao tempo da transição no CSS
});