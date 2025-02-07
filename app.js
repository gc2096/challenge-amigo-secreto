let listaAmigos = []; 

function agregarAmigo() {
    let inputNombre = document.getElementById('amigo'); 
    let nuevoAmigo = inputNombre.value;

    if (nuevoAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    listaAmigos.push(nuevoAmigo);

    inputNombre.value = '';

     mostrarListaAmigos(); 
}

function mostrarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos'); 

    listaHTML.innerHTML = "";

    let contenidoLista = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        contenidoLista += `<li>${listaAmigos[i]}</li>`; 
    }

    listaHTML.innerHTML = contenidoLista;
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista. Agrega nombres antes de sortear.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    let amigoSorteado = listaAmigos[indiceAleatorio];

    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}

