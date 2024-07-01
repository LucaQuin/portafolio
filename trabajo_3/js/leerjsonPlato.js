let resto = document.querySelector(".cosas")

fetch('json/platos_argentinos.json')
.then(response => {
     return response.json()
    })
.then(data => {
      for (let i=0; i < 10; i++){
        let puntu = ""
        let rango = ""


        // if (data[i].rango === "4"){
        //     rango = "attach_money attach_money attach_money attach_money"
        // }
        // else if (data[i].rango === "3"){
        //     rango = "attach_money attach_money attach_money"
        // }
        // else if (data[i].rango === "2"){
        //     rango = "attach_money attach_money"
        // }
        // else if (data[i].rango === "1"){
        //     rango = "attach_money"
        // }
        // else{
        //     rango = ""
        // }
        

        // if (data[i].puntuacion === "5"){
        //     puntu = "star star star star star"
        // }else if (data[i].puntuacion === "4"){
        //     puntu = "star star star star"
        // }else if (data[i].puntuacion === "3"){
        //     puntu = "star star star"
        // }else if (data[i].puntuacion === "2"){
        //     puntu = "star star"
        // }else if (data[i].puntuacion === "1"){
        //     puntu = "star"
        // }else{
        //     puntu = ""
        // }
       
         resto.innerHTML +=
         `       <a href="plato.html"><div class="plato">
                    <div class="foto-plato"><img src=${data[i].image}><div class="precio-pre">${data[i].price}</div></div>
                    <div class="info-plato">
                    <div class="plato-nombre">${data[i].plato}</div>
                    <div class="ingre">${data[i].ingredients}</div> 
                    <div class="des">${data[i].description}</div>
                    </div>
                </div></a>` 
       
    }
})


// {/* <div class="desc_resto">
//              <h3>${data[i].name}</h3>
//              <h5 class="gris_txt">
//                  <p>${data[i].direccion}</p>
//                  <p>${data[i].horario}s</p>
//              </h5>
//              <div class="precio_val">
//                  <div class="valoracion verde_txt">
//                      <i class="iconos">${data[i].puntuacion}</i>
                    
//                      (72)
//                  </div>
//                  <div class="precio verde_txt">
//                      <i class="iconos">attach_money</i><i class="iconos">attach_money</i><i
//                          class="iconos gris_txt">attach_money</i>

//                  </div>
//              </div>

//          </div>

//          <div class="puntuacion">${data[i].puntuacion}</div>
//          <div class="distancia"> 3KM</div> */}