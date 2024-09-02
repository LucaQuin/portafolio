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
            <div class="atras"><a href="inicio.html"><i class="fa-solid fa-chevron-left"></i></a></div>
            <div class="nombre">${argu[num_cate]}</div>
      `;
         cate[argu[num_cate]].forEach(destino => {

            ofertas.innerHTML += `
                <a href="destino.html" onclick="pintarDatoLocal(${destino.id_lugar})">
                   <div class="cate">
                      <div class="foto_oferta"><img src="${destino.foto}"></div>
                      <div class="info_oferta">
                         <div class="name_oferta">${destino.nombre}</div>
                         <div class="precio_oferta">${destino.precio}</div>
                      </div>
                   </div>
                </a>
             `
         })
         ofertas.innerHTML += `<div class="aux"></div>`
   })

   // cabeza.innerHTML += `
   //       <div class="cabeza">
   //          <div class="atras"><a href="inicio.html"><i class="fa-solid fa-chevron-left"></i></a></div>
   //          <div class="nombre"></div>
   //       </div>
   //    `;
      // let tpl ="";
      

      // for (let i=0; i < 4; i++){
         // cate[argu[i]].forEach(destino => {
            

            // if(num_cate==[i]){
               // tpl += `
               //    <a href="destino.html" onclick="pintarDatoLocal(${destino.id_lugar})">
               //       <div class="cate">
               //          <div class="foto_oferta"><img src="${destino.foto}"></div>
               //          <div class="info_oferta">
               //             <div class="name_oferta">${destino.nombre}</div>
               //             <div class="precio_oferta">${destino.precio}</div>
               //          </div>
               //       </div>
               //    </a>
               // `
            // }
         // })
      // }
      // tpl += `<div class="aux"></div>`
        
      //   ofertas.innerHTML = tpl;