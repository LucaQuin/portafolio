let valorAc = document.getElementById("valorA");
let valorBc = document.querySelector("#valorB");
// let valorBc = document.querySelector("body");
// let valorBc = document.querySelector(".clase");
// let valorBc = document.querySelector("#id");
// let valorBc = document.getElementById("#id");
// let valorBc = document.querySelectorAll("#valorB");
// este devuelve



function pintarDato() {
  let a = valorAc.value;
  console.log(a);
  let resultadoA = document.getElementById("resulA");
  resultadoA.innerText = a;
}

function pintarDatoLocal() {
  let b = valorBc.value;
  localStorage.setItem("titulo", b);
  alert("El valor ingresado es: " + b);
}

function borrarLocal(){
    localStorage.clear();
}

let resultadoB = document.getElementById("resulB");
resultadoB.innerHTML = localStorage.getItem("titulo");
console.log(localStorage.getItem("titulo"));