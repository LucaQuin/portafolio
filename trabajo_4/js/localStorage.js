function pintarDatoLocal(coso) {
  fetch('json/destinos_turisticos.json')
  .then(response => {
      return response.json()
      })
  .then(cate => {
    const argu=["destinos_populares","destinos_exóticos","destinos_históricos","destinos_aventura"];
        for (let i=0; i < 4; i++){
          
          cate[argu[i]].forEach(destino => {
            if(destino.id_lugar==coso){
              localStorage.setItem("id", destino.id_lugar);
              localStorage.setItem("img", destino.foto);
              localStorage.setItem("valoración", destino.valoración);
              localStorage.setItem("nombre", destino.nombre);
              localStorage.setItem("precio", destino.precio);
              localStorage.setItem("clima", destino.clima);
              localStorage.setItem("duración_viaje", destino.duración_viaje);
              localStorage.setItem("descripción", destino.descripción);
              localStorage.setItem("favorito", destino.favorito);
            }
        })
      }
  })
}

function categoria(num_cate) {
  localStorage.setItem("num_cate", num_cate);
}

function reservas(num_cate) {
  let aux=0;
  let numCatesArray = JSON.parse(localStorage.getItem('num_cates')) || [];


  if (numCatesArray=="") {
    numCatesArray.push("0");    
  }

  numCatesArray.forEach(destino => {
    if (destino==num_cate) {
      aux=1;
    }
  });
  num_cate=num_cate.toString()
  if (aux==0) {
    numCatesArray.push(num_cate);
    localStorage.setItem('num_cates', JSON.stringify(numCatesArray));
  }
}


function comprar(num_cate) {
  let numCatesArray = JSON.parse(localStorage.getItem('num_cates')) || [];

  num_cate=num_cate.toString()
  let index = numCatesArray.indexOf(num_cate);

  if (index !== -1) {
    numCatesArray.splice(index, 1);
  }

  localStorage.setItem('num_cates', JSON.stringify(numCatesArray));
  window.location.href = "reservas.html";
}


function favorito(param, param2){

  let num_cate=param;

  
  param2=`${param2}`

  let favoritio = document.querySelector(param2);

  // console.log(favoritio)

  let numCatesArray = JSON.parse(localStorage.getItem('favoritos')) || [];

  if (numCatesArray=="") {
    numCatesArray.push("0");    
  }

  num_cate=num_cate.toString();
  let index = numCatesArray.indexOf(num_cate);

  console.log(num_cate)
  if(index!=-1){
    favoritio.style.background = "white";
    favoritio.style.color = "black";
    numCatesArray.splice(index, 1);
    localStorage.setItem('favoritos', JSON.stringify(numCatesArray));
    // window.location.href = "reservas.html";
  }else{
    favoritio.style.background = "black";
    favoritio.style.color = "#efb810";
    numCatesArray.push(num_cate);
    localStorage.setItem('favoritos', JSON.stringify(numCatesArray));
  }

}

function visto(num_mensaje){
  let mensaje = document.querySelector(num_mensaje);

  mensaje.style.display = "none";
}