let ofertas = document.querySelector(".ofertas");

// localStorage.clear();
fetch('json/destinos_turisticos.json')
.then(response => {
     return response.json()
    })
.then(cate => {
    // localStorage.setItem('num_cates', ['0', '14', '15', '1', '2', '3', '13']);

    let aux=0;
    const argu=["destinos_populares","destinos_exóticos","destinos_históricos","destinos_aventura"];
    let tpl ="";
    
      for (let i=0; i < 4; i++){
        tpl += `
            <div class="categorias">
                <div class="tipos_de_ofertas">
                    <div class="nombre_de_ofertas">${argu[i]}</div>
                    <div class="seeAll_oferta"><a href="ver_mas.html" onclick="categoria(${[i]})">ver todo</a></div>
                </div>
                <div class="cates link_total">
            `
        cate[argu[i]].forEach(destino => {
            aux++;
            if(aux<=5){
            tpl += `
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
            }
        })
        aux=0;
        tpl += `
            </div></div>
            `
        ;
        
       
    }
    tpl += `<div class="aux"></div>`
        
        ofertas.innerHTML = tpl;
})


tapar.addEventListener("click", e => {
    let ojo = document.querySelector("#tapar");
    let ofertas = document.querySelector(".ofertas");
    let header = document.querySelector("header");
    let opc = document.querySelector("#opcs");

    let text="ofertas.style.margin-top"
    if(opc.style.display == "none"){
        opc.style.display = "flex";
        ofertas.style.height = "88%";
        header.style.height = "15%";
        ojo.innerHTML = "<i class='fa-solid fa-eye'></i>";
    }else{
        opc.style.display = "none";
        ofertas.style.height = "100%";
        header.style.height = "16.5%";
        ojo.innerHTML = "<i class='fa-solid fa-eye-slash'></i>";
    }
    console.log(ojo)
})