let personas = document.querySelector(".cosas")

fetch('json/personas_argentinas.json')
.then(response => {
     return response.json()
    })
.then(persona => {
      for (let i=0; i < persona.length; i++){
         personas.innerHTML += `
                    <div class="reseñas-total">
                    <div class="reseña">
                    <div class="foto-reseña">
                        <img src=${persona[i].image}>
                        <div class="precio-reseña">${persona[i].price}</div> 
                    </div>
                    <div class="info-reseña">
                        <div class="nombre dark">${persona[i].nombre}</div>
                        <div class="nombre">${persona[i].description}</div>
                        <div class="des">${persona[i].opinion}</div> 
                    </div>
                </div></a>
                `
       
    }
})