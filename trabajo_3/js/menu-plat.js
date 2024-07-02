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
            fetch('json/platos_argentinos.json')
            .then(respons => {
                return respons.json()
                })
            .then(plato => {
                for (let x=0; x < data[i].platos.plato_name.length; x++){
                for (let y=0; y < plato.length; y++){
                    
                    if(data[i].platos.plato_name[x]==plato[y].plato){
                        platos.innerHTML += `
                            <a href="plato.html" onclick="guardarData('${plato[y].plato}')"><div class="plato">
                                <div class="foto-plato"><img src=${plato[y].image}><div class="precio-pre">$ ${plato[y].price}</div></div>
                                <div class="info-plato">
                                <div class="plato-nombre dark">${plato[y].plato}</div>
                                <div class="ingre gray">${plato[y].ingredients}</div> 
                                <div class="des">${plato[y].description}</div>
                                </div>
                            </div></a>
                        `
                    }
                }
                    
               }
            })

            fetch('json/platos_peruanos.json')
            .then(respons => {
                return respons.json()
                })
            .then(plato => {
                for (let x=0; x < data[i].platos.plato_name.length; x++){
                for (let y=0; y < plato.length; y++){
                    
                    if(data[i].platos.plato_name[x]==plato[y].plato){
                        platos.innerHTML += `
                            <a href="plato.html" onclick="guardarData('${plato[y].plato}')"><div class="plato">
                                <div class="foto-plato"><img src=${plato[y].image}><div class="precio-pre">$ ${plato[y].price}</div></div>
                                <div class="info-plato">
                                <div class="plato-nombre dark">${plato[y].plato}</div>
                                <div class="ingre gary">${plato[y].ingredients}</div> 
                                <div class="des">${plato[y].description}</div>
                                </div>
                            </div></a>
                        `
                    }
                }
                    
               }
            })
            
            // platos.innerHTML += `
            // //     <a href="plato.html"><div class="plato">
            // //         <div class="foto-plato"><img src=${data[i].image}><div class="precio-pre">${data[i].price}</div></div>
            // //         <div class="info-plato">
            // //         <div class="plato-nombre">${data[i].plato}</div>
            // //         <div class="ingre">${data[i].ingredients}</div> 
            // //         <div class="des">${data[i].description}</div>
            // //         </div>
            // //     </div></a>
            // // `

            
        }
         
       
    }
})
