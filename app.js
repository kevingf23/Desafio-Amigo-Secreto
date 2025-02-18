// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let numeroAleatorio = 0;
let lista = document.getElementById('listaAmigos');


function agregarAmigo () {

    if (document.getElementById('amigo').value == "") {

        alert("Por favor, inserte un nombre");

    } else {

        let amigo = document.getElementById('amigo').value;

        listaAmigos.push(amigo)

        actualizarLista(listaAmigos);

        //console.log(listaAmigos);

        document.getElementById('amigo').value = "";

    }

    if (listaAmigos.length >= 2) {

        document.getElementById('sortear').removeAttribute('disabled');
    }

    
}

function actualizarLista (listaAmigos) {

    lista.innerHTML = ""

    for (let i = 0; i < listaAmigos.length; i++) {

        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);

    }

}

function sortearAmigo () {

    numeroAleatorio = generarNumeroAleatorio(listaAmigos)

    lista.innerHTML = `El amigo secreto sorteado es: ${listaAmigos[numeroAleatorio]}`;


}

function generarNumeroAleatorio (listaAmigos) {

    let tamanioLista = listaAmigos.length;

    let numero = Math.floor(Math.random() * tamanioLista);

    return numero;
}