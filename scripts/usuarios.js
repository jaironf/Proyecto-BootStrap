const printCard = document.querySelector('.card'); 
let listaUsuarios = []; 


listaUsuarios = JSON.parse(localStorage.getItem('usuario')) || [];

    for (let i = 0; i < listaUsuarios.length; i++) {
    printCard.innerHTML += `<div class="card">
    <em>Usuario</em><br>
    <img src="../assets/images/monstruo.png"><br>
        <p class="title-card">Nombre: ${listaUsuarios[i].name}</p>
        <p class="product-nameh3">Email: ${listaUsuarios[i].email}</p><br>
      </div>`
    }

function deleteAll() {
  localStorage.clear();
}



