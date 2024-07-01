let restaurantes_portada = document.querySelector(".portada")
let restaurantes_info = document.querySelector("#resultado1")


fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
.then(resto => {
      for (let i=0; i < resto.length; i++){
        if(resto[i].truck_id==localStorage.getItem("id")){
            let puntu = ""
            let rango = ""
            let deli = ""


        if (resto[i].rango === "4"){
            rango = "attach_money attach_money attach_money attach_money"
        }
        else if (resto[i].rango === "3"){
            rango = "attach_money attach_money attach_money"
        }
        else if (resto[i].rango === "2"){
            rango = "attach_money attach_money"
        }
        else if (resto[i].rango === "1"){
            rango = "attach_money"
        }
        else{
            rango = ""
        }
        

        if (resto[i].puntuacion === "5"){
            puntu = "star star star star star"
        }else if (resto[i].puntuacion === "4"){
            puntu = "star star star star"
        }else if (resto[i].puntuacion === "3"){
            puntu = "star star star"
        }else if (resto[i].puntuacion === "2"){
            puntu = "star star"
        }else if (resto[i].puntuacion === "1"){
            puntu = "star"
        }else{
            puntu = ""
        }


        restaurantes_portada.innerHTML += `
            <div class="foto"><img src="${resto[i].cover_photo.src}"><div class="cruz"><a href="index.html">X</a></div></div>
            <div class="calificacion">${puntu}</div>
            <div class="informacion">
                <div class="cuerpo-ofertas">
                    <div class="nom-ofertas"> <b>${resto[i].name}</b></div>
                    <div class="dire">${resto[i].direccion}</div>
                    <div class="preci-ofertas">${rango}</div>
                </div>
            </div>
        `

        if(resto[i].deli==="true"){
            deli="fa-solid fa-truck-fast";
        }else{
            deli="fa-solid fa-house-circle-xmark";
        }

        restaurantes_info.innerHTML += `
            <div class="encabezado">
                <div class="hor"><i class="fa-regular fa-clock"></i><p>${resto[i].horario}</p></div>
                <div class="hor"><i class="fa-solid fa-location-dot"></i><p>${resto[i].dista}km</p></div>
                <div class="hor"><i class="${deli}"></i><p>delivery</p></div>
            </div>
            <div class="res">${resto[i].bio}</div>
        `
                
        }
    }
})