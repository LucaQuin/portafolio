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
         <div class="nombre">Perfil</div>
   `;
   
   let cant_fav=JSON.parse(localStorage.getItem('favoritos'));
   console.log(cant_fav)
   ofertas.innerHTML += `
         <div class="informacion">
         <div class="arriba">
            <div class="foto"><img src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png" alt=""></div>
         </div>
         <div class="abajo">
            <div class="info"><p>Nombre: </p>pepe</div>
            <div class="info"><p>Apellido: </p>Alcatraz</div>
            <div class="info"><p>Cant. Taejetas: </p>2</div>
            <div class="info"><p>Viajes Fav: </p>${cant_fav.length-1}</div>
         </div>
      </div>
   `

   
   let ofertasHTML = ''; // Crear una variable para acumular el HTML

   for (let x = 0; x < 4; x++) {
       cate[argu[x]].forEach(destino => {
           cant_fav.forEach(favs_id => {
               if (favs_id == destino.id_lugar) {
                   ofertasHTML += `
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
                            <div class="fav fav${destino.id_lugar}" onclick="favorito(${destino.id_lugar})"><i class="fa-solid fa-star aux"></i></div>
                        </div>
                    `;
                    console.log(destino.id_lugar)
               }
           });
       });
   }
   
   // Ahora, asigna el HTML acumulado al elemento 'ofertas'
   ofertas.innerHTML += ofertasHTML;
   
   // Ahora selecciona los elementos y realiza las acciones necesarias
   for (let x = 0; x < 4; x++) {
       cate[argu[x]].forEach(destino => {
           cant_fav.forEach(favs_id => {
               if (favs_id == destino.id_lugar) {
                    let numCatesArray = JSON.parse(localStorage.getItem('favoritos')) || [];
                    let text = `.fav${destino.id_lugar}`;
                    let favoritio = document.querySelector(text);

                    let id = destino.id_lugar.toString();
                    let index = numCatesArray.indexOf(id);
                
                    if(index!=-1){
                        favoritio.style.background = "black";
                        favoritio.style.color = "#efb810";
                      }
               }
           });
       });
   }
   
      ofertas.innerHTML += `<div class="ayuda"></div>`
})