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
    tpl +=`
        <div class="des">
            <div class="viaje">
                <div class="info tam">NOMBRE</div>
                <div class="info tam">PRECIO</div>
                <div class="info tam">VALORACION</div>
                <div class="info tam">DURACION DEL VIAJE</div>
                <div class="info tam">COMPRAR VIAJE</div>
            </div>
        </div>
        <div class="reservados">
    `;
   for (let x = 0; x < 4; x++) {
        cate[argu[x]].forEach(destino => {
            reservados.forEach(reservados_id => {
                if (reservados_id==destino.id_lugar) {
                    tpl +=`
                        <div class="viaje">
                       
                       
                        <div class="info">${destino.nombre}</div>
                            <div class="info">${destino.precio}</div>
                            <div class="info">${destino.valoración}</div>
                            <div class="info">${destino.duración_viaje}</div>
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

   ofertas.innerHTML = tpl;

})