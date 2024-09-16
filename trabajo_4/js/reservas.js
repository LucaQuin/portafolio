let cabeza = document.querySelector("header")
let ofertas = document.querySelector("main")


fetch('json/destinos_turisticos.json')
.then(response => {
    return response.json()
    })
.then(cate => {
   const argu=["destinos_populares","destinos_exóticos","destinos_históricos","destinos_aventura"];
   let reservados= JSON.parse(localStorage.getItem("num_cates"));

   cabeza.innerHTML += `
         <a href="inicio.html"><div class="atras"><i class="fa-solid fa-chevron-left"></i></div></a>
         <div class="nombre">Reservas</div>
   `;
    let tpl="";
   for (let x = 0; x < 4; x++) {
        cate[argu[x]].forEach(destino => {
            reservados.forEach(reservados_id => {
                if (reservados_id==destino.id_lugar) {
                    tpl +=`
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
                            <div class="info"><input type="button" onclick="comprar(${destino.id_lugar})" value="comprar"></div>
                        </div>
                    `;
                }                    
            });
        })
   }
   tpl +=`
        </div>
   `;
   tpl += `<div class="auxiliar"></div>`

   ofertas.innerHTML = tpl;

})