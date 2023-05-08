const users = JSON.parse(localStorage.getItem('users')) || [];


const newUser = () => {
    const yourName = document.querySelector('#new-name').value;
    const yourSurname = document.querySelector('#new-surname').value;
    const mail = document.querySelector('#new-email').value;
    const username = document.querySelector('#new-username').value;
    const password = document.querySelector('#new-password').value;
    const confirmPassword = document.querySelector('#new-confirmPass').value;

    if (!yourName || !yourSurname || !mail || !username || !password || !confirmPassword) {
        Swal.fire({
            title: 'Faltan datos para registrarte',
            text: 'Intente nuevamente',
            icon: 'warning',
            confirmButtonText: 'Reintentar',
            background: '#ffffff',
            color: '#000000',
            confirmButtonColor: '#FFA500'
        });
    } else if (password !== confirmPassword) {
        Swal.fire({
            title: 'Las contraseñas no coinciden',
            text: 'Intente nuevamente',
            icon: 'warning',
            confirmButtonText: 'Reintentar',
            background: '#ffffff',
            color: '#000000',
            confirmButtonColor: '#FFA500'
        });
    } else {
        const compareUser = users.find(o => o.username === username);
        const compareEmail = users.find(o => o.mail === mail);

        if (compareUser && compareEmail) {
            Swal.fire({
                title: 'Ese usuario e email ya se encuentran registrados',
                text: 'Intente nuevamente',
                icon: 'error',
                confirmButtonText: 'Reintentar',
                background: '#ffffff',
                color: '#000000',
                confirmButtonColor: '#FFA500'
            });
        } else if (compareUser) {
            Swal.fire({
                title: 'Ese usuario ya está registrado',
                text: 'Intente nuevamente',
                icon: 'error',
                confirmButtonText: 'Reintentar',
                background: '#ffffff',
                color: '#000000',
                confirmButtonColor: '#FFA500'
            });
        } else if (compareEmail) {
            Swal.fire({
                title: 'Email ya registrado',
                text: 'Intente nuevamente',
                icon: 'warning',
                confirmButtonText: 'Reintentar',
                background: '#ffffff',
                color: '#000000',
                confirmButtonColor: '#FFA500'
            });
        } else {
            Swal.fire({
                title: 'Felicitaciones!',
                text: 'Tu cuenta fué creada con éxito!',
                icon: 'success',
                confirmButtonText: 'Logearse en Mossi Motos',
                background: '#ffffff',
                color: '#000000',
                confirmButtonColor: '#FFA500'
            }).then(function () {
                window.location = "../index.html";
            });

            const addNewUser = {
                name: yourName,
                surname: yourSurname,
                mail: mail,
                username: username,
                password: password
            };

            users.push(addNewUser);

            const jsonParse = JSON.stringify(users);
            localStorage.setItem('users', jsonParse);

            let gettingUsers = localStorage.getItem('users');
            gettingUsers = JSON.parse(gettingUsers);
        }
    }
};


const btnRegister = document.querySelector('#register-btn');
if (btnRegister) {
    btnRegister.addEventListener('click', newUser);
}