let categorias = document.querySelector(".categoria")

fetch('json/comida_categorias.json')
.then(response => {
     return response.json()
    })
.then(cate => {
      for (let i=0; i < cate.length; i++){
         categorias.innerHTML += `
                    <li><a href="${cate[i].url}"><div class="cate"><i class="${cate[i].img}"></i>${cate[i].nombre}</div></a></li>
                `
       
    }
})

