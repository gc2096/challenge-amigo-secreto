let listaAmigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    let inputNombre = document.getElementById('amigo'); // Captura el campo de entrada
    let nuevoAmigo = inputNombre.value; // Obtiene el valor ingresado

    // Validar la entrada
    if (nuevoAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Agregar el nombre al array
    listaAmigos.push(nuevoAmigo);

    // Limpiar el campo de entrada
    inputNombre.value = '';

    //console.log(listaAmigos);
     mostrarListaAmigos(); // Actualizar la lista en pantalla
}

function mostrarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos'); // Obtener el elemento de la lista

    listaHTML.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Crear la lista de nombres como una cadena de HTML
    let contenidoLista = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        contenidoLista += `<li>${listaAmigos[i]}</li>`; 
    }

    listaHTML.innerHTML = contenidoLista;
}

function sortearAmigo() {
    // Validar que haya nombres en la lista
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista. Agrega nombres antes de sortear.');
        return;
    }

    // Generar un índice aleatorio dentro del rango del array
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // Obtener el nombre sorteado usando el índice aleatorio
    let amigoSorteado = listaAmigos[indiceAleatorio];

    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}

