function pintarDatoLocal(coso) {
  fetch('js/restaurantes.json')
  .then(response => {
      return response.json()
      })
  .then(cate => {
        for (let i=0; i < cate.length; i++){
          if(cate[i].truck_id==coso){
            localStorage.setItem("id", cate[i].truck_id);
            localStorage.setItem("img", cate[i].cover_photo.src);
            localStorage.setItem("puntuacion", cate[i].puntuacion);
            localStorage.setItem("nombre", cate[i].name);
            localStorage.setItem("dire", cate[i].direccion);
            localStorage.setItem("rango", cate[i].rango);
            localStorage.setItem("delivery", cate[i].deli);
            localStorage.setItem("horario", cate[i].horario);
            localStorage.setItem("dista", cate[i].dista);
            localStorage.setItem("info", cate[i].bio);
          }
      }
  })
  // console.log(localStorage);
}