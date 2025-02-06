// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigoSecreto;

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    //Validar que el usuario agregue un nombre
    if (nombre == "" || nombre == " "){
        alert("Por favor introduzca un nombre válido");
        }else{
            // agregar nombre al arreglo
        amigos.push(nombre);
        //limpiar caja 
        limpiarCaja();
        mostrarListaAmigos();
        console.log(amigos);
        }
}


function limpiarCaja(){
    //definicion de la funcion limpiar caja de nombres
    document.querySelector('#amigo').value = '';
}


function mostrarListaAmigos(){
    //definicion de funcion mostrar lista de amigos

    let listaAmigos = document.querySelector('#listaAmigos');

    listaAmigos.innerHTML = "";
    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo(){
    //validar que haya amigos disponibles
    validarAmigos();
    //generar indice aleatorio

    //obtener nombre sorteado
    mostrarNombreSorteado();
    //mostrar el resultado 
}

function validarAmigos(){


    if (amigos.length < 3){
        alert("Por favor ingrese al menos 3 nombres para sortear el Amigo Secreto");
    }else{
        generarAleatorio();
    }
}

function generarAleatorio(){
    let numeroAmigos = amigos.length;
    console.log(numeroAmigos);

    amigoSecreto = Math.floor(Math.random()*numeroAmigos)+1;
    console.log(amigoSecreto);
}

function mostrarNombreSorteado(){
    let nombreSorteado = amigos[amigoSecreto]; 
    console.log(nombreSorteado);
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = "Tu Amigo secreto es: "+ nombreSorteado;
    
}

