let main = document.querySelector("main");

fetch('json/destinos_turisticos.json')
.then(response => {
     return response.json()
    })
.then(cate => {


    for (let i=0; i < 8; i++){
        if(i % 2==0){
            main.innerHTML += `
                <div class="mensaje n${i}">
                    <div class="fotito"><img src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png" alt=""></div>
                    <div class="datos">¡Tu aventura te espera! Salimos el 12|5|2005 a las 12:00 desde colombia. ¡No olvides tu cámara!</div>
                    <div class="visto">
                        <input type="button" onclick="visto('.n${i}')" value="visto"></div>
                    </div>
                </div>
            `
        }else{
            main.innerHTML += `
                <div class="mensaje n${i}">
                    <div class="fotito"><img src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png" alt=""></div>
                    <div class="datos">"¡Última llamada! Aún quedan plazas disponibles para nuestro tour de vinos este fin de semana. Reserva ahora y disfruta de una experiencia única.</div>
                    <div class="visto">
                        <input type="button" onclick="visto('.n${i}')" value="visto"></div>
                    </div>
                </div>
            `
        }
        
    }
    main.innerHTML += `<div class="auxiliar"></div>`

})