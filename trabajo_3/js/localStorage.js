function pintarDatoLocal(coso) {
  fetch('js/restaurantes.json')
  .then(response => {
      return response.json()
      })
  .then(cate => {
        for (let i=0; i < cate.length; i++){
          if(cate[i].truck_id==coso){
            localStorage.setItem("id", cate[i].truck_id);
          }
      }
  })
  console.log(localStorage);
}