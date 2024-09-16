let port = document.querySelector("header")
let cuer = document.querySelector("main")
let pie = document.querySelector("footer")

port.innerHTML += `
    <section class="portada">    
            <div class="foto"><img src="${localStorage.getItem("img")}">
            <a href="inicio.html"><div class="cruz"><i class="fa-solid fa-chevron-left"></i></div></a>
            <div class="fav" onclick="favorito(${localStorage.getItem("id")},'.fav')"><i class="fa-solid fa-star aux"></i></div>
        </div>
        <div class="informacion">
            <div class="cuerpo-ofertas">
                <b>${localStorage.getItem("nombre")}</b>
            </div>
        </div>
    </section>
    `

    cuer.innerHTML += `
        <div class="cuerpo">
            <div class="opcs">
                <div class="opc1">visión general</div>
                <div class="opc1">Comentarios</div>
            </div>

            <div class="datos">
                <div class="dato">
                    <div class="figu"><i class="fa-solid fa-star"></i></div>
                    <div class="cositas"><p>${localStorage.getItem("valoración")}</p>rating</div>
                </div>
                <div class="dato">
                    <div class="figu"><i class="fa-solid fa-cloud"></i></div>
                    <div class="cositas"><p>${localStorage.getItem("clima")}</p>climate</div>
                </div>
                <div class="dato">
                    <div class="figu"><i class="fa-regular fa-clock"></i></div>
                    <div class="cositas"><p>${localStorage.getItem("duración_viaje")}</p>duración</div>
                </div>
            </div>

            <div class="descripción">
                <div class="res">${localStorage.getItem("descripción")}</div>
            </div>
        </div>
    `
    pie.innerHTML += `
            <div class="costo">
                <div class="palabra">Precio total</div>
                <div class="precio">${localStorage.getItem("precio")}</div>
            </div>
            <div class="boton"><input type="button" onclick="reservas(${localStorage.getItem("id")})" value="reservar"></div>
    `;


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