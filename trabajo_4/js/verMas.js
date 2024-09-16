   let cabeza = document.querySelector("header")
   let ofertas = document.querySelector("main")


   fetch('json/destinos_turisticos.json')
   .then(response => {
       return response.json()
       })
   .then(cate => {
      const argu=["destinos_populares","destinos_exóticos","destinos_históricos","destinos_aventura"];
      num_cate=localStorage.getItem("num_cate");
      
      cabeza.innerHTML += `
            <a href="inicio.html"><div class="atras"><i class="fa-solid fa-chevron-left"></i></div></a>
            <div class="nombre">${argu[num_cate]}</div>
      `;
         cate[argu[num_cate]].forEach(destino => {

            ofertas.innerHTML += `
               <div class="cate2">
                  <a href="destino.html" onclick="pintarDatoLocal(${destino.id_lugar})">
                     <div class="cate">
                        <div class="foto_oferta"><img src="${destino.foto}"></div>
                        <div class="info_oferta">
                        <div class="name_oferta">${destino.nombre}</div>
                        <div class="precio_oferta">${destino.precio}</div>
                        </div>
                     </div>
                  </a>
                  <div class="fav fav${destino.id_lugar}" onclick="favorito(${destino.id_lugar},'.fav${destino.id_lugar}')"><i class="fa-solid fa-star aux"></i></div>
               </div>
             `
         })
         ofertas.innerHTML += `<div class="ayuda"></div>`
   })


   let favoritio = document.querySelector(".fav");
    let numCatesArray = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (numCatesArray=="") {
        numCatesArray.push("0");    
    }

    let id =localStorage.getItem("id").toString();
    let index = numCatesArray.indexOf(id);

    if(index!=-1){
        favoritio.style.background = "black";
        favoritio.style.color = "#efb810";
        console.log(localStorage.getItem("id"))
    }