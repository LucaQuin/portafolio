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
            }
        })
      }
  })
}

function categoria(num_cate) {
  localStorage.setItem("num_cate", num_cate);
}