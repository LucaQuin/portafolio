// let listaProductos = document.getElementById("productos")
// console.log(listaProductos)
// console.log(listaProductos.innerText)
// console.log("")
// // inner muestra   el elemento del nodo
// // si agregas HTML para mostrar los elementos con sus etiquetras
// // si agregas TEXT muestra solo el conetenido de los elementos

// let listaProducto = document.getElementById("producto")
// console.log(listaProducto)
// // Muestro un elemento o un nodo con su id (este caso es un elemento)
// console.log("")

// let contenedor = document.querySelector(".contenedor")
// console.log(contenedor)
// //en el querySelector se pone '.' si es una clase y '#' si es un id

// console.log("")
// console.log("")

// let cont = document.querySelectorAll(".contenedor")
// console.log(cont[1].innerHTML)
// //Muestra todos los nodos o elementos con esa clase y los guarda en un array.

// let container = document.getElementsByClassName("contenedor")
// console.log(container[0].innerHTML)
// // Busca con la clase y lo mete en un array

// setTimeout(() => {
//     alert(container[0].innerHTML)
// }, 1000);
// // Muestra por la alerta el contenmido despues de 1000 milisegundos


// -------------------------------------- |CREAR LISTA| --------------------------------------


// let nuevaLista = document.createElement("ul")

// document.body.appendChild(nuevaLista);

// let listaElemento1 = document.createElement("li");
// listaElemento1.textContent="Es Gratis";
// nuevaLista.appendChild(listaElemento1);

// let listaElemento2 = document.createElement("li");
// listaElemento2.textContent="Segunfo Item Lista";
// nuevaLista.appendChild(listaElemento2);



// -------------------------------------- |CREAR LISTA| --------------------------------------

let futer = document.querySelector("footer")
// alert(futer.innerText)

// futer.innerHTML = "<b>ALGO</b>"
// Remplaza el texto que hay en el footer

let resta = document.getElementById("resta")
let suma = document.getElementById("suma")
let cont = document.getElementById("contador")

let counter = 1

cont.innerHTML = counter

function aumentar() {
    if (counter<10){
        counter = counter + 1
        cont.innerHTML = counter
    }
    else{
        alert("No se puede aumentar mas")
    }
    
}

function disminuir() {
    if (counter>1){
        counter = counter - 1
        cont.innerHTML = counter
    }
    else{
        resta.style.cursor = "not-allowed"
        resta.style.cursor = "disabled = true"
        alert("No se puede descontar mas")
    }
}