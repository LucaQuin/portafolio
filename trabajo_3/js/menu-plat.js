let menu = document.querySelector(".menu")
let platos = document.querySelector(".cosas")

fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
.then(data => {
      for (let i=0; i < data.length; i++){
        if(data[i].truck_id==localStorage.getItem("id")){
            menu.innerHTML += `
                <a href="index.html"><div class="cruz"><i class="fa-solid fa-xmark"></i></div></a>
                <div class="nom">${data[i].name}</div>
            `
            // fetch('js/platos_argentinos.json')
            // .then(response => {
            //     return response.json()
            //     })
            // .then(data => {
            //     platos.innerHTML += `
            //     <a href="plato.html"><div class="plato">
            //         <div class="foto-plato"><img src=${data[i].image}><div class="precio-pre">${data[i].price}</div></div>
            //         <div class="info-plato">
            //         <div class="plato-nombre">${data[i].plato}</div>
            //         <div class="ingre">${data[i].ingredients}</div> 
            //         <div class="des">${data[i].description}</div>
            //         </div>
            //     </div></a>
            // `
            // })
            
            platos.innerHTML += `
            //     <a href="plato.html"><div class="plato">
            //         <div class="foto-plato"><img src=${data[i].image}><div class="precio-pre">${data[i].price}</div></div>
            //         <div class="info-plato">
            //         <div class="plato-nombre">${data[i].plato}</div>
            //         <div class="ingre">${data[i].ingredients}</div> 
            //         <div class="des">${data[i].description}</div>
            //         </div>
            //     </div></a>
            // `

            
        }
         
       
    }
})