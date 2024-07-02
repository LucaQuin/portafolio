let port = document.querySelector(".portada")
let cuer = document.querySelector("main")

port.innerHTML += `
        <div class="foto"><img src="${localStorage.getItem("foto")}">
        <div class="cruz"><a href="menu-plato.html">X</a></div>
    </div>
    <div class="calificacion">${localStorage.getItem("puntuacion")}</div>
    <div class="informacion">
        <div class="cuerpo-ofertas">
            <b>${localStorage.getItem("nombre")}</b>
        </div>
    </div>
    `

    cuer.innerHTML += `
        <div class="res">${localStorage.getItem("info")}</div>
        <div class="extra"><div class="texto extra"><input type="text" placeholder="Anadir nota extra"></div></div>
    `