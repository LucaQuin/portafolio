let restaurantes_portada = document.querySelector(".portada")
let restaurantes_info = document.querySelector("#resultado1")


// fetch('js/restaurantes.json')
// .then(response => {
//      return response.json()
//     })
// .then(resto => {
//       for (let i=0; i < resto.length; i++){
//         if(resto[i].truck_id==localStorage.getItem("id")){
            let puntu = ""
            let rango = ""
            let deli = ""


        if (localStorage.getItem("rango") === "4"){
            rango = "attach_money attach_money attach_money attach_money"
        }
        else if (localStorage.getItem("rango") === "3"){
            rango = "attach_money attach_money attach_money"
        }
        else if (localStorage.getItem("rango") === "2"){
            rango = "attach_money attach_money"
        }
        else if (localStorage.getItem("rango") === "1"){
            rango = "attach_money"
        }
        else{
            rango = ""
        }
        

        if (localStorage.getItem("puntuacion") === "5"){
            puntu = "star star star star star"
        }else if (localStorage.getItem("puntuacion") === "4"){
            puntu = "star star star star"
        }else if (localStorage.getItem("puntuacion") === "3"){
            puntu = "star star star"
        }else if (localStorage.getItem("puntuacion") === "2"){
            puntu = "star star"
        }else if (localStorage.getItem("puntuacion") === "1"){
            puntu = "star"
        }else{
            puntu = ""
        }


        restaurantes_portada.innerHTML += `
            <div class="foto"><img src="${localStorage.getItem("img")}"><div class="cruz"><a href="index.html"><i class="fa-solid fa-xmark"></i></a></div></div>
            <div class="calificacion">${puntu}</div>
            <div class="informacion">
                <div class="cuerpo-ofertas">
                    <div class="nom-ofertas"> <b>${localStorage.getItem("nombre")}</b></div>
                    <div class="dire">${localStorage.getItem("dire")}</div>
                    <div class="preci-ofertas">${rango}</div>
                </div>
            </div>
        `

        if(localStorage.getItem("delivery")==="true"){
            deli="fa-solid fa-truck-fast";
        }else{
            deli="fa-solid fa-house-circle-xmark";
        }

        restaurantes_info.innerHTML += `
            <div class="encabezado">
                <div class="hor"><i class="fa-regular fa-clock"></i><p>${localStorage.getItem("horario")}</p></div>
                <div class="hor"><i class="fa-solid fa-location-dot"></i><p>${localStorage.getItem("dista")}km</p></div>
                <div class="hor"><i class="${deli}"></i><p>delivery</p></div>
            </div>
            <div class="res">${localStorage.getItem("info")}</div>
        `
                
        // }
    // }
// })