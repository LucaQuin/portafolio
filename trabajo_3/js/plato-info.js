function guardarData(coso) {
    fetch('json/platos_argentinos.json')
    .then(response => {
        return response.json()
        })
    .then(plato => {
          for (let i=0; i < plato.length; i++){
            if(plato[i].plato==coso){
                
              localStorage.setItem("foto", plato[i].image);
              localStorage.setItem("puntuacion", plato[i].rate);
              localStorage.setItem("nombre", plato[i].plato);
              localStorage.setItem("info", plato[i].description);
            }
        }
    })

    fetch('json/platos_peruanos.json')
    .then(response => {
        return response.json()
        })
    .then(plato => {
          for (let i=0; i < plato.length; i++){
            if(plato[i].plato==coso){
                
              localStorage.setItem("foto", plato[i].image);
              localStorage.setItem("puntuacion", plato[i].rate);
              localStorage.setItem("nombre", plato[i].plato);
              localStorage.setItem("info", plato[i].description);
            }
        }
    })
}

