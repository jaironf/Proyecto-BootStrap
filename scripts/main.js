const form = document.querySelector('#my-form')
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById('inputPassword');
const repeatPassword = document.getElementById('repeatPassword');
const msgDiv = document.querySelector(".alert-danger");
const successMsg = document.querySelector('.alert-success')

//console.log(inputName,inputEmail,inputPassword,repeatPassword);
let listaUsuarios = []; 
function sendInfo(e) {
    e.preventDefault();
let listaUsuarios = JSON.parse(localStorage.getItem("usuario")) || [];
const name = inputName.value
const email = inputEmail.value
const password = inputPassword.value
const passwordRepeat = repeatPassword.value
const user ={
    name,
    email,
    password,
    passwordRepeat,
}
if (name === "" || email === "" || password === "" || passwordRepeat ==="") {
console.log('Debes de rellenar todos los campos')
} else if(/(\w+?@\w+?\x2E.+)/.test(email) !== true) {
    msgDiv.innerHTML ='Por favor introduzca un correo válido';
} else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password) !== true) {
    msgDiv.innerHTML ='Por favor introduzca una contraseña que contenga al menos una minúscula, una mayúscula y un número y que la longitud mínima sea de 8 caracteres.';
} else if (password !== passwordRepeat) {
    msgDiv.innerHTML ='La contraseña no coincide';
} else {
    listaUsuarios.push(user);
    localStorage.setItem("usuario", JSON.stringify(listaUsuarios));
    console.log(listaUsuarios)
    successMsg.innerHTML ='Usuario creado correctamente';
    window.location.href = "./pages/usuarios.html";
}
setTimeout((time) => {
    msgDiv.innerHTML = '';
}, 3000);

}

form.addEventListener('submit', sendInfo)


