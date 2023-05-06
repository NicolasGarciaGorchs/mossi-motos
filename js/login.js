const users = JSON.parse(localStorage.getItem('users')) || [];


let activeUser;

const findAndValidate = () => {
    const validateUser = document.querySelector('#username').value;
    const validatePassword = document.querySelector('#password').value;

    const credentialConfirmation = users.find(o => o.username === validateUser && o.password === validatePassword);

    if (credentialConfirmation) {
        Swal.fire({
            title: 'Bienvenido!',
            text: 'Fuiste logeado correctamente',
            icon: 'success',
            confirmButtonText: 'Ir a Mossi Motos',
            background: '#ffffff',
            color: '#000000',
            confirmButtonColor: '#FFA500'
        }).then(function () {
            window.location = "pages/home.html";
        
        });
    } else {
        Swal.fire({
            title: 'Usuario o contraseña incorrecta',
            text: 'Inténtelo nuevamente',
            icon: 'error',
            confirmButtonText: 'Reintentar',
            background: '#ffffff',
            color: '#000000',
            confirmButtonColor: '#FFA500'
        });
    }
};

const loginBtn = document.querySelector('#login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', findAndValidate);
}