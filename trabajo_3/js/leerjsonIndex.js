let resto = document.querySelector(".resultado")

fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
.then(data => {
      for (let i=0; i < 10; i++){
        let puntu = ""
        let rango = ""


        if (data[i].rango === "4"){
            rango = "attach_money attach_money attach_money attach_money"
        }
        else if (data[i].rango === "3"){
            rango = "attach_money attach_money attach_money"
        }
        else if (data[i].rango === "2"){
            rango = "attach_money attach_money"
        }
        else if (data[i].rango === "1"){
            rango = "attach_money"
        }
        else{
            rango = ""
        }
        

        if (data[i].puntuacion === "5"){
            puntu = "star star star star star"
        }else if (data[i].puntuacion === "4"){
            puntu = "star star star star"
        }else if (data[i].puntuacion === "3"){
            puntu = "star star star"
        }else if (data[i].puntuacion === "2"){
            puntu = "star star"
        }else if (data[i].puntuacion === "1"){
            puntu = "star"
        }else{
            puntu = ""
        }
       
         resto.innerHTML +=
         /*html*/`
         
         <a href="restaurante.html" onclick="pintarDatoLocal('${data[i].truck_id}')">
                <article class="resto">
                    <div class="foto-ofertas">
                        <img src="${data[i].avatar.src}" alt=" " class="imagen">
                        <div class="dis-ofertas">3km</div>
                    </div>
                    <div class="cuerpo-ofertas">
                        <div class="cali-ofertas">${data[i].puntuacion}</div>
                        <div class="nom-ofertas"> <b>${data[i].name}</b></div>
                        <div class="dire-ofertas">${data[i].direccion}  
                            <p>${data[i].horario}</p>
                        </div>
                        <div class="estrellas-ofertas"><i class="iconos">${puntu}</i> (50)</div>
                        <div class="preci-ofertas"><i class="iconos">${rango}</i>
                    </div>
                </article>
            </a>` 
       
    }
})


{/* <div class="desc_resto">
             <h3>${data[i].name}</h3>
             <h5 class="gris_txt">
                 <p>${data[i].direccion}</p>
                 <p>${data[i].horario}s</p>
             </h5>
             <div class="precio_val">
                 <div class="valoracion verde_txt">
                     <i class="iconos">${data[i].puntuacion}</i>
                    
                     (72)
                 </div>
                 <div class="precio verde_txt">
                     <i class="iconos">attach_money</i><i class="iconos">attach_money</i><i
                         class="iconos gris_txt">attach_money</i>

                 </div>
             </div>

         </div>

         <div class="puntuacion">${data[i].puntuacion}</div>
         <div class="distancia"> 3KM</div> */}